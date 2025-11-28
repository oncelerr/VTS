# VTS Image Upload API Documentation

## Overview
The VTS Image Upload API allows you to upload images to the `public/Assets` folder and optionally save the file paths to the database for CMS management.

## Endpoints

### 1. Upload Image
**POST** `/api/homepage/upload-image`

**Headers:**
```
X-API-Key: vts_cms_api_key_2025_secure_token
Content-Type: multipart/form-data
```

**Parameters:**
- `image` (required): Image file (jpeg, png, jpg, gif, svg, webp, max 10MB)
- `section_name` (optional): Database section name (e.g., "collage_images", "marquee_images")
- `image_type` (optional): Type of image (e.g., "collage", "hero", "marquee")
- `save_to_db` (optional): Boolean, whether to save to database

**Response:**
```json
{
  "success": true,
  "data": {
    "filename": "1732531200_abc123def4.jpg",
    "path": "/Assets/1732531200_abc123def4.jpg",
    "full_url": "http://localhost:8000/Assets/1732531200_abc123def4.jpg",
    "size": 245760,
    "mime_type": "image/jpeg",
    "database_entry": {
      "id": 1,
      "img": "/Assets/1732531200_abc123def4.jpg",
      "type": "collage",
      "uploaded_at": "2025-11-25T10:00:00.000Z"
    },
    "section_updated": "collage_images"
  },
  "message": "Image uploaded successfully"
}
```

### 2. Delete Image
**DELETE** `/api/homepage/delete-image`

**Headers:**
```
X-API-Key: vts_cms_api_key_2025_secure_token
Content-Type: application/json
```

**Parameters:**
```json
{
  "filename": "1732531200_abc123def4.jpg",
  "section_name": "collage_images",
  "image_id": 1
}
```

**Response:**
```json
{
  "success": true,
  "message": "Image deleted successfully",
  "database_updated": true
}
```

## Usage Examples

### 1. Upload Image Only (No Database)
```javascript
const formData = new FormData();
formData.append('image', imageFile);

fetch('http://localhost:8000/api/homepage/upload-image', {
  method: 'POST',
  headers: {
    'X-API-Key': 'vts_cms_api_key_2025_secure_token'
  },
  body: formData
});
```

### 2. Upload Image and Save to Database
```javascript
const formData = new FormData();
formData.append('image', imageFile);
formData.append('section_name', 'collage_images');
formData.append('image_type', 'collage');
formData.append('save_to_db', '1');

fetch('http://localhost:8000/api/homepage/upload-image', {
  method: 'POST',
  headers: {
    'X-API-Key': 'vts_cms_api_key_2025_secure_token'
  },
  body: formData
});
```

### 3. React Component Example
```jsx
const ImageUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  
  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', selectedFile);
    formData.append('section_name', 'collage_images');
    formData.append('save_to_db', '1');
    
    try {
      const response = await fetch('http://localhost:8000/api/homepage/upload-image', {
        method: 'POST',
        headers: {
          'X-API-Key': 'vts_cms_api_key_2025_secure_token'
        },
        body: formData
      });
      
      const result = await response.json();
      
      if (result.success) {
        console.log('Upload successful:', result.data);
        // Update your state with the new image path
      }
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };
  
  return (
    <div>
      <input 
        type="file" 
        accept="image/*"
        onChange={(e) => setSelectedFile(e.target.files[0])} 
      />
      <button onClick={handleUpload}>Upload Image</button>
    </div>
  );
};
```

## Database Structure

When `save_to_db` is true, images are saved in this format:

```json
{
  "id": 1,
  "img": "/Assets/filename.jpg",
  "type": "collage",
  "uploaded_at": "2025-11-25T10:00:00.000Z"
}
```

This matches the format used in your React components:
```javascript
// const CollageImgs = [
//   { id: 1, img: "../Assets/ppl.jpg" },
//   { id: 2, img: "../Assets/ppl.jpg" },
//   { id: 3, img: "../Assets/ppl.jpg" },
//   { id: 4, img: "../Assets/ppl.jpg" },
// ]
```

## File Storage
- Images are stored in: `public/Assets/`
- Filename format: `{timestamp}_{random_string}.{extension}`
- Maximum file size: 10MB
- Supported formats: jpeg, png, jpg, gif, svg, webp

## Testing
Use the provided test file: `test_image_upload.html`
1. Open the file in your browser
2. Select an image
3. Choose section name and options
4. Upload and see the results

## Integration with CMS
You can now build a CMS interface that:
1. Uploads images using this API
2. Displays current images from database sections
3. Allows deletion of images
4. Updates the homepage sections with new image paths

The uploaded images will be automatically available to your React components through the existing API endpoints.
