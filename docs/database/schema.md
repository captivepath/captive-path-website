# Database Schema

## Platform
Cloudflare D1 (serverless SQLite)

**Database name:** `captive-path-contacts`
**Database ID:** `f5ef1e14-c15d-426f-898c-d754abdee980`

## Tables

### contacts
Stores all contact form submissions.

| Column | Type | Description |
|---|---|---|
| `id` | INTEGER | Primary key, auto-increment |
| `name` | TEXT | Submitter's full name |
| `email` | TEXT | Submitter's email address |
| `message` | TEXT | Message body |
| `created_at` | TEXT | ISO 8601 timestamp of submission (default: current time) |
| `ip_address` | TEXT | Submitter's IP address (from CF-Connecting-IP header) |
| `user_agent` | TEXT | Submitter's browser User-Agent string |

### Migration
See `migrations/0001_create_contacts.sql`
