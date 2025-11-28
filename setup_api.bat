@echo off
echo ====================================
echo VTS Homepage API Setup Script
echo ====================================
echo.

echo 1. Installing/Updating Composer dependencies...
composer install
echo.

echo 2. Running database migrations and seeders...
php artisan migrate:fresh --seed
echo.

echo 3. Clearing application cache...
php artisan config:clear
php artisan cache:clear
php artisan route:clear
echo.

echo 4. Generating application key (if needed)...
php artisan key:generate
echo.

echo 5. Starting Laravel development server...
echo.
echo The API will be available at: http://localhost:8000/api
echo.
echo Available endpoints:
echo - POST /api/auth/login
echo - POST /api/auth/register  
echo - GET  /api/homepage
echo - GET  /api/homepage/section/{name}
echo.
echo Default test user credentials:
echo Email: test@example.com
echo Password: password
echo.
echo Press Ctrl+C to stop the server
echo.

php artisan serve
