'use client';

import DotGrid from '../ui/DotGrid';

export default function DotBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <DotGrid
        dotSize={6}
        gap={15}
        baseColor="#071212"
        activeColor="#11552E"
        proximity={120}
        shockRadius={80}
        shockStrength={10}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}
