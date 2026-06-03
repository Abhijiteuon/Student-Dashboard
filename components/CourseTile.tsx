"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";

interface Course {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
}

export function CourseTile({ course }: { course: Course }) {
  const IconComponent = (Icons as any)[course.icon_name] || Icons.Book;

  return (
    <motion.article
      className="rounded-3xl bg-surface border border-borderDark p-6 flex flex-col justify-between group relative overflow-hidden"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
          <IconComponent className="w-5 h-5" />
        </div>
        <h3 className="font-semibold text-lg mb-4">{course.title}</h3>
      </div>
      
      <div className="relative z-10 mt-4">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-textSecondary">Progress</span>
          <span className="font-medium">{course.progress}%</span>
        </div>
        <div className="h-2 w-full bg-background rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-accent rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${course.progress}%` }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          />
        </div>
      </div>
    </motion.article>
  );
}
