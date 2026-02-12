# Git Workflow

## Branching strategy

We use feature branches for development.

Branch naming:
- feature/<name>
- fix/<name>
- docs/<name>

Examples:
- feature/logging
- feature/ui-fixes
- fix/validation-error

## Development process

1. Create a new branch from main:
   git checkout -b feature/feature-name

2. Make changes and commit:
   git add .
   git commit -m "Add logging functionality"

3. Push branch:
   git push origin feature/feature-name

4. Open Pull Request in GitHub.

5. After review, merge into main.

## Commit messages

Commit messages should be clear and descriptive.

Examples:
- Add user validation tests
- Fix duplicate email handling
- Update deployment instructions

If related to an Issue:
- Fixes #3


This workflow helps maintain clean project history.
