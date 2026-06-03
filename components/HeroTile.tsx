"use client";

import { motion } from "framer-motion";
import { Flame } from "lucide-react";

export function HeroTile() {
  return (
    <motion.article 
      className="col-span-1 md:col-span-2 lg:col-span-3 rounded-3xl bg-surface border border-borderDark p-8 relative overflow-hidden group"
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="absolute inset-0 bg-mesh-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
            Welcome back, <span className="text-accent">Student</span>
          </h1>
          <p className="text-textSecondary">
            You're doing great! Keep up the momentum.
          </p>
        </div>
        
        <div className="flex items-center gap-4 bg-background px-6 py-4 rounded-2xl border border-borderDark">
          <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500">
            <Flame className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold">14 Days</div>
            <div className="text-textSecondary text-sm">Learning Streak</div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
