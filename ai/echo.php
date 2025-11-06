<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: *');

// Handle OPTIONS preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Collect all request information
$response = [
    'timestamp' => date('c'),
    'method' => $_SERVER['REQUEST_METHOD'],
    'protocol' => $_SERVER['SERVER_PROTOCOL'],
    'path' => $_SERVER['REQUEST_URI'],
    'query_string' => $_SERVER['QUERY_STRING'] ?? '',
    'remote_addr' => $_SERVER['REMOTE_ADDR'] ?? 'unknown',
    'remote_port' => $_SERVER['REMOTE_PORT'] ?? 'unknown',
    'server_name' => $_SERVER['SERVER_NAME'] ?? 'unknown',
    'server_port' => $_SERVER['SERVER_PORT'] ?? 'unknown',
    'https' => isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off',
    'headers' => []
];

// Collect all HTTP headers
foreach ($_SERVER as $key => $value) {
    if (substr($key, 0, 5) === 'HTTP_') {
        $header_name = str_replace('_', '-', substr($key, 5));
        $response['headers'][$header_name] = $value;
    }
}

// Add special headers that don't have HTTP_ prefix
$special_headers = [
    'CONTENT_TYPE',
    'CONTENT_LENGTH',
    'HOST'
];

foreach ($special_headers as $header) {
    if (isset($_SERVER[$header])) {
        $header_name = str_replace('_', '-', $header);
        $response['headers'][$header_name] = $_SERVER[$header];
    }
}

// Add request body if present
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $response['body'] = file_get_contents('php://input');
}

// Output JSON
echo json_encode($response, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
