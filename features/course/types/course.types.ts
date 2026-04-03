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

export interface ModuleSection {
  id: string;
  badge: string;       
  title: string;
  content: string;
  
  comparisonTable?: {
    allowedTitle: string;
    notAllowedTitle: string;
    allowed: string[];
    notAllowed: string[];
  };
  
  steps?: {
    number: string;
    title: string;
    description: string;
  }[];
}
 
export interface ModuleData {
  courseTitle: string;
  moduleTitle: string;
  subtitle: string;
  sections: ModuleSection[];
}

interface Deliverable {
  number: string;
  title: string;
  description: string;
}
 
interface RubricItem {
  icon: Icon;
  label: string;
  pts: number;
  color: string;
}
 
export interface VerifiedProjectData {
  partnerName: string;
  partnerLogo: string;
  partnerTagline: string;
  partnerMeta: string;
  partnerValuation: string;
  projectTitle: string;
  projectSubtitle: string;
  badges: string[];
  partnershipNote: string;
  partnershipDetail: string;
  partnershipBadges: string[];
  briefTitle: string;
  briefContext: string;
  briefTask: string;
  briefTable: { feature: string; platform: string; coreProblem: string };
  deliverables: Deliverable[];
  rubric: RubricItem[];
  rubricTotal: number;
  rubricPass: number;
}