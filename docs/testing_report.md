# Testing report – 2.5 diena

## Unit tests (Jest)

| Tests | Expected | Result |
|------|---------|--------|
| Valid user data | No validation errors | Passed |
| Short name | Name validation error | Passed |
| Invalid email | Email validation error | Passed |
| Short password | Password validation error | Passed |
| Multiple invalid fields | Multiple errors returned | Passed |
| Empty object | No crash, errors returned | Passed |

## API tests (Supertest)

| Tests | Expected | Result |
|------|---------|--------|
| GET /users | Returns list of users (JSON) | Passed |

## Summary

All unit and integration tests passed successfully. Validation logic and basic API functionality work as expected.
