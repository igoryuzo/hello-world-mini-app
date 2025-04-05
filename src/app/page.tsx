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
