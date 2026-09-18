# WP Gutenberg Learning - Dummy Project
Purpose: Learn Gutenberg block development + GitHub Actions (GHA)

## What is inside?
- `docker-compose.yml` - One-command WP + MySQL
- `plugins/my-gutenberg-blocks` - Custom plugin with 2 example blocks (Hero + Stats) built with block.json (modern way)
- `.github/workflows/ci.yml` - GHA: lint, build, php checks
- `.github/workflows/e2e.yml` - GHA: Playwright e2e for Gutenberg

## Quick Start
1. docker-compose up -d
2. Go to http://localhost:8080 - Install WP
3. Activate plugin "My Gutenberg Blocks"
4. Edit a page/post -> Add blocks: Hero Block / Stats Block

## Learning Path
- Day 1: Read block.json files
- Day 2: Edit src/edit.js and src/save.js
- Day 3: Check GHA workflows in .github
- Day 4: Push to GitHub and watch Actions tab

Created for Vikas Raghuwanshi
