/**
 * VTS Configuration
 * This file loads environment variables and provides configuration for test files
 */

// Load environment variables from .env file (for Node.js environments)
if (typeof process !== 'undefined' && process.env) {
    window.VTS_CONFIG = {
        API_BASE_URL: process.env.API_BASE_URL || 'http://localhost:8000/api',
        API_KEY: process.env.VTS_API_KEY || 'vts_cms_api_key_2025_secure_token'
    };
} else {
    // Fallback configuration for browser environments
    window.VTS_CONFIG = {
        API_BASE_URL: 'http://localhost:8000/api',
        API_KEY: 'vts_cms_api_key_2025_secure_token'
    };
}

console.log('VTS Configuration loaded:', window.VTS_CONFIG);
