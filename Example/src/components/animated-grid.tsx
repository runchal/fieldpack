import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function AnimatedGrid() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden opacity-30">
      <div className="grid grid-cols-8 grid-rows-8 h-full w-full gap-1">
        {Array.from({ length: 64 }).map((_, i) => (
          <motion.div
            key={i}
            className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0, 0.7, 0],
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3,
              delay: i * 0.1,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Animated lines */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent h-px"
          style={{
            top: `${20 + i * 30}%`,
            left: 0,
            right: 0,
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ 
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            delay: i * 0.5,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}