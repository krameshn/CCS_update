import React from 'react';
import { motion } from 'motion/react';

export function LogoWave() {
  const nodes = 8;
  const nodePositions = Array.from({ length: nodes }, (_, i) => {
    const angle = (i / nodes) * Math.PI * 2;
    const radius = 60;
    return {
      x: Math.cos(angle) * radius + 100,
      y: Math.sin(angle) * radius + 100,
      angle,
    };
  });

  return (
    <div className="relative w-[200px] h-[200px]">
      <svg width="200" height="200" viewBox="0 0 200 200">
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="33%" stopColor="#8b5cf6" />
            <stop offset="66%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
          <filter id="waveGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {nodePositions.map((node, idx) => {
          const nextNode = nodePositions[(idx + 1) % nodes];
          const controlRadius = 80;
          const controlAngle = (node.angle + nextNode.angle) / 2;
          const cx = Math.cos(controlAngle) * controlRadius + 100;
          const cy = Math.sin(controlAngle) * controlRadius + 100;

          return (
            <motion.path
              key={`path${idx}`}
              d={`M ${node.x} ${node.y} Q ${cx} ${cy} ${nextNode.x} ${nextNode.y}`}
              stroke="url(#waveGradient)"
              strokeWidth="3"
              fill="none"
              filter="url(#waveGlow)"
              initial={{ pathLength: 0, opacity: 0.3 }}
              animate={{
                pathLength: [0, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                pathLength: {
                  duration: 2,
                  delay: idx * 0.15,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
                opacity: {
                  duration: 2,
                  delay: idx * 0.15,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
            />
          );
        })}

        {nodePositions.map((node, idx) => {
          const waveRadius = 15;

          return (
            <motion.g key={`node${idx}`}>
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={waveRadius}
                fill="none"
                stroke="url(#waveGradient)"
                strokeWidth="2"
                opacity={0.6}
                animate={{
                  r: [waveRadius, waveRadius * 2],
                  opacity: [0.6, 0],
                }}
                transition={{
                  duration: 2,
                  delay: idx * 0.15,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
              />

              <motion.circle
                cx={node.x}
                cy={node.y}
                r={10}
                fill="url(#waveGradient)"
                filter="url(#waveGlow)"
                animate={{
                  r: [10, 14, 10],
                  cy: [node.y, node.y - 5, node.y],
                }}
                transition={{
                  duration: 2,
                  delay: idx * 0.15,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.g>
          );
        })}

        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          style={{ originX: '100px', originY: '100px' }}
        >
          {[0, 90, 180, 270].map((angle, idx) => {
            const x = 100 + Math.cos((angle * Math.PI) / 180) * 25;
            const y = 100 + Math.sin((angle * Math.PI) / 180) * 25;

            return (
              <motion.circle
                key={`center${idx}`}
                cx={x}
                cy={y}
                r={8}
                fill="url(#waveGradient)"
                filter="url(#waveGlow)"
                animate={{ r: [8, 12, 8] }}
                transition={{ duration: 1.5, delay: idx * 0.2, repeat: Infinity, ease: 'easeInOut' }}
              />
            );
          })}
        </motion.g>

        <motion.circle
          cx={100}
          cy={100}
          r={15}
          fill="url(#waveGradient)"
          filter="url(#waveGlow)"
          animate={{ r: [15, 18, 15], opacity: [1, 0.7, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  );
}

export default LogoWave;
