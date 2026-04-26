# API Endpoints

## POST /api/contact

Contact form submission handler (Cloudflare Pages Function).

**File:** `functions/api/contact.ts`

### Request Body
```json
{
  "name": "string (required)",
  "email": "string (required, valid email)",
  "message": "string (required)"
}
```

### Behavior
1. Validates all required fields
2. Saves submission to D1 database (`contacts` table) with timestamp
3. Sends notification email to `zach@captivepath.com` via Postmark API (from `contact@captivepath.com`)
4. Returns success/error JSON response

### Response
```json
{ "success": true }
```

### Error Response
```json
{ "error": "Error message" }
```

### Environment Dependencies
- `DB` — D1 database binding (`captive-path-contacts`)
- `POSTMARK_API_TOKEN` — Postmark API token for email delivery
