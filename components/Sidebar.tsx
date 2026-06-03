"use client";

import { motion } from "framer-motion";
import { Home, BookOpen, BarChart2, Settings, User } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "home", icon: Home, label: "Home" },
  { id: "courses", icon: BookOpen, label: "Courses" },
  { id: "analytics", icon: BarChart2, label: "Analytics" },
  { id: "profile", icon: User, label: "Profile" },
  { id: "settings", icon: Settings, label: "Settings" },
];

export function Sidebar() {
  const [activeTab, setActiveTab] = useState(navItems[0].id);

  return (
    <nav className="flex md:flex-col justify-between md:justify-start items-center p-4 md:w-24 md:h-full bg-surface border-t md:border-t-0 md:border-r border-borderDark z-50">
      <div className="hidden md:flex mb-8 items-center justify-center w-12 h-12 rounded-xl bg-accent/20 text-accent">
        <BookOpen className="w-6 h-6" />
      </div>
      
      <div className="flex md:flex-col gap-2 md:gap-4 w-full justify-around md:justify-start">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className="relative flex flex-col items-center justify-center p-3 rounded-xl transition-colors outline-none"
            title={item.label}
          >
            {activeTab === item.id && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-white/10 rounded-xl"
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            )}
            <item.icon
              className={cn(
                "w-6 h-6 relative z-10 transition-colors",
                activeTab === item.id ? "text-accent" : "text-textSecondary hover:text-textPrimary"
              )}
            />
          </button>
        ))}
      </div>
    </nav>
  );
}
