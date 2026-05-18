'use client';

import { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import Image from 'next/image';
import logo from '@/public/logo-the-plays.png';

type LoaderVariant = 'pulse' | 'wave' | 'dots' | 'orbits' | 'morphing' | 'liquid';

interface LoaderProps {
  variant?: LoaderVariant;
  text?: string;
  progress?: number;
  fullScreen?: boolean;
}

const containerClass =
  'flex flex-col items-center justify-center gap-8 bg-linear-to-br from-black via-slate-950 to-black';

const fullscreenClass = 'fixed inset-0 z-50';

// ============================================
// ANIMATED BACKGROUND ELEMENTS
// ============================================
const AnimatedBackground = () => (
  <>
    {/* Animated linear orbs */}
    <motion.div
      className="absolute inset-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-linear-to-br from-pink-500/20 to-purple-500/10 blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-linear-to-tr from-blue-500/20 to-cyan-500/10 blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      />
    </motion.div>
  </>
);

// ============================================
// LOGO WITH GLOW EFFECT
// ============================================
const LogoWithGlow = () => (
  <div className="relative w-32 h-32">
    {/* Outer glow rings */}
    <motion.div
      className="absolute inset-0 rounded-full border-2 border-pink-500/30"
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.5, 0, 0.5],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeOut',
      }}
    />
    <motion.div
      className="absolute inset-0 rounded-full border border-purple-500/20"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.8, 0.1, 0.8],
      }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        ease: 'easeOut',
        delay: 0.2,
      }}
    />

    {/* Logo with pulse */}
    <motion.div
      className="relative w-full h-full"
      animate={{
        scale: [1, 1.08, 1],
        filter: [
          'drop-shadow(0 0 8px rgba(236, 72, 153, 0))',
          'drop-shadow(0 0 20px rgba(236, 72, 153, 0.4))',
          'drop-shadow(0 0 8px rgba(236, 72, 153, 0))',
        ],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <Image src={logo} alt="Play BD" fill className="object-contain" />
    </motion.div>

    {/* Inner glow */}
    <motion.div
      className="absolute inset-2 rounded-full bg-linear-to-br from-pink-500/10 to-blue-500/10 blur-xl"
      animate={{
        opacity: [0.2, 0.5, 0.2],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  </div>
);

// ============================================
// WAVE VARIANT (Enhanced)
// ============================================
const WaveVariant = () => {
  const waveAnimation: Variants = {
    animate: (i: number) => ({
      y: [0, -24, 0],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 1.2,
        delay: i * 0.1,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    }),
  };

  return (
    <div className="flex items-end gap-2 h-16">
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={waveAnimation}
          animate="animate"
          className="w-2.5 rounded-full bg-linear-to-t from-pink-500 via-purple-500 to-blue-500 shadow-lg shadow-pink-500/50"
          style={{
            height: `${16 + (i % 3) * 8}px`,
          }}
        />
      ))}
    </div>
  );
};

// ============================================
// DOTS VARIANT (Enhanced with trail effect)
// ============================================
const DotsVariant = () => {
  const dotAnimation: Variants = {
    animate: (i: number) => ({
      scale: [1, 1.5, 1],
      opacity: [0.3, 1, 0.3],
      y: [0, -10, 0],
      transition: {
        duration: 1,
        delay: i * 0.12,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    }),
  };

  return (
    <div className="flex gap-4 items-center">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          custom={i}
          variants={dotAnimation}
          animate="animate"
          className="w-4 h-4 rounded-full bg-linear-to-r from-pink-500 to-blue-500 shadow-lg shadow-pink-500/50"
        />
      ))}
    </div>
  );
};

// ============================================
// PULSE VARIANT (Enhanced with linear animation)
// ============================================
const PulseVariant = () => {
  return (
    <div className="w-64 space-y-3">
      <div className="h-2 overflow-hidden rounded-full bg-linear-to-r from-slate-800 to-slate-700">
        <motion.div
          className="h-full bg-linear-to-r from-pink-500 via-purple-500 to-blue-500"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
      {/* Glow effect */}
      <motion.div
        className="h-1 rounded-full bg-linear-to-r from-transparent via-pink-500/50 to-transparent blur-sm"
        animate={{
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};

// ============================================
// ORBITS VARIANT (Rotating orbital rings)
// ============================================
const OrbitsVariant = () => {
  return (
    <div className="relative w-48 h-48">
      {/* Outer orbit */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-transparent bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 opacity-20"
        animate={{ rotate: 360 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Middle orbit */}
      <motion.div
        className="absolute inset-8 rounded-full border-2 border-transparent bg-linear-to-r from-blue-500 via-cyan-500 to-pink-500 opacity-15"
        animate={{ rotate: -360 }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Inner orbit */}
      <motion.div
        className="absolute inset-16 rounded-full border border-purple-500/30"
        animate={{ rotate: 360 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Center particles */}
      {[0, 1, 2].map((i) => {
        const angle = (i / 3) * Math.PI * 2;
        const radius = 70;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-linear-to-r from-pink-500 to-blue-500 shadow-lg shadow-pink-500/50 left-1/2 top-1/2 -ml-1 -mt-1"
            animate={{
              x: [x, x * 1.2, x],
              y: [y, y * 1.2, y],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 3,
              delay: i * 0.3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        );
      })}
    </div>
  );
};

// ============================================
// MORPHING VARIANT (Shape-shifting blob)
// ============================================
const MorphingVariant = () => {
  const morphAnimation: Variants = {
    animate: {
      borderRadius: ['30% 70% 70% 30% / 30% 30% 70% 70%', '70% 30% 30% 70% / 30% 70% 70% 30%', '30% 30% 70% 70% / 70% 30% 30% 70%', '30% 70% 70% 30% / 30% 30% 70% 70%'],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      variants={morphAnimation}
      animate="animate"
      className="w-48 h-48 bg-linear-to-br from-pink-500 via-purple-500 to-blue-500 opacity-30 blur-xl"
    />
  );
};

// ============================================
// LIQUID VARIANT (Flowing liquid effect)
// ============================================
const LiquidVariant = () => {
  return (
    <div className="relative w-56 h-2 overflow-hidden rounded-full bg-slate-800">
      {/* Liquid blob 1 */}
      <motion.div
        className="absolute inset-0 bg-linear-to-r from-pink-500 to-purple-500"
        animate={{
          x: ['-100%', '100%'],
          scaleX: [0.5, 1.2, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Liquid blob 2 */}
      <motion.div
        className="absolute inset-0 bg-linear-to-r from-purple-500 to-blue-500"
        animate={{
          x: ['-100%', '100%'],
          scaleX: [0.8, 1.1, 0.8],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.3,
        }}
      />

      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
};

// ============================================
// PROGRESS BAR (Enhanced)
// ============================================
const ProgressBar = ({ progress, text }: { progress: number; text: string }) => {
  return (
    <div className="w-64 space-y-3">
      <div className="flex justify-between text-xs text-slate-400">
        <span className="text-sm font-medium text-slate-300">{text}</span>
        <motion.span
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="font-semibold text-transparent bg-linear-to-r from-pink-500 to-blue-500 bg-clip-text"
        >
          {Math.round(progress)}%
        </motion.span>
      </div>

      <div className="relative h-2 overflow-hidden rounded-full bg-slate-800">
        {/* Main progress bar */}
        <motion.div
          className="h-full rounded-full bg-linear-to-r from-pink-500 via-purple-500 to-blue-500"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />

        {/* Shimmer overlay */}
        <motion.div
          className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Glow effect */}
      <motion.div
        className="h-0.5 rounded-full bg-linear-to-r from-transparent via-pink-500/50 to-transparent blur-sm"
        animate={{
          opacity: [0.3, 0.8, 0.3],
          scaleX: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};

// ============================================
// MAIN LOADER COMPONENT
// ============================================
export default function Loader({
  variant = 'pulse',
  text = 'Play BD...',
  progress,
  fullScreen = true,
}: LoaderProps) {
  return (
    <div
      className={`${containerClass} ${
        fullScreen ? fullscreenClass : 'w-full py-20 relative'
      }`}
    >
      {/* Background effects (only on fullscreen) */}
      {fullScreen && <AnimatedBackground />}

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo */}
        <LogoWithGlow />

        {/* Animation variants */}
        {!progress && (
          <>
            {variant === 'wave' && <WaveVariant />}
            {variant === 'dots' && <DotsVariant />}
            {variant === 'pulse' && <PulseVariant />}
            {variant === 'orbits' && <OrbitsVariant />}
            {variant === 'morphing' && <MorphingVariant />}
            {variant === 'liquid' && <LiquidVariant />}

            {/* Text */}
            <motion.p
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="text-sm tracking-widest text-transparent bg-linear-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text font-medium"
            >
              {text}
            </motion.p>
          </>
        )}

        {/* Progress mode */}
        {typeof progress === 'number' && <ProgressBar progress={progress} text={text} />}
      </div>
    </div>
  );
}