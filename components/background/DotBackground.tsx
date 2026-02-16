'use client';

import DotGrid from '../ui/DotGrid';

export default function DotBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <DotGrid
        dotSize={6}
        gap={15}
        baseColor="#071212"
        activeColor="#11552E"
        proximity={120}
        style={{ width: '100%', height: '100%' }}
      />
      <div
        className="absolute rounded-full opacity-70"
        style={{
          width: '600px',
          height: '200px',
          background: '#0F766A',
          filter: 'blur(100px)',
          top: '-5%',
          left: '0%',
        }}
      />
      <div
        className="absolute rounded-full opacity-60"
        style={{
          width: '500px',
          height: '500px',
          background: '#11552E',
          filter: 'blur(150px)',
          top: '50%',
          left: '60%',
        }}
      />
      <div
        className="absolute rounded-full opacity-50"
        style={{
          width: '300px',
          height: '300px',
          background: '#047857',
          filter: 'blur(100px)',
          top: '70%',
          left: '30%',
        }}
      />
    </div>
  );
}
