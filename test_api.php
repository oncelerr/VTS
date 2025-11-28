<?php

/**
 * Simple API Test Script
 * Run this script to test the Homepage API endpoints
 * 
 * Usage: php test_api.php
 */

$baseUrl = 'http://localhost:8000/api';

function makeRequest($url, $method = 'GET', $data = null, $headers = []) {
    $ch = curl_init();
    
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $method);
    
    if ($data) {
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
        $headers[] = 'Content-Type: application/json';
    }
    
    if (!empty($headers)) {
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    }
    
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    return [
        'status' => $httpCode,
        'body' => json_decode($response, true)
    ];
}

echo "=== VTS Homepage API Test ===\n\n";

// Test 1: Login
echo "1. Testing Login...\n";
$loginResponse = makeRequest("$baseUrl/auth/login", 'POST', [
    'email' => 'test@example.com',
    'password' => 'password'
]);

if ($loginResponse['status'] === 200 && $loginResponse['body']['success']) {
    $token = $loginResponse['body']['data']['token'];
    echo "✓ Login successful! Token received.\n\n";
} else {
    echo "✗ Login failed!\n";
    echo "Response: " . json_encode($loginResponse['body'], JSON_PRETTY_PRINT) . "\n\n";
    exit(1);
}

// Test 2: Get all homepage data
echo "2. Testing Get All Homepage Data...\n";
$homepageResponse = makeRequest("$baseUrl/homepage", 'GET', null, [
    "Authorization: Bearer $token"
]);

if ($homepageResponse['status'] === 200 && $homepageResponse['body']['success']) {
    $sectionsCount = count($homepageResponse['body']['data']);
    echo "✓ Retrieved $sectionsCount homepage sections successfully!\n\n";
} else {
    echo "✗ Failed to get homepage data!\n";
    echo "Response: " . json_encode($homepageResponse['body'], JSON_PRETTY_PRINT) . "\n\n";
}

// Test 3: Get specific section (hero)
echo "3. Testing Get Hero Section...\n";
$heroResponse = makeRequest("$baseUrl/homepage/section/hero", 'GET', null, [
    "Authorization: Bearer $token"
]);

if ($heroResponse['status'] === 200 && $heroResponse['body']['success']) {
    $heroData = $heroResponse['body']['data'];
    echo "✓ Hero section retrieved successfully!\n";
    echo "Hero title: " . $heroData['data']['name'] . "\n\n";
} else {
    echo "✗ Failed to get hero section!\n";
    echo "Response: " . json_encode($heroResponse['body'], JSON_PRETTY_PRINT) . "\n\n";
}

// Test 4: Create new section
echo "4. Testing Create New Section...\n";
$createResponse = makeRequest("$baseUrl/homepage", 'POST', [
    'section_name' => 'test_section_' . time(),
    'data' => [
        'title' => 'Test Section',
        'content' => 'This is a test section created by the API test script.'
    ],
    'is_active' => true
], [
    "Authorization: Bearer $token"
]);

if ($createResponse['status'] === 201 && $createResponse['body']['success']) {
    $newSectionId = $createResponse['body']['data']['id'];
    echo "✓ New section created successfully! ID: $newSectionId\n\n";
    
    // Test 5: Update the created section
    echo "5. Testing Update Section...\n";
    $updateResponse = makeRequest("$baseUrl/homepage/$newSectionId", 'PUT', [
        'data' => [
            'title' => 'Updated Test Section',
            'content' => 'This section has been updated via API.'
        ]
    ], [
        "Authorization: Bearer $token"
    ]);
    
    if ($updateResponse['status'] === 200 && $updateResponse['body']['success']) {
        echo "✓ Section updated successfully!\n\n";
    } else {
        echo "✗ Failed to update section!\n";
        echo "Response: " . json_encode($updateResponse['body'], JSON_PRETTY_PRINT) . "\n\n";
    }
    
    // Test 6: Delete the created section
    echo "6. Testing Delete Section...\n";
    $deleteResponse = makeRequest("$baseUrl/homepage/$newSectionId", 'DELETE', null, [
        "Authorization: Bearer $token"
    ]);
    
    if ($deleteResponse['status'] === 200 && $deleteResponse['body']['success']) {
        echo "✓ Section deleted successfully!\n\n";
    } else {
        echo "✗ Failed to delete section!\n";
        echo "Response: " . json_encode($deleteResponse['body'], JSON_PRETTY_PRINT) . "\n\n";
    }
} else {
    echo "✗ Failed to create new section!\n";
    echo "Response: " . json_encode($createResponse['body'], JSON_PRETTY_PRINT) . "\n\n";
}

// Test 7: Logout
echo "7. Testing Logout...\n";
$logoutResponse = makeRequest("$baseUrl/auth/logout", 'POST', null, [
    "Authorization: Bearer $token"
]);

if ($logoutResponse['status'] === 200 && $logoutResponse['body']['success']) {
    echo "✓ Logout successful!\n\n";
} else {
    echo "✗ Logout failed!\n";
    echo "Response: " . json_encode($logoutResponse['body'], JSON_PRETTY_PRINT) . "\n\n";
}

echo "=== API Test Complete ===\n";
echo "All tests completed! Check the results above.\n";
echo "If you see any ✗ marks, there might be issues with the API setup.\n\n";

echo "Next steps:\n";
echo "1. Start your Laravel server: php artisan serve\n";
echo "2. Test the API endpoints from your CMS application\n";
echo "3. Update the base URL in your CMS to match your Laravel server\n";
