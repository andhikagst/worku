import { Icon } from "@phosphor-icons/react";

export interface Option {
  id: string;
  text: string;
  description: string;
  scores: Record<string, number>;
}

export interface Question {
  id: number;
  dimension: string;
  question: string;
  options: Option[];
}

export interface Archetype {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  traits: string[];
  icon: Icon;
  roles: string[]; 
  roadmap: RoadmapPhase[];
}

export interface RoadmapPhase {
  phase: string;
  label: string;
  duration: string;
  description: string;
  items: RoadmapItem[];
}

export interface RoadmapItem {
  id: string; 
  title: string;
  description: string;
  type: "Foundation" | "Skill" | "Project" | "Career Action" | "Milestone";
  duration: string;
}