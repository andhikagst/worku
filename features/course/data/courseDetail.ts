import { LinkIcon, MouseIcon, PaletteIcon, PuzzlePieceIcon, RepeatIcon, RulerIcon, WrenchIcon } from "@phosphor-icons/react";
import { CourseDetailData } from "../types/course.types";

export const courseDetailDummy: Record<string, CourseDetailData> = {
  default: {
    id: "default",
    courseTitle: "UI/UX Research & Design",
    courseDescription: "The foundational course every aspiring designer needs.",
    courseCoverImage: "https://picsum.photos/seed/uiux-cover/400/250",
    lessonTitle: "Wireframing with Figma",
    lessonDuration: "18 min",
    lessonVideoCount: 1,
    lessonDescription:
      "Wireframing is where great UX is actually built — not in the final polished design, but in the rough structural decisions that happen long before pixels. In this lesson, you'll follow a complete Figma session: starting from an empty 375px mobile frame and ending with a fully annotated 5-screen wireframe prototype ready for stakeholder review.",
    youtubeUrl: "https://www.youtube.com/embed/c9Wg6Cb_YlU", // Nielsen's 10 Usability Heuristics
    keyConcepts: [
      {
        icon: RulerIcon,
        title: "8-Point Grid System",
        description: "Every spacing value must be a multiple of 8px. 8, 16, 24, 32, 40, 48",
      },
      {
        icon: WrenchIcon,
        title: "Auto Layout",
        description: "Makes frames respond like real UI reflow when content changes, like CSS flexbox.",
      },
      {
        icon: PuzzlePieceIcon,
        title: "Lo-Fi Components",
        description: "Rectangles + placeholder text = every UI element you need.",
      },
      {
        icon: LinkIcon,
        title: "Prototype Mode",
        description: "Connect wireframe frames with Figma prototype arrows.",
      },
    ],
    lessonItems: [
      { id: "l1", title: "How to wireframe like a pro", type: "video", completed: false },
      { id: "l2", title: "Read Module", type: "module", completed: false },
      { id: "l3", title: "Final Project", type: "project", completed: false },
    ],
    overallProgress: 32,
    progressLabel: "32% complete | Est. 5 weeks",
  },
  "wireframing-figma": {
    id: "wireframing-figma",
    courseTitle: "UI/UX Research & Design",
    courseDescription: "The foundational course every aspiring designer needs.",
    courseCoverImage: "https://picsum.photos/seed/figma-cover/400/250",
    lessonTitle: "Wireframing with Figma",
    lessonDuration: "22 min",
    lessonVideoCount: 2,
    lessonDescription:
      "In this lesson, you'll learn how to use Figma to create professional wireframes from scratch. We'll cover the essential tools, frame setup, component creation, and how to build a complete low-fidelity prototype that communicates your design intent clearly.",
    youtubeUrl: "https://www.youtube.com/embed/FTFaQWZBqQ8", // Figma Wireframing Tutorial
    keyConcepts: [
      {
        icon: RulerIcon,
        title: "Frame Setup",
        description: "Choose the right device frame to match your target platform.",
      },
      {
        icon: PaletteIcon,
        title: "Component Library",
        description: "Build reusable components to speed up your workflow significantly.",
      },
      {
        icon: MouseIcon,
        title: "Auto Layout",
        description: "Use auto layout to create responsive, flexible UI components.",
      },
      {
        icon: RepeatIcon,
        title: "Iterative Design",
        description: "Test and refine your wireframes through rapid iteration cycles.",
      },
    ],
    lessonItems: [
      { id: "l1", title: "How to wireframe like a pro", type: "video", completed: true },
      { id: "l2", title: "Read Module", type: "module", completed: false },
      { id: "l3", title: "Final Project", type: "project", completed: false },
    ],
    overallProgress: 32,
    progressLabel: "32% complete | Est. 5 weeks",
  },
};

export const getCourseDetail = (courseId: string): CourseDetailData => {
  return courseDetailDummy[courseId] ?? courseDetailDummy["default"];
};