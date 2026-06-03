"use client";

import { motion } from "framer-motion";

// Mock activity data
const activityData = Array.from({ length: 7 }, () => 
  Array.from({ length: 12 }, () => Math.floor(Math.random() * 4))
);

export function ActivityTile() {
  return (
    <motion.article
      className="col-span-1 md:col-span-2 lg:col-span-1 rounded-3xl bg-surface border border-borderDark p-6 flex flex-col group relative overflow-hidden"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <h3 className="text-lg font-semibold mb-4 relative z-10">Activity</h3>
      
      <div className="flex-1 flex flex-col gap-2 justify-center relative z-10 overflow-hidden">
        {activityData.map((row, i) => (
          <div key={i} className="flex gap-2">
            {row.map((level, j) => (
              <div
                key={j}
                className={`w-4 h-4 rounded-sm ${
                  level === 0 ? "bg-background" :
                  level === 1 ? "bg-accent/30" :
                  level === 2 ? "bg-accent/60" :
                  "bg-accent"
                }`}
              />
            ))}
          </div>
        ))}
      </div>
    </motion.article>
  );
}
