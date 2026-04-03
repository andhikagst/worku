import {
  LinkIcon,
  MouseIcon,
  PaletteIcon,
  PuzzlePieceIcon,
  RepeatIcon,
  RulerIcon,
  WrenchIcon,
} from "@phosphor-icons/react";
import {
  CourseDetailData,
  ModuleData,
  VerifiedProjectData,
} from "../types/course.types";

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
        description:
          "Every spacing value must be a multiple of 8px. 8, 16, 24, 32, 40, 48",
      },
      {
        icon: WrenchIcon,
        title: "Auto Layout",
        description:
          "Makes frames respond like real UI reflow when content changes, like CSS flexbox.",
      },
      {
        icon: PuzzlePieceIcon,
        title: "Lo-Fi Components",
        description:
          "Rectangles + placeholder text = every UI element you need.",
      },
      {
        icon: LinkIcon,
        title: "Prototype Mode",
        description: "Connect wireframe frames with Figma prototype arrows.",
      },
    ],
    lessonItems: [
      {
        id: "l1",
        title: "How to wireframe like a pro",
        type: "video",
        completed: false,
      },
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
        description:
          "Choose the right device frame to match your target platform.",
      },
      {
        icon: PaletteIcon,
        title: "Component Library",
        description:
          "Build reusable components to speed up your workflow significantly.",
      },
      {
        icon: MouseIcon,
        title: "Auto Layout",
        description:
          "Use auto layout to create responsive, flexible UI components.",
      },
      {
        icon: RepeatIcon,
        title: "Iterative Design",
        description:
          "Test and refine your wireframes through rapid iteration cycles.",
      },
    ],
    lessonItems: [
      {
        id: "l1",
        title: "How to wireframe like a pro",
        type: "video",
        completed: true,
      },
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

export const wireframingModuleData: ModuleData = {
  courseTitle: "Wireframing with Figma",
  moduleTitle: "Wireframing with Figma — Complete Guide",
  subtitle:
    "Covers theory, rationale, and step-by-step execution for all 4 core wireframing concepts. Read this after watching the video, or use it as a reference while working on the Verified Project.",
  sections: [
    {
      id: "grid",
      badge: "Foundation · ~4 min read",
      title: "The 8-Point Grid — Why It Exists",
      content:
        "The 8-point grid is not an aesthetic choice — it is an engineering constraint that happens to produce better design. Modern screens use base-8 pixel densities, meaning that spacing values divisible by 8 render crisp on every device. Values like 7px or 13px introduce subpixel rendering artifacts that look subtly blurry at high DPI.\n\nIn practice, this means every margin, padding, gap, and element dimension must be one of: 8, 16, 24, 32, 40, 48, 56, 64… or their half-values (4, 12, 20) when tighter control is needed within components.\n\nFigma makes this trivial to enforce: set your nudge amount to 8 (Shift+Arrow moves 8px), enable the layout grid on every frame, and set your grid to 8px columns. Every element snaps to this rhythm automatically.",
    },
    {
      id: "autolayout",
      badge: "Core Skill · ~5 min read",
      title: "Auto Layout — The Senior Designer's Habit",
      content:
        "Auto Layout is Figma's implementation of CSS flexbox. When you apply Auto Layout to a frame, its children behave like flex items: they reflow when content changes, maintain consistent gaps, and respect padding rules. This is the single most important Figma skill gap between junior and senior designers.\n\nWithout Auto Layout, a wireframe is a collection of static shapes. With it, it's a responsive structure that changes safely when content assumptions break — which they always do in production.",
      steps: [
        {
          number: "01",
          title: "Select any parent frame → press Shift+A",
          description:
            "Instantly converts it to an Auto Layout container. Figma infers direction (horizontal vs vertical) from existing child arrangement.",
        },
        {
          number: "02",
          title: "Set padding and gap using 8pt multiples",
          description:
            "Padding: 16px (inner breathing room). Gap between items: 8 or 16px. These two values cover 90% of all wireframe spacing decisions.",
        },
        {
          number: "03",
          title: 'Set children to "Fill container" not fixed width',
          description:
            "Fixed-width children break when the parent resizes. Fill container children adapt — this is the behavior your engineers expect from the handoff.",
        },
        {
          number: "04",
          title: "Test by resizing the parent frame",
          description:
            "Drag the frame narrower. If everything reflows cleanly, your Auto Layout is correct. If elements overlap or break, fix before moving to the next screen.",
        },
      ],
    },
    {
      id: "lofi",
      badge: "Mindset · ~3 min read",
      title: "Lo-Fi Components — The Rule of Constraints",
      content:
        "The only elements allowed in a lo-fi wireframe are rectangles, lines, and text using a placeholder font (or the exact final typeface at a neutral gray). No icons. No real images. No color beyond black, white, and two grays. This is not a limitation — it is the entire point.\n\nVisual detail in a wireframe is cognitive pollution. It focuses stakeholder attention on color, image quality, and iconography instead of layout, hierarchy, and flow. Every time you add a real icon or a real image to a wireframe, you guarantee feedback on the wrong thing.",
      comparisonTable: {
        allowedTitle: "Allowed in Lo-Fi",
        notAllowedTitle: "Not Allowed",
        allowed: [
          "Filled rectangles",
          "Line separators",
          "Placeholder text (Lorem)",
          "Gray image blocks",
          "Annotation arrows",
        ],
        notAllowed: [
          "Real icons",
          "Brand colors",
          "Final photography",
          "Drop shadows",
          "Gradients",
          "Real button styles",
        ],
      },
    },
    {
      id: "prototype",
      badge: "Execution · ~3 min read",
      title: "Prototype Mode — Making Wireframes Tappable",
      content:
        "A wireframe that cannot be tapped is a document. A wireframe that can be tapped is a product hypothesis. Figma's Prototype panel lets you connect frames with interactions — a tap on a button flows to the next screen — creating a clickable simulation of the user journey without writing a single line of code.\n\nFor the GoFood project, you must connect: Order History → Confirmation → Cart Review → Success State. Use Smart Animate for transitions. The complete flow must be tappable from start to success with no dead ends.",
    },
  ],
};

export const gojekProjectData: VerifiedProjectData = {
  partnerName: "Gojek",
  partnerLogo: "GO",
  partnerTagline: "IDX: GOTO · Southeast Asia Super App",
  partnerMeta: "190M+ users · 14 countries",
  partnerValuation: "$40B valuation",
  projectTitle:
    "Redesign the GoFood Reorder Flow — wireframe 4 screens that fix a real 34% drop-off using Figma and the 8-point grid",
  projectSubtitle:
    "WorkU Verified Partner · Real Production Case · Expert review by Gojek UX Team",
  badges: ["WorkU × Gojek", "Official MOU 2024"],
  partnershipNote: "Official Gojek × WorkU Partnership — MOU signed Jan 2024",
  partnershipDetail:
    "This case is derived from a real GoFood usability test. Submissions are reviewed directly by Gojek's design team. Top 10% of projects are referenced in internal Gojek design sprints.",
  partnershipBadges: ["Real production data", "Made by Gojek experts"],
  briefTitle: "BRIEF FROM GOJEK DESIGN TEAM",
  briefContext:
    'We ran usability testing on the GoFood reorder flow and found 3 critical friction points — (1) users can\'t surface their last order from the home screen, (2) the "Order Again" confirmation has too many decision steps before the cart populates, and (3) the cart review requires excessive scrolling before the CTA is visible. These 3 issues together explain the 34% drop-off on the reorder entry point.',
  briefTask:
    "Redesign the reorder flow as wireframes in Figma. Use our wireframe kit and the 8-point grid. Annotate every spacing decision. Connect all 4 screens as a tappable prototype.",
  briefTable: {
    feature: "GoFood Reorder Flow",
    platform: "iOS primary",
    coreProblem: "34% drop reorder entry",
  },
  deliverables: [
    {
      number: "01",
      title: "4 Lo-Fi Wireframe Screens on Figma",
      description:
        "Order History · Reorder Confirmation · Cart Review · Success State. All frames use the Gojek wireframe kit with 8-point grid. Auto Layout applied on all parent containers.",
    },
    {
      number: "02",
      title: "Spacing Annotations on every Frame",
      description:
        "Minimum 3 annotations per screen: spacing value with 8-pt grid reference, component decision rationale, and which friction point it addresses.",
    },
    {
      number: "03",
      title: "Working Prototype — Fully Tappable",
      description:
        "Connect all 4 screens in Figma Prototype mode. History → Confirmation → Cart → Success. Smart Animate transitions. Fully tappable with no dead ends.",
    },
    {
      number: "04",
      title: "1-Page Design Rationale",
      description:
        "For each of the 3 friction points: which layout decision addresses it and why. One rejected alternative per point. Written as if presenting to the Gojek CPO.",
    },
  ],
  rubric: [
    {
      icon: RulerIcon,
      label: "8-Point Grid & Spacing Consistency",
      pts: 30,
      color: "text-green-normal",
    },
    {
      icon: WrenchIcon,
      label: "Friction Points Addressed (all 3 required)",
      pts: 30,
      color: "text-green-normal",
    },
    {
      icon: PuzzlePieceIcon,
      label: "Prototype Completeness & Tappability",
      pts: 25,
      color: "text-blue-normal",
    },
    {
      icon: LinkIcon,
      label: "Design Rationale Quality",
      pts: 15,
      color: "text-blue-normal",
    },
  ],
  rubricTotal: 100,
  rubricPass: 70,
};
