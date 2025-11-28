<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Homepage;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class HomepageController extends Controller
{
    /**
     * Display a listing of all homepage sections.
     */
    public function index(): JsonResponse
    {
        try {
            $homepageData = Homepage::active()->get();
            
            return response()->json([
                'success' => true,
                'data' => $homepageData,
                'message' => 'Homepage data retrieved successfully'
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to retrieve homepage data',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get homepage data by section name.
     */
    public function getBySection(string $sectionName): JsonResponse
    {
        try {
            $homepageSection = Homepage::active()
                ->bySection($sectionName)
                ->first();

            if (!$homepageSection) {
                return response()->json([
                    'success' => false,
                    'message' => 'Homepage section not found'
                ], 404);
            }

            return response()->json([
                'success' => true,
                'data' => $homepageSection,
                'message' => 'Homepage section retrieved successfully'
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to retrieve homepage section',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): JsonResponse
    {
        try {
            $validated = $request->validate([
                'section_name' => 'required|string|max:255|unique:homepages,section_name',
                'data' => 'required|array',
                'is_active' => 'boolean'
            ]);

            $homepage = Homepage::create($validated);

            return response()->json([
                'success' => true,
                'data' => $homepage,
                'message' => 'Homepage section created successfully'
            ], 201);
        } catch (ValidationException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $e->errors()
            ], 422);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to create homepage section',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id): JsonResponse
    {
        try {
            $homepage = Homepage::find($id);

            if (!$homepage) {
                return response()->json([
                    'success' => false,
                    'message' => 'Homepage section not found'
                ], 404);
            }

            return response()->json([
                'success' => true,
                'data' => $homepage,
                'message' => 'Homepage section retrieved successfully'
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to retrieve homepage section',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id): JsonResponse
    {
        try {
            $homepage = Homepage::find($id);

            if (!$homepage) {
                return response()->json([
                    'success' => false,
                    'message' => 'Homepage section not found'
                ], 404);
            }

            $validated = $request->validate([
                'section_name' => 'sometimes|string|max:255|unique:homepages,section_name,' . $id,
                'data' => 'sometimes|array',
                'is_active' => 'sometimes|boolean'
            ]);

            $homepage->update($validated);

            return response()->json([
                'success' => true,
                'data' => $homepage->fresh(),
                'message' => 'Homepage section updated successfully'
            ], 200);
        } catch (ValidationException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $e->errors()
            ], 422);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to update homepage section',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Upload image to public/Assets folder and optionally save to database
     */
    public function uploadImage(Request $request): JsonResponse
    {
        try {
            $validated = $request->validate([
                'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg,webp|max:10240', // Max 10MB
                'section_name' => 'sometimes|string|max:255',
                'image_type' => 'sometimes|string|max:255', // e.g., 'collage', 'hero', 'marquee'
                'save_to_db' => 'sometimes|boolean'
            ]);

            $image = $request->file('image');
            
            // Get file info before moving
            $originalName = $image->getClientOriginalName();
            $fileSize = $image->getSize();
            $mimeType = $image->getMimeType();
            $extension = $image->getClientOriginalExtension();
            
            // Generate unique filename
            $filename = time() . '_' . Str::random(10) . '.' . $extension;
            
            // Create Assets directory in public folder if it doesn't exist
            $assetsDir = public_path('Assets');
            if (!is_dir($assetsDir)) {
                if (!mkdir($assetsDir, 0755, true)) {
                    throw new \Exception('Failed to create Assets directory');
                }
            }
            
            // Full path for the file
            $fullPath = $assetsDir . DIRECTORY_SEPARATOR . $filename;
            
            // Read file contents and write to destination
            $fileContents = file_get_contents($image->getPathname());
            if ($fileContents === false) {
                throw new \Exception('Failed to read uploaded file');
            }
            
            if (file_put_contents($fullPath, $fileContents) === false) {
                throw new \Exception('Failed to save file to Assets directory');
            }
            
            // Generate the relative path for database storage
            $relativePath = '/Assets/' . $filename;
            
            $response = [
                'success' => true,
                'data' => [
                    'filename' => $filename,
                    'original_name' => $originalName,
                    'path' => $relativePath,
                    'full_url' => url($relativePath),
                    'size' => $fileSize,
                    'mime_type' => $mimeType
                ],
                'message' => 'Image uploaded successfully'
            ];

            // Optionally save to database if section_name is provided
            if ($request->has('save_to_db') && $request->save_to_db && $request->has('section_name')) {
                $sectionName = $request->section_name;
                $imageType = $request->image_type ?? 'default';
                
                // Find or create the section
                $homepage = Homepage::where('section_name', $sectionName)->first();
                
                if (!$homepage) {
                    // Create new section for images
                    $homepage = Homepage::create([
                        'section_name' => $sectionName,
                        'data' => [],
                        'is_active' => true
                    ]);
                }
                
                // Get current data
                $currentData = $homepage->data ?? [];
                
                // Add new image to the data array
                $imageData = [
                    'id' => count($currentData) + 1,
                    'img' => $relativePath,
                    'type' => $imageType,
                    'uploaded_at' => now()->toISOString()
                ];
                
                $currentData[] = $imageData;
                
                // Update the homepage section
                $homepage->update(['data' => $currentData]);
                
                $response['data']['database_entry'] = $imageData;
                $response['data']['section_updated'] = $sectionName;
            }

            return response()->json($response, 201);
            
        } catch (ValidationException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $e->errors()
            ], 422);
        } catch (\Exception $e) {
            // Log the full error for debugging
            \Log::error('Image upload failed', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
                'request_data' => $request->except(['image'])
            ]);
            
            return response()->json([
                'success' => false,
                'message' => 'Failed to upload image',
                'error' => $e->getMessage(),
                'debug' => [
                    'file' => $e->getFile(),
                    'line' => $e->getLine()
                ]
            ], 500);
        }
    }

    /**
     * Delete image from public/Assets folder and optionally remove from database
     */
    public function deleteImage(Request $request): JsonResponse
    {
        try {
            $validated = $request->validate([
                'filename' => 'required|string',
                'section_name' => 'sometimes|string',
                'image_id' => 'sometimes|integer'
            ]);

            $filename = $validated['filename'];
            $filePath = public_path('Assets' . DIRECTORY_SEPARATOR . $filename);
            
            // Delete physical file
            if (file_exists($filePath)) {
                if (!unlink($filePath)) {
                    throw new \Exception('Failed to delete file: ' . $filename);
                }
            }
            
            $response = [
                'success' => true,
                'message' => 'Image deleted successfully'
            ];

            // Optionally remove from database
            if ($request->has('section_name') && $request->has('image_id')) {
                $homepage = Homepage::where('section_name', $request->section_name)->first();
                
                if ($homepage) {
                    $currentData = $homepage->data ?? [];
                    
                    // Remove the image with matching ID
                    $updatedData = array_filter($currentData, function($item) use ($request) {
                        return isset($item['id']) && $item['id'] != $request->image_id;
                    });
                    
                    // Reindex array
                    $updatedData = array_values($updatedData);
                    
                    $homepage->update(['data' => $updatedData]);
                    
                    $response['database_updated'] = true;
                }
            }

            return response()->json($response, 200);
            
        } catch (ValidationException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $e->errors()
            ], 422);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to delete image',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id): JsonResponse
    {
        try {
            $homepage = Homepage::find($id);

            if (!$homepage) {
                return response()->json([
                    'success' => false,
                    'message' => 'Homepage section not found'
                ], 404);
            }

            $homepage->delete();

            return response()->json([
                'success' => true,
                'message' => 'Homepage section deleted successfully'
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to delete homepage section',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
