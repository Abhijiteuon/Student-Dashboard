"use client";

import { motion } from "framer-motion";
import { HeroTile } from "./HeroTile";
import { ActivityTile } from "./ActivityTile";
import { CourseTile } from "./CourseTile";

interface Course {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 20 } },
};

export function BentoGrid({ courses }: { courses: Course[] }) {
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 lg:col-span-3">
        <HeroTile />
      </motion.div>
      
      <motion.div variants={itemVariants} className="col-span-1 lg:col-span-1">
        <ActivityTile />
      </motion.div>
      
      {courses.map((course) => (
        <motion.div key={course.id} variants={itemVariants} className="col-span-1">
          <CourseTile course={course} />
        </motion.div>
      ))}
    </motion.div>
  );
}
