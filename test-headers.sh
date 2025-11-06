#!/bin/bash
# Test all possible header combinations

URL="https://jan-erik-andersen.de/ai/health.json"

echo "=== Testing various User-Agent + Accept combinations ==="
echo ""

# Test 1: No special headers (curl default)
echo "Test 1: Default curl"
curl -s -o /dev/null -w "Status: %{http_code}\n" "$URL"
echo ""

# Test 2: Empty User-Agent
echo "Test 2: Empty User-Agent"
curl -s -o /dev/null -w "Status: %{http_code}\n" -H "User-Agent:" "$URL"
echo ""

# Test 3: Python requests default
echo "Test 3: Python requests"
curl -s -o /dev/null -w "Status: %{http_code}\n" -H "User-Agent: python-requests/2.31.0" "$URL"
echo ""

# Test 4: No User-Agent header at all (if possible)
echo "Test 4: No User-Agent (attempt)"
curl -s -o /dev/null -w "Status: %{http_code}\n" -A "" "$URL"
echo ""

# Test 5: Accept: text/html only (no */* fallback)
echo "Test 5: Accept: text/html only"
curl -s -o /dev/null -w "Status: %{http_code}\n" -H "Accept: text/html" "$URL"
echo ""

# Test 6: Accept: application/xml (wrong type)
echo "Test 6: Accept: application/xml"
curl -s -o /dev/null -w "Status: %{http_code}\n" -H "Accept: application/xml" "$URL"
echo ""

# Test 7: Multiple weird headers
echo "Test 7: Minimal headers (like some bots)"
curl -s -o /dev/null -w "Status: %{http_code}\n" \
  -H "User-Agent: Bot/1.0" \
  -H "Accept: */*" \
  -H "Accept-Encoding: identity" \
  "$URL"
echo ""

# Test 8: HTTP/1.0 (old protocol)
echo "Test 8: HTTP/1.0"
curl -s -o /dev/null -w "Status: %{http_code}\n" --http1.0 "$URL"
echo ""

# Test 9: Wrong Host header
echo "Test 9: Wrong Host header"
curl -s -o /dev/null -w "Status: %{http_code}\n" -H "Host: example.com" "$URL"
echo ""

# Test 10: IPv6 (if server supports)
echo "Test 10: Force IPv6"
curl -s -o /dev/null -w "Status: %{http_code}\n" -6 "$URL" 2>/dev/null || echo "IPv6 not available"
echo ""

echo "=== Done ==="
