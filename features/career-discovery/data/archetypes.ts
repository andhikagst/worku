import { Archetype } from "../types/career-discovery.types";

import { GearIcon, PencilRulerIcon, MedalIcon, UsersThreeIcon, DatabaseIcon, GraduationCapIcon } from "@phosphor-icons/react"

export const archetypes: Record<string, Archetype> = {
  strategic_analyst: {
    id: "strategic_analyst",
    title: "The Strategic Analyst",
    subtitle: "Data · Research · Product Intelligence",
    icon: DatabaseIcon,
    roles: ["Data Analyst", "UX Researcher", "Product Analyst"],
    description:
      "You find clarity in complexity. You ask better questions than most people have answers for, and your decisions are firmly anchored in evidence. You're the person others turn to when things don't add up.",
    traits: [
      "Data-driven",
      "Rigorous",
      "Detail-oriented",
      "Evidence-based",
      "Systematic",
    ],
    roadmap: [
      {
        phase: "FOUNDATION",
        label:
          "Build your analytical foundation and define your specialization",
        duration: "Month 0 – 3",
        description:
          "Audit your current skills, complete your WorkU profile, and dive into your top recommended course.",
        items: [
          {
            id: "sa-f-1",
            title: "Complete Career Discovery",
            description:
              "Confirm Strategic Analyst archetype. Map analytical strengths across data, research, and strategy.",
            type: "Foundation",
            duration: "30 min",
          },
          {
            id: "sa-f-2",
            title: "Audit Current Technical Skills",
            description:
              "Map Python, SQL, and stats knowledge against real data scientist JDs at your target level.",
            type: "Foundation",
            duration: "1 hr",
          },
          {
            id: "sa-f-3",
            title: "Python & Pandas Foundations",
            description:
              "Data Frames, cleaning, group by, merging. The absolute core of every data workflow.",
            type: "Skill",
            duration: "8 hrs",
          },
          {
            id: "sa-f-4",
            title: "SQL – From Basics to Window Functions",
            description:
              "Joins, CTEs, window functions, and query optimization. Required in 90% of data roles.",
            type: "Skill",
            duration: "6 hrs",
          },
          {
            id: "sa-f-5",
            title: "Statistics That Actually Matter",
            description:
              "Distributions, hypothesis testing, p-values, and confidence intervals. No PhD required.",
            type: "Skill",
            duration: "6 hrs",
          },
          {
            id: "sa-f-6",
            title: "Pick Your Data Specialization",
            description:
              "Choose: Product Analytics vs. Data Science vs. UX Research vs. BI. This shapes your entire curriculum.",
            type: "Career Action",
            duration: "3 hrs",
          },
          {
            id: "sa-f-m",
            title: "Milestone: Analytical Baseline Set",
            description:
              "Python + SQL working. Specialization chosen. Skills gap mapped vs. target JDs.",
            type: "Milestone",
            duration: "End of 3 month",
          },
        ],
      },
      {
        phase: "BUILD",
        label: "Go deep on your specialization and build a data portfolio",
        duration: "Month 3 – 6",
        description:
          "Deep-dive into your primary discipline. Build one portfolio project that demonstrates your profile's core strength.",
        items: [
          {
            id: "sa-b-1",
            title: "Machine Learning Fundamental",
            description:
              "Sklearn pipelines, supervised learning, model evaluation, and XGBoost. Production-grade from day one.",
            type: "Skill",
            duration: "16 hrs",
          },
          {
            id: "sa-b-2",
            title: "A/B Testing & Experimental",
            description:
              "Hypothesis design, sample sizing, t-tests, Bayesian A/B, and why most experiments are run wrong.",
            type: "Skill",
            duration: "10 hrs",
          },
          {
            id: "sa-b-3",
            title: "Data Visualization & Storytelling",
            description:
              "Turn analysis into decisions. Build dashboards that drive action, not confusion.",
            type: "Skill",
            duration: "6 hrs",
          },
          {
            id: "sa-b-4",
            title: "Portfolio Project #1 – Full Analysis",
            description:
              "End-to-end: question → data → analysis → recommendation → presentation deck. Use a real public dataset.",
            type: "Project",
            duration: "3 weeks",
          },
          {
            id: "sa-b-5",
            title: "Build GitHub & Kaggle Profile",
            description:
              "Push clean, commented notebooks. One Kaggle competition with top-25% finish. Recruiters check these.",
            type: "Career Action",
            duration: "30 min",
          },
          {
            id: "sa-b-m",
            title: "Milestone: Data Portfolio Live",
            description:
              "2 notebook projects on GitHub. Kaggle profile active. ML fundamentals complete.",
            type: "Milestone",
            duration: "End of 6 month",
          },
        ],
      },
      {
        phase: "ACTIVATE",
        label:
          "Land your data role with a strong technical and analytical brand",
        duration: "Month 6 – 12",
        description:
          "Your profile is ready. You're actively interviewing, networking, and have a strong body of work to show.",
        items: [
          {
            id: "sa-a-1",
            title: "Big Data with Spark (Basics)",
            description:
              "PySpark DataFrames, distributed joins, and the basics of processing large datasets at scale.",
            type: "Skill",
            duration: "10 hrs",
          },
          {
            id: "sa-a-2",
            title: "Portfolio Project #2 – ML System",
            description:
              "Build and deploy a model: feature pipeline → model → FastAPI endpoint → monitoring. Put it live.",
            type: "Project",
            duration: "4 weeks",
          },
          {
            id: "sa-a-3",
            title: "Target 30 Data Roles Systematically",
            description:
              "Apply with tailored CVs per specialization tier. Track response rates and iterate on what works.",
            type: "Career Action",
            duration: "3 hrs",
          },
          {
            id: "sa-a-m",
            title: "Milestone: Accept Data Role",
            description:
              "Accepted role as Data Scientist, Analyst, or UX Researcher at target company.",
            type: "Milestone",
            duration: "End of 12 month",
          },
        ],
      },
      {
        phase: "ACCELERATE",
        label: "Grow into a senior analytical contributor",
        duration: "Month 12 – 24",
        description:
          "You've landed. Execute at a high level, build your internal network, and set up your next move early.",
        items: [
          {
            id: "sa-ac-1",
            title: "Advanced ML & Deep Learning",
            description:
              "Neural networks, transformers, and deploying DL models in production. Python-first.",
            type: "Skill",
            duration: "Month 13–18",
          },
          {
            id: "sa-ac-2",
            title: "Position for Promotion to Senior",
            description:
              "Document quarterly impact. Run an analysis that directly influences a major product or business decision.",
            type: "Career Action",
            duration: "Month 18+",
          },
          {
            id: "sa-ac-m",
            title: "Goal: Senior Data Scientist / Lead Analyst",
            description:
              "Promoted or hired at Senior level — the Strategic Analyst target title in 24 months.",
            type: "Milestone",
            duration: "End of 24 month",
          },
        ],
      },
    ],
  },
  creative_architect: {
    id: "creative_architect",
    title: "The Creative Architect",
    subtitle: "Design · Visual Systems · UX Strategy",
    icon: PencilRulerIcon,
    roles: ["Senior UI/UX", "Design Lead", "Head of Design"],
    description:
      "You combine aesthetic sensibility with systems thinking. You see the world as a series of experiences waiting to be designed — and you build things people love to use. Your work is felt before it's explained.",
    traits: [
      "Visually fluent",
      "Iterative",
      "Systems thinker",
      "Quality-obsessed",
      "User empathy",
    ],
    roadmap: [
      {
        phase: "FOUNDATION",
        label: "Establish your design baseline and get your portfolio started",
        duration: "Month 0-3",
        description:
          "Master the fundamentals of design thinking and core tools.",
        items: [
          {
            id: "ca-f-1",
            title: "Complete Career Discovery",
            description:
              "Confirm Strategic Analyst archetypa Map analytical strengths ecross data, research and strategy",
            type: "Foundation",
            duration: "30 min",
          },
          {
            id: "ca-f-2",
            title: "Audit Your Design Skills",
            description:
              "Map your figma, research, and visual vs. mal job descriptions at your target lovel",
            type: "Foundation",
            duration: "1 hr",
          },
          {
            id: "ca-f-3",
            title: "Revamp Linkedin Profile",
            description:
              "Rewrite headline with design keywords. Pin your best work. Feature your archetype",
            type: "Career Action",
            duration: "1 hr",
          },
          {
            id: "ca-f-4",
            title: "UI/UX Foundations Deep Dive",
            description:
              "Figma mastery wireframing (A prototyping and usability testing. The non-negotiable bedrock",
            type: "Skill",
            duration: "8 hrs",
          },
          {
            id: "ca-f-5",
            title: "Design Systems Fundamental",
            description:
              "Atomic design composent libraries. design tokers, and accessibility standards",
            type: "Skill",
            duration: "6 hrs",
          },
          {
            id: "ca-f-m",
            title: "Milestone: Foundation Ready",
            description:
              "Linkedin live Design skill gape mapped First course started 15 target companies defined",
            type: "Milestone",
            duration: "End of 3 month",
          },
        ],
      },
      {
        phase: "BUILD",
        label: "Build the portfolio and skills that open senior design doors",
        duration: "Month 3-6",
        description:
          "Deep-dive into your primary discipline and build strong portfolio pieces.",
        items: [
          {
            id: "ca-b-1",
            title: "Product Analytics for Designers",
            description:
              "Amplitude, Mixpanel basics mad funnels and back design decisions with auta. Designers who speak data get more work shipped.",
            type: "Skill",
            duration: "6 hrs",
          },
          {
            id: "ca-b-2",
            title: "Define 15 Target Companies",
            description:
              "Ther them: Dream/Strong/Safety Research culture design team size and design maturity",
            type: "Career Action",
            duration: "2 hrs",
          },
          {
            id: "ca-b-3",
            title: "Accessibility & Inclusive Design",
            description:
              "WCAG 23 AA, comraat radios, ocreen reader flows. Required at any senior-level rate",
            type: "Skill",
            duration: "5 hrs",
          },
          {
            id: "ca-b-4",
            title: "Motion & Interaction Design",
            description:
              "ProtoPis micro-interactions and the principles that mare animation purposeful not decoration",
            type: "Skill",
            duration: "8 hrs",
          },
          {
            id: "ca-b-5",
            title: "Portfolio Project #1- Full Case Study",
            description:
              "End-to-end research wireframes prototype user testing. One greost case study beats five mediocre ones",
            type: "Project",
            duration: "3 weeks",
          },
          {
            id: "ca-b-6",
            title: "Interview Simulator-20 Sessions.",
            description:
              "Practice portfolio walk-through behavioral, and design challenge questions until score consistently hits 80+",
            type: "Career Action",
            duration: "10 hrs",
          },
          {
            id: "ca-b-m",
            title: "Milestone: Portfolio Live",
            description:
              "case sturly published CV scor220 Interview sim 75 30 new connections.",
            type: "Milestone",
            duration: "End of 6 month",
          },
        ],
      },
      {
        phase: "ACTIVATE",
        label: "Enter the market and land your target role",
        duration: "Month 6-12",
        description:
          "Your profile is ready. Execute your job search strategy and leverage your portfolio.",
        items: [
          {
            id: "ca-a-1",
            title: "Design Leadership Basics",
            description:
              "How to critique work, run design reRWA give feedback, and mentor junior designers",
            type: "Skill",
            duration: "5 hrs",
          },
          {
            id: "ca-a-2",
            title: "Portfolio #2-Spec Redesign",
            description:
              "Redesign a product at one of your dream companies as if you worked there. Publish publicly",
            type: "Project",
            duration: "3 weeks",
          },
          {
            id: "ca-a-3",
            title: "Al Tools for Designers",
            description:
              "Figma Al. Framer Al and prompt engineering Become 2 fastar without sacrificing quality",
            type: "Skill",
            duration: "6 hrs",
          },
          {
            id: "ca-a-4",
            title: "Apply to 30 Roles Systematically",
            description:
              "Work Job Match campaign tailored CV and cover per tier Track every application and",
            type: "Career Action",
            duration: "3 hrs",
          },
          {
            id: "ca-a-5",
            title: "Salary Negotiation Prep",
            description:
              "Market rate research, BATNA strategy, and Al-coached negotiation script practice",
            type: "Career Action",
            duration: "3 hrs",
          },
          {
            id: "ca-a-m",
            title: "Milestone: Accept the Right Offer",
            description:
              "Accepted a role matching Creative Architect torget level and salary",
            type: "Milestone",
            duration: "12 month",
          },
        ],
      },
      {
        phase: "ACCELERATE",
        label: "Grow fast, build your brand, reach Design Lead",
        duration: "Month 12-24",
        description:
          "You've landed. Execute at a high level and build your internal brand.",
        items: [
          {
            id: "ca-ac-1",
            title: "Own a High-Impact Feature",
            description:
              "Lead a product aras to-end. Oum research, design decisions, and measurement. Publish the outcome",
            type: "Skill",
            duration: "Ongoing",
          },
          {
            id: "ca-ac-2",
            title: "Mentor 1 Junior Designer",
            description:
              "Teaching accelerates your own mastery and is the clearest signal that you're ready for Lead title",
            type: "Career Action",
            duration: "Ongoing",
          },
          {
            id: "ca-ac-3",
            title: "Build Public Design Brand",
            description:
              "1 design article per month Speak at a meetup Build a following around your specific niche",
            type: "Career Action",
            duration: "Ongoing",
          },
          {
            id: "ca-ac-m",
            title: "Goal: Senior Designer/Design Lead",
            description:
              "Promoted or hired as Senior Designer or Design Lead the Creative Architect target title in 24. Poonths",
            type: "Milestone",
            duration: "Month 16-24",
          },
        ],
      },
    ],
  },
  people_first_leader: {
    id: "people_first_leader",
    title: "The People-First Leader",
    subtitle: "Product Management · Leadership · Strategy",
    icon: MedalIcon,
    roles: ["Product Manager", "Head of Product", "Engineering Manager"],
    description:
      "You multiply other's output. You're energized by building conditions for great work — aligning, unblocking, and helping talented people thrive.",
    traits: ["Empathetic", "Visionary", "Decisive", "Trusted", "Organized"],
    roadmap: [
      {
        phase: "FOUNDATION",
        label: "Build leadership foundations",
        duration: "Now – 3 months",
        description: "Develop core product and leadership skills.",
        items: [
          {
            id: "ca-f-1",
            title: "Complete Career Discovery",
            description:
              "Confirm Strategic Analyst archetypa Map analytical strengths ecross data, research and strategy",
            type: "Foundation",
            duration: "30 min",
          },
          {
            id: "ca-f-2",
            title: "Audit Your Design Skills",
            description:
              "Map your figma, research, and visual vs. mal job descriptions at your target lovel",
            type: "Foundation",
            duration: "1 hr",
          },
        ],
      },
    ],
  },
  relentless_builder: {
    id: "relentless_builder",
    title: "The Relentless Builder",
    subtitle: "Engineering · Fullstack · Technical Product",
    icon: GearIcon,
    roles: ["Software Engineer", "Technical PM", "Fullstack Developer"],
    description:
      "You ship. Where others plan, you create. You have a deep bias for action and real satisfaction in seeing something go from zero to live. Problems energize you because every problem is a construction project.",
    traits: [
      "Fast-moving",
      "Technical",
      "Hands-on",
      "Execution-focused",
      "Resourceful",
    ],
    roadmap: [
      {
        phase: "FOUNDATION",
        label: "Stack your technical skills",
        duration: "Now – 3 months",
        description: "Pick your stack and start shipping real projects.",
        items: [
          {
            id: "ca-f-1",
            title: "Complete Career Discovery",
            description:
              "Confirm Strategic Analyst archetypa Map analytical strengths ecross data, research and strategy",
            type: "Foundation",
            duration: "30 min",
          },
          {
            id: "ca-f-2",
            title: "Audit Your Design Skills",
            description:
              "Map your figma, research, and visual vs. mal job descriptions at your target lovel",
            type: "Foundation",
            duration: "1 hr",
          },
        ],
      },
    ],
  },
  human_connector: {
    id: "human_connector",
    title: "The Human Connector",
    subtitle: "Community · Growth · People Operations",
    icon: UsersThreeIcon,
    roles: ["Growth Manager", "Community Lead", "Partnership Manager"],
    description:
      "You build the relationships that build everything else. You're the multiplier in the room — bringing the right people together, creating trust where there was none, and growing things through genuine human connection.",
    traits: [
      "Empathetic",
      "Persuasive",
      "Network-builder",
      "Culturally fluent",
      "Communicator",
    ],
    roadmap: [
      {
        phase: "FOUNDATION",
        label: "Stack your technical skills",
        duration: "Now – 3 months",
        description: "Pick your stack and start shipping real projects.",
        items: [
          {
            id: "ca-f-1",
            title: "Complete Career Discovery",
            description:
              "Confirm Strategic Analyst archetypa Map analytical strengths ecross data, research and strategy",
            type: "Foundation",
            duration: "30 min",
          },
          {
            id: "ca-f-2",
            title: "Audit Your Design Skills",
            description:
              "Map your figma, research, and visual vs. mal job descriptions at your target lovel",
            type: "Foundation",
            duration: "1 hr",
          },
        ],
      },
    ],
  },
  curious_pioneer: {
    id: "the_curious_pioneer",
    title: "The Curious Pioneer",
    subtitle: "Entrepreneurship · Innovation · Venture",
    icon: GraduationCapIcon,
    roles: ["Founder", "Venture Analyst", "Innovation Lead"],
    description:
      "You look at the world and see what doesn't exist yet. You're comfortable with deep uncertainty and energized by white space.",
    traits: [
      "Risk-tolerant",
      "Visionary",
      "Experimentalr",
      "Self-directed",
      "First-principles",
    ],
    roadmap: [
      {
        phase: "FOUNDATION",
        label: "Stack your technical skills",
        duration: "Now – 3 months",
        description: "Pick your stack and start shipping real projects.",
        items: [
          {
            id: "ca-f-1",
            title: "Complete Career Discovery",
            description:
              "Confirm Strategic Analyst archetypa Map analytical strengths ecross data, research and strategy",
            type: "Foundation",
            duration: "30 min",
          },
          {
            id: "ca-f-2",
            title: "Audit Your Design Skills",
            description:
              "Map your figma, research, and visual vs. mal job descriptions at your target lovel",
            type: "Foundation",
            duration: "1 hr",
          },
        ],
      },
    ],
  },
};
