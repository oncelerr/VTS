@echo off
echo Testing VTS API endpoints...
echo.

echo 1. Testing health endpoint (no auth):
curl -s http://localhost:8000/api/health
echo.
echo.

echo 2. Testing homepage section with API key:
curl -s -H "X-API-Key: vts_cms_api_key_2025_secure_token" http://localhost:8000/api/homepage/section/hero
echo.
echo.

echo 3. Testing all homepage data:
curl -s -H "X-API-Key: vts_cms_api_key_2025_secure_token" http://localhost:8000/api/homepage
echo.

pause
