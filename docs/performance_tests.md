# Performance testing results

## Tool
Postman Collection Runner

## Tested endpoints
- GET /users
- POST /users

## Test configuration
- Iterations: 50
- Delay: 0 ms
- Environment: local

## Results
- Average response time: ~35 ms
- Error rate: 0% for valid requests
- Server handled multiple sequential requests without crashes

## Notes
POST /users returned expected validation and duplicate errors (HTTP 400).  
Testing was performed in local development environment.
