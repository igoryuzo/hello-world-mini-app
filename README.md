# Hello World Farcaster Mini App

A simple Hello World mini app built with Next.js for the Farcaster ecosystem.

## Setup Steps

1. **Create Next.js Project**
```bash
yarn create next-app hello-world-mini-app --typescript --tailwind --eslint
```

2. **Install Dependencies**
```bash
cd hello-world-mini-app
yarn add @farcaster/frame-sdk
```

3. **Configure App Layout** (`src/app/layout.tsx`)
- Add Farcaster Frame meta tags
- Configure app metadata
- Set up frame button and actions
- Define splash screen settings

4. **Create Main Page** (`src/app/page.tsx`)
```typescript
'use client';

import { useEffect } from 'react';
import { sdk } from '@farcaster/frame-sdk';

export default function Home() {
  useEffect(() => {
    // Tell the client we're ready to show content
    sdk.actions.ready();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#855dcd]">
      <h1 className="text-4xl font-bold text-white">Hello, World!</h1>
    </div>
  );
}
```

5. **Add Required Images**
- Place images in `/public/images/`
  - `image_url.png` - Main frame image
  - `splash_image_url.png` - Splash screen image

6. **Deploy to Vercel**
- Deploy the app to get a public URL
- Update all URLs in `layout.tsx` to use the deployed URL

## Configuration

The mini app uses the following configuration in `layout.tsx`:
- Frame Version: `next`
- Background Color: `#855dcd`
- Button Title: "👋 Say Hello"
- Image URLs:
  - Main Image: `/images/image_url.png`
  - Splash Image: `/images/splash_image_url.png`

## Development

1. **Local Development**
```bash
yarn dev
```

2. **Testing with Warpcast**
- Visit [Warpcast Mini App Debug Tool](https://warpcast.com/~/developers/mini-apps/debug)
- Enter your app's URL
- Test the frame functionality

## Important Notes

- The app must call `sdk.actions.ready()` to dismiss the splash screen
- All image URLs must be absolute and publicly accessible
- The frame image should maintain a 3:2 aspect ratio
- Splash image should be 200x200px
