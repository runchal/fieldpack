# Content Management Guidelines

## Overview
This directory contains the single source of truth for all Fieldpack content.

## Structure
- `content_bible.md` - Primary content strategy document (SINGLE SOURCE OF TRUTH)
- `CHANGELOG.md` - Tracks all changes to content documents
- `archive/` - Contains historical versions and forks of content documents
- Additional subdocuments and sections as needed

## Rules for Content Management

### 1. Modifying content_bible.md
- **You MAY modify this document** as it is a living document
- **EVERY modification MUST be logged** in CHANGELOG.md with:
  - Date and time of change
  - Text that was deleted (copy and paste the exact text)
  - Reason for the change
  - Clear description that a human can understand

### 2. Creating Forks
- **You MAY create forks** of content_bible.md as additional MD files
- **All forks MUST be placed** in the `archive/` folder
- **Log fork creation** in CHANGELOG.md (no need to copy all content, just note the fork creation)
- **Name forks clearly**: `content_bible_v2_YYYY-MM-DD.md` or similar

### 3. Creating Subdocuments
- **You MAY create** subdocuments, sections, and folders as needed
- **Examples**:
  - `sections/homepage-content.md`
  - `campaigns/launch-messaging.md`
  - `templates/email-templates.md`
- **All new documents MUST be referenced** in CHANGELOG.md

## Best Practices
1. Always read content_bible.md before making website content changes
2. Check CHANGELOG.md to understand recent modifications
3. When uncertain, create a fork in archive/ rather than modifying the original
4. Keep changes atomic and well-documented
5. Preserve the intent and tone established in content_bible.md

## For Claude Sessions
- **ALWAYS** check this directory first when working on content
- **ALWAYS** log changes to CHANGELOG.md
- **NEVER** delete content_bible.md or CHANGELOG.md
- **PREFER** creating subdocuments over heavily modifying the bible