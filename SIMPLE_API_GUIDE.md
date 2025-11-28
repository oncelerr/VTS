# VTS Homepage API - Simple Setup Guide

## ✅ **What Changed**

We've simplified the API authentication to use a simple API key instead of user login/tokens. This is perfect for CMS access where you don't need user management.

## 🔧 **Setup**

### 1. Environment Configuration
Your `.env` file now contains:
```env
VTS_API_KEY=vts_cms_api_key_2025_secure_token
```

### 2. API Authentication
- **No login required** - Just use the API key
- **Simple header authentication** - Send `X-API-Key` header
- **No token management** - No expiration, no refresh needed

## 🚀 **How to Use**

### 1. Start the Laravel Server
```bash
cd e:\VTS
php artisan serve
```

### 2. Test the API
```bash
# Health check (no auth required)
curl http://localhost:8000/api/health

# Get homepage data (requires API key)
curl -H "X-API-Key: vts_cms_api_key_2025_secure_token" \
     http://localhost:8000/api/homepage/section/hero
```

### 3. React Integration
Your React app automatically uses the API key:
```javascript
// Already configured in Home.jsx
const API_KEY = 'vts_cms_api_key_2025_secure_token';

// All API calls include the key
headers: {
  'X-API-Key': API_KEY,
  'Content-Type': 'application/json',
}
```

## 📡 **Available Endpoints**

### Public Endpoints
```
GET /api/health - API status check
```

### Protected Endpoints (require X-API-Key header)
```
GET    /api/homepage                    - Get all sections
GET    /api/homepage/{id}              - Get specific section by ID  
GET    /api/homepage/section/{name}    - Get section by name
POST   /api/homepage                   - Create new section
PUT    /api/homepage/{id}              - Update section
DELETE /api/homepage/{id}              - Delete section
```

## 🔒 **Security**

### For Development
- API key is in `.env` file
- Simple and straightforward

### For Production
- Change the API key in `.env` to something more secure
- Consider using environment-specific keys
- Add rate limiting if needed

## 📝 **Current Status**

### ✅ Working Now
- **No authentication hassle** - Just API key
- **Automatic fallback** - If API fails, shows hardcoded data
- **Simple integration** - No login/logout logic needed
- **Health check** - Easy to test if API is running

### 🎯 **Usage Example**

```javascript
// From your CMS or any application
const response = await fetch('http://localhost:8000/api/homepage/section/hero', {
  headers: {
    'X-API-Key': 'vts_cms_api_key_2025_secure_token',
    'Content-Type': 'application/json'
  }
});

const data = await response.json();
console.log(data); // Your hero section data
```

## 🔄 **Data Sections Available**

- `hero` - Main hero section
- `marquee_images` - Brand logos
- `achievements` - Statistics
- `about` - Company information
- `about_psp` - Philosophy/Problem/Solution/Promise
- `cards` - Feature cards
- `collage_images` - Image gallery
- `top_talent` - Talent showcase
- `vts_results` - Performance data

## ⚡ **Quick Test**

1. **Start Laravel**: `php artisan serve`
2. **Open browser**: Go to `http://localhost:8000/api/health`
3. **Should see**: `{"success":true,"message":"VTS API is running","timestamp":"..."}`
4. **Test with key**: 
   ```bash
   curl -H "X-API-Key: vts_cms_api_key_2025_secure_token" \
        http://localhost:8000/api/homepage/section/hero
   ```

That's it! Much simpler than the previous authentication system. Perfect for CMS integration.
