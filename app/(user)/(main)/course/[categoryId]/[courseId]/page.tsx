"use client";
import { use, useState } from "react";
import { getCourseDetail, gojekProjectData, gojekProjectResult, wireframingModuleData } from "@/features/course/data/courseDetail";
import VideoPlayer from "@/features/course/components/detail/VideoPlayer";
import CourseTabs from "@/features/course/components/detail/CourseTabs";
import LessonContent from "@/features/course/components/detail/LessonContent";
import CourseSidebar from "@/features/course/components/detail/CourseSidebar";
import ModuleContent from "@/features/course/components/detail/ModuleContent";
import VerifiedProjectContent from "@/features/course/components/detail/VerifiedProjectContent";
import ProjectResultContent from "@/features/course/components/detail/ProjectResultContent";

type Tab = "video" | "module" | "project";

interface Props {
  params: Promise<{ courseId: string }>;
}

export default function CourseDetailPage({ params }: Props) {
  const { courseId } = use(params);
  const data = getCourseDetail(courseId);

  const [activeTab, setActiveTab] = useState<Tab>("video");
  const [isModuleCompleted, setIsModuleCompleted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [completedItems, setCompletedItems] = useState<Set<string>>(new Set());
  const [projectSubmitted, setProjectSubmitted] = useState(false);

  const handleToggleItem = (id: string) => {
    setCompletedItems((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const handleProjectSubmit = () => {
    setProjectSubmitted(true); 
  };

  return (
    <div className="min-h-screen bg-gray-50 font-plus-jakarta-sans pt-34.25">
      <div className="flex">
        <div className="flex-2 flex flex-col">
          <VideoPlayer youtubeUrl={data.youtubeUrl} />
          <CourseTabs active={activeTab} onChange={setActiveTab} />

          {activeTab === "video" && (
            <LessonContent
              data={data}
              isCompleted={isCompleted}
              onComplete={() => setIsCompleted(true)}
            />
          )}
          {activeTab === "module" && (
            <ModuleContent
              data={wireframingModuleData}
              isCompleted={isModuleCompleted}
              onComplete={() => setIsModuleCompleted(true)}
            />
          )}
          {activeTab === "project" && (
            projectSubmitted ? (
              <ProjectResultContent result={gojekProjectResult} />
            ) : (
              <VerifiedProjectContent
                data={gojekProjectData}
                onSubmit={handleProjectSubmit}
              />
            )
          )}
        </div>

        <div className="flex-1 shrink-0 px-16 py-14 flex flex-col gap-4 border-l border-gray-100 bg-[#EBF0F3]">
          <CourseSidebar
            data={data}
            completedItems={completedItems}
            onToggleItem={handleToggleItem}
          />
        </div>
      </div>
    </div>
  );
}