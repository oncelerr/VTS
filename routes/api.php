<?php

use App\Http\Controllers\Api\HomepageController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Protected routes (require API key)
Route::middleware('api.key')->group(function () {
    // Homepage API routes
    Route::apiResource('homepage', HomepageController::class);
    
    // Additional homepage routes
    Route::get('/homepage/section/{sectionName}', [HomepageController::class, 'getBySection']);
    
    // Image management routes
    Route::post('/homepage/upload-image', [HomepageController::class, 'uploadImage']);
    Route::delete('/homepage/delete-image', [HomepageController::class, 'deleteImage']);
});

// Health check route (no auth required)
Route::get('/health', function () {
    return response()->json([
        'success' => true,
        'message' => 'VTS API is running',
        'timestamp' => now()
    ]);
});

// Test upload directory
Route::get('/test-upload', function () {
    $assetsPath = public_path('Assets');
    $testFile = $assetsPath . DIRECTORY_SEPARATOR . 'test.txt';
    
    return response()->json([
        'success' => true,
        'assets_path' => $assetsPath,
        'directory_exists' => file_exists($assetsPath),
        'is_writable' => is_writable($assetsPath),
        'test_file_exists' => file_exists($testFile),
        'permissions' => file_exists($assetsPath) ? substr(sprintf('%o', fileperms($assetsPath)), -4) : 'N/A',
        'php_version' => PHP_VERSION,
        'upload_max_filesize' => ini_get('upload_max_filesize'),
        'post_max_size' => ini_get('post_max_size')
    ]);
});

// Fallback route for undefined API endpoints
Route::fallback(function () {
    return response()->json([
        'success' => false,
        'message' => 'API endpoint not found'
    ], 404);
});
