# VTS Homepage API Documentation

## Overview
This API provides secure access to homepage content data for the VTS (Vertical Talent Solutions) CMS system. All endpoints except authentication require a valid Bearer token.

## Base URL
```
http://localhost:8000/api
```

## Authentication

### 1. Register User
**POST** `/auth/register`

**Request Body:**
```json
{
    "name": "Admin User",
    "email": "admin@vts.com",
    "password": "password123",
    "password_confirmation": "password123"
}
```

**Response:**
```json
{
    "success": true,
    "data": {
        "user": {
            "id": 1,
            "name": "Admin User",
            "email": "admin@vts.com",
            "created_at": "2025-11-25T08:44:55.000000Z",
            "updated_at": "2025-11-25T08:44:55.000000Z"
        },
        "token": "1|abc123def456..."
    },
    "message": "User registered successfully"
}
```

### 2. Login
**POST** `/auth/login`

**Request Body:**
```json
{
    "email": "admin@vts.com",
    "password": "password123"
}
```

**Response:**
```json
{
    "success": true,
    "data": {
        "user": {
            "id": 1,
            "name": "Admin User",
            "email": "admin@vts.com"
        },
        "token": "1|abc123def456..."
    },
    "message": "Login successful"
}
```

### 3. Get User Details
**GET** `/auth/user`

**Headers:**
```
Authorization: Bearer {token}
```

**Response:**
```json
{
    "success": true,
    "data": {
        "id": 1,
        "name": "Admin User",
        "email": "admin@vts.com"
    },
    "message": "User details retrieved successfully"
}
```

### 4. Logout
**POST** `/auth/logout`

**Headers:**
```
Authorization: Bearer {token}
```

**Response:**
```json
{
    "success": true,
    "message": "Logout successful"
}
```

## Homepage Data Endpoints

All homepage endpoints require authentication with Bearer token.

### 1. Get All Homepage Sections
**GET** `/homepage`

**Headers:**
```
Authorization: Bearer {token}
```

**Response:**
```json
{
    "success": true,
    "data": [
        {
            "id": 1,
            "section_name": "hero",
            "data": {
                "name": "Where Human Intelligence",
                "span": "Powers Digital Performance",
                "p": "From recruitment to operational excellence...",
                "solidBtn": "Start Building Your Team",
                "hollowBtn": "Learn How We Work",
                "img1": "../Assets/ppl.jpg"
            },
            "is_active": true,
            "created_at": "2025-11-25T08:44:55.000000Z",
            "updated_at": "2025-11-25T08:44:55.000000Z"
        }
    ],
    "message": "Homepage data retrieved successfully"
}
```

### 2. Get Specific Homepage Section
**GET** `/homepage/{id}`

**Headers:**
```
Authorization: Bearer {token}
```

**Response:**
```json
{
    "success": true,
    "data": {
        "id": 1,
        "section_name": "hero",
        "data": {
            "name": "Where Human Intelligence",
            "span": "Powers Digital Performance"
        },
        "is_active": true
    },
    "message": "Homepage section retrieved successfully"
}
```

### 3. Get Section by Name
**GET** `/homepage/section/{sectionName}`

**Example:** `/homepage/section/hero`

**Headers:**
```
Authorization: Bearer {token}
```

**Response:**
```json
{
    "success": true,
    "data": {
        "id": 1,
        "section_name": "hero",
        "data": {
            "name": "Where Human Intelligence",
            "span": "Powers Digital Performance"
        },
        "is_active": true
    },
    "message": "Homepage section retrieved successfully"
}
```

### 4. Create New Homepage Section
**POST** `/homepage`

**Headers:**
```
Authorization: Bearer {token}
Content-Type: application/json
```

**Request Body:**
```json
{
    "section_name": "new_section",
    "data": {
        "title": "New Section Title",
        "content": "Section content here"
    },
    "is_active": true
}
```

**Response:**
```json
{
    "success": true,
    "data": {
        "id": 10,
        "section_name": "new_section",
        "data": {
            "title": "New Section Title",
            "content": "Section content here"
        },
        "is_active": true,
        "created_at": "2025-11-25T08:44:55.000000Z",
        "updated_at": "2025-11-25T08:44:55.000000Z"
    },
    "message": "Homepage section created successfully"
}
```

### 5. Update Homepage Section
**PUT** `/homepage/{id}`

**Headers:**
```
Authorization: Bearer {token}
Content-Type: application/json
```

**Request Body:**
```json
{
    "data": {
        "title": "Updated Title",
        "content": "Updated content"
    },
    "is_active": false
}
```

**Response:**
```json
{
    "success": true,
    "data": {
        "id": 1,
        "section_name": "hero",
        "data": {
            "title": "Updated Title",
            "content": "Updated content"
        },
        "is_active": false,
        "updated_at": "2025-11-25T08:44:55.000000Z"
    },
    "message": "Homepage section updated successfully"
}
```

### 6. Delete Homepage Section
**DELETE** `/homepage/{id}`

**Headers:**
```
Authorization: Bearer {token}
```

**Response:**
```json
{
    "success": true,
    "message": "Homepage section deleted successfully"
}
```

## Available Homepage Sections

The following sections are pre-seeded in the database:

1. **hero** - Main hero section with title, description, and buttons
2. **marquee_images** - Brand logos carousel
3. **achievements** - Statistics and achievements
4. **about** - Company information
5. **about_psp** - Philosophy, Problem, Solution, Promise
6. **cards** - Feature cards
7. **collage_images** - Image gallery
8. **top_talent** - Talent showcase section
9. **vts_results** - Results and performance data

## Error Responses

### Authentication Error (401)
```json
{
    "success": false,
    "message": "Unauthenticated."
}
```

### Validation Error (422)
```json
{
    "success": false,
    "message": "Validation failed",
    "errors": {
        "section_name": ["The section name field is required."]
    }
}
```

### Not Found Error (404)
```json
{
    "success": false,
    "message": "Homepage section not found"
}
```

### Server Error (500)
```json
{
    "success": false,
    "message": "Internal server error",
    "error": "Error details here"
}
```

## Usage Examples

### JavaScript/Fetch Example
```javascript
// Login and get token
const loginResponse = await fetch('http://localhost:8000/api/auth/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        email: 'admin@vts.com',
        password: 'password123'
    })
});

const loginData = await loginResponse.json();
const token = loginData.data.token;

// Get all homepage data
const homepageResponse = await fetch('http://localhost:8000/api/homepage', {
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    }
});

const homepageData = await homepageResponse.json();
console.log(homepageData);

// Get specific section
const heroResponse = await fetch('http://localhost:8000/api/homepage/section/hero', {
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    }
});

const heroData = await heroResponse.json();
console.log(heroData);
```

### cURL Examples
```bash
# Login
curl -X POST http://localhost:8000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "admin@vts.com", "password": "password123"}'

# Get homepage data (replace TOKEN with actual token)
curl -X GET http://localhost:8000/api/homepage \
  -H "Authorization: Bearer TOKEN" \
  -H "Content-Type: application/json"

# Get specific section
curl -X GET http://localhost:8000/api/homepage/section/hero \
  -H "Authorization: Bearer TOKEN" \
  -H "Content-Type: application/json"

# Update section
curl -X PUT http://localhost:8000/api/homepage/1 \
  -H "Authorization: Bearer TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"data": {"title": "Updated Title"}, "is_active": true}'
```

## Security Notes

1. **Always use HTTPS in production**
2. **Store tokens securely** (not in localStorage for sensitive applications)
3. **Implement token refresh** for long-running applications
4. **Validate all input data** on both client and server side
5. **Use environment variables** for sensitive configuration
6. **Implement rate limiting** to prevent abuse
7. **Log all API access** for security monitoring

## Rate Limiting

The API implements rate limiting to prevent abuse:
- **Login attempts**: 5 per minute per IP
- **General API calls**: 60 per minute per authenticated user

## CORS Configuration

Make sure to configure CORS properly in your Laravel application to allow requests from your CMS domain.

## Environment Setup

Add these to your `.env` file:
```env
SANCTUM_STATEFUL_DOMAINS=localhost,127.0.0.1,your-cms-domain.com
SESSION_DOMAIN=localhost
```
