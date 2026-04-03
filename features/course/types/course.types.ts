import { Icon } from "@phosphor-icons/react";

export interface CourseCategory {
  id: string;
  name: string;
  description: string;
  cover_image: string;
}

export interface Course {
  id: string;
  category_id: string;
  name: string;
  cover_image: string;
}

export interface KeyConcept {
  icon: Icon;
  title: string;
  description: string;
}

export interface LessonItem {
  id: string;
  title: string;
  type: "video" | "module" | "project";
  completed: boolean;
}

export interface CourseDetailData {
  id: string;
  courseTitle: string;       
  courseDescription: string;
  courseCoverImage: string;
  lessonTitle: string;       
  lessonDuration: string;
  lessonVideoCount: number;
  lessonDescription: string;
  youtubeUrl: string;
  keyConcepts: KeyConcept[];
  lessonItems: LessonItem[];
  overallProgress: number;
  progressLabel: string;
}