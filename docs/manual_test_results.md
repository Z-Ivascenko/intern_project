# Manual Test Results (API)

## Environment
- Project type: Backend API (Node.js, Express)
- UI: Not implemented (API-only project)
- Testing tools: Browser, Postman

## Tested Endpoints

### GET /health
- Browser: Chrome, Firefox, Edge
- Result: 200 OK
- Response: { "status": "ok" }

### GET /users
- Valid request
- Result: 200 OK
- Response: array of users

### POST /users (valid data)
- Result: 201 Created
- User created successfully

### POST /users (invalid data)
- Empty body → 400 VALIDATION
- Invalid email → 400 INVALID_EMAIL
- Duplicate email → 400 DUPLICATE

## Notes
- UI forms and CSS were not tested because the project is API-only.
- All tested API endpoints behave consistently across browsers.