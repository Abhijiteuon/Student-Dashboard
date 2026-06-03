import { Suspense } from "react";
import { BentoGrid } from "@/components/BentoGrid";
import { createClient } from "@/utils/supabase/server";

async function getCourses() {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching courses:", error);
    // Return mock data if fetching fails or if setup is not done
    return [
      { id: "1", title: "Advanced React Patterns", progress: 75, icon_name: "Code2" },
      { id: "2", title: "UI/UX Fundamentals", progress: 30, icon_name: "PenTool" },
      { id: "3", title: "Machine Learning Basics", progress: 10, icon_name: "Brain" },
      { id: "4", title: "System Architecture", progress: 90, icon_name: "Server" },
    ];
  }

  return data;
}

function CourseSkeletons() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="col-span-1 md:col-span-2 lg:col-span-3 h-[200px] bg-surface rounded-3xl animate-pulse" />
      <div className="col-span-1 h-[200px] bg-surface rounded-3xl animate-pulse" />
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="col-span-1 h-[180px] bg-surface rounded-3xl animate-pulse" />
      ))}
    </div>
  );
}

export default async function Dashboard() {
  const courses = await getCourses();

  return (
    <div className="max-w-7xl mx-auto">
      <Suspense fallback={<CourseSkeletons />}>
        <BentoGrid courses={courses} />
      </Suspense>
    </div>
  );
}
