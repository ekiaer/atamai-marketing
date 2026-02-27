# Atamai Marketing Site

Marketing landing page and waitlist for Atamai - Farm Compliance Made Simple.

## Quick Start (Local Development)

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deploy to Netlify

### Option 1: Deploy via GitHub (Recommended)

1. Push this project to a GitHub repository
2. Log in to [Netlify](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub account and select the repository
5. Netlify will auto-detect Next.js settings
6. Click "Deploy site"

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Build the site
npm run build

# Deploy
netlify deploy --prod --dir=out
```

### Option 3: Drag and Drop

1. Run `npm run build` locally
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag the `out` folder to deploy

## Connect Custom Domain

After deploying:

1. In Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Enter: `atamaiag.ai`
4. Netlify will provide DNS settings
5. Update your domain registrar's DNS to point to Netlify

### DNS Settings (Example)

| Type  | Name | Value                    |
|-------|------|--------------------------|
| A     | @    | 75.2.60.5               |
| CNAME | www  | your-site.netlify.app   |

Or use Netlify DNS for automatic SSL.

## Adding Updates/Blog Posts

To add a new update:

1. Create a new `.md` file in `content/updates/`
2. Name it with a URL-friendly slug: `my-update-title.md`
3. Add frontmatter at the top:

```markdown
---
title: "Your Update Title"
date: "2024-12-20"
excerpt: "A brief description that appears in the listing."
---

# Your Update Title

Your content here in Markdown format...
```

4. Commit and push - Netlify will rebuild automatically

### Example Update

```markdown
---
title: "Pilot Program Launches"
date: "2025-01-15"
excerpt: "We're excited to announce our pilot program with 10 New Zealand farms."
---

# Pilot Program Launches

Today we're thrilled to announce...

## What This Means

- Point one
- Point two

[Join the waitlist](/#waitlist) to be next!
```

## Form Submissions

The waitlist form uses [Netlify Forms](https://docs.netlify.com/forms/setup/).

- Submissions appear in: Netlify Dashboard → Forms → waitlist
- You can export submissions as CSV
- Set up email notifications in Form settings

## Project Structure

```
atamai-marketing/
├── src/
│   └── app/
│       ├── layout.tsx      # Root layout with metadata
│       ├── page.tsx        # Main landing page
│       ├── globals.css     # Global styles
│       └── thank-you/
│           └── page.tsx    # Post-submission thank you page
├── public/
│   ├── atamai-light.png    # Logo for dark backgrounds
│   ├── atamai-dark.png     # Logo for light backgrounds
│   └── nz-farm-hero.jpg    # Hero background image
├── netlify.toml            # Netlify configuration
├── next.config.js          # Next.js config (static export)
├── tailwind.config.ts      # Tailwind CSS config
└── package.json
```

## Tech Stack

- **Framework**: Next.js 14 (Static Export)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Forms**: Netlify Forms
- **Hosting**: Netlify

## License

© 2025 Atamai. All rights reserved.
