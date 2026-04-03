import { Question } from "../types/career-discovery.types";

export const questions: Question[] = [
  {
    id: 1,
    dimension: "Working Style",
    question: "When you start a new project, what's your natural first instinct?",
    options: [
      {
        id: "a",
        text: "Dive deep into research first",
        description: "Fully understand the problem before touching anything",
        scores: { strategic_analyst: 3, creative_architect: 1 }
      },
      {
        id: "b",
        text: "Start sketching ideas immediately",
        description: "Generate rough concepts and mind maps to think visually",
        scores: { creative_architect: 3, relentless_builder: 1 }
      },
      {
        id: "c",
        text: "Talk to the people involved",
        description: "Understand needs and constraints from others first",
        scores: { human_connector: 3, people_first_leader: 1 }
      },
      {
        id: "d",
        text: "Map out a plan and timeline",
        description: "Structure phases and milestones before anything else",
        scores: { strategic_analyst: 2, people_first_leader: 2 }
      },
    ],
  },
  {
    id: 2,
    dimension: "Working Style",
    question: "Which environment makes you do your absolute best work?",
    options: [
      {
        id: "a",
        text: "Deep solo focus",
        description: "Long stretches of uninterrupted thinking",
        scores: { strategic_analyst: 2, creative_architect: 2 }
      },
      {
        id: "b",
        text: "Collaborative energy all day",
        description: "Constant back-and-forth with a busy system",
        scores: { human_connector: 3, people_first_leader: 1 }
      },
      {
        id: "c",
        text: "A small tight-knit team",
        description: "2-4 people working in close sync",
        scores: { relentless_builder: 2, human_connector: 2 }
      },
      {
        id: "d",
        text: "Structured meetings, clear ownership",
        description: "Regular syncs, no ambiguity about responsibilities",
        scores: { people_first_leader: 3, strategic_analyst: 1 }
      },
    ],
  },
  {
    id: 3,
    dimension: "Working Style",
    question: "When you hit an ambiguous problem with no obvious answer",
    options: [
      {
        id: "a",
        text: "I research deeply until clarity emerges",
        description: "Making decisions that shape the direction of the business",
        scores: { strategic_analyst: 3 }
      },
      {
        id: "b",
        text: "I experiment rapidly",
        description: "Building something beautiful that people love to use",
        scores: { relentless_builder: 3, curious_pioneer: 1 }
      },
      {
        id: "c",
        text: "I gather diverse perspectives",
        description: "Building great teams and being known as a great leader",
        scores: { human_connector: 3, people_first_leader: 1 }
      },
      {
        id: "d",
        text: "I look for patterns elsewhere",
        description: "Building things from 0 to 1 and seeing them scale",
        scores: { strategic_analyst: 2, creative_architect: 2 }
      },
    ],
  },
  {
    id: 4,
    dimension: "Core Strengths",
    question: "Which compliment would mean the most in a performance review?",
    options: [
      {
        id: "a",
        text: "“Your work is beautifully crafted”",
        description: "Quality and excellence of output matters deeply",
        scores: { creative_architect: 3 }
      },
      {
        id: "b",
        text: "“Your analysis was exactly what we needed”",
        description: "Bring clarity through rigorous, evidence-based thinking",
        scores: { strategic_analyst: 3 }
      },
      {
        id: "c",
        text: "“You brought the whole team together”",
        description: "I thrive knowing I improved collaboration",
        scores: { human_connector: 3 }
      },
      {
        id: "d",
        text: "“You shipped something that actually changed things”",
        description: "Impact and results matter more than recognition",
        scores: { relentless_builder: 2, curious_pioneer: 2 }
      },
    ],
  },
  {
    id: 5,
    dimension: "Core Strengths",
    question: "Which task would you most look forward to on Monday morning?",
    options: [
      {
        id: "a",
        text: "Designing a new experience",
        description: "",
        scores: { creative_architect: 3 }
      },
      {
        id: "b",
        text: "Digging into a dataset",
        description: "",
        scores: { strategic_analyst: 3 }
      },
      {
        id: "c",
        text: "Leading a strategy session",
        description: "",
        scores: { people_first_leader: 3 }
      },
      {
        id: "d",
        text: "Building something from scratch",
        description: "Draw on what worked in similar situations",
        scores: { relentless_builder: 3 }
      },
    ],
  },
  {
    id: 6,
    dimension: "Core Strengths",
    question: "A startup needs someone to wear many hats. Which feels most natural?",
    options: [
      {
        id: "a",
        text: "The creative problem-solver",
        description: "Generating ideas, designing experiences, setting visual direction",
        scores: { creative_architect: 3, curious_pioneer: 1 }
      },
      {
        id: "b",
        text: "The strategic decision-maker",
        description: "Setting direction, aligning the team, high-stakes call",
        scores: { people_first_leader: 3, strategic_analyst: 1 }
      },
      {
        id: "c",
        text: "The builder who makes it work",
        description: "Coding, engineering, making things actually function",
        scores: { relentless_builder: 3 }
      },
      {
        id: "d",
        text: "The connector who grows things",
        description: "Building relationships, partnerships, and communities",
        scores: { human_connector: 3 }
      },
    ],
  },
  {
    id: 7,
    dimension: "What Drives You",
    question: "What would make a workday feel truly worthwhile?",
    options: [
      {
        id: "a",
        text: "Creating something I'm genuinely proud of",
        description: "",
        scores: { creative_architect: 3 }
      },
      {
        id: "b",
        text: "Solving a problem that stumped others",
        description: "",
        scores: { strategic_analyst: 3, curious_pioneer: 1 }
      },
      {
        id: "c",
        text: "Helping someone genuinely succeed",
        description: "",
        scores: { human_connector: 3 }
      },
      {
        id: "d",
        text: "Shipping something real into the world",
        description: "",
        scores: { relentless_builder: 3 }
      },
    ],
  },
  {
    id: 8,
    dimension: "What Drives You",
    question: "If salary were equal, which career would you choose?",
    options: [
      {
        id: "a",
        text: "Product Designer at a fast-growing startup",
        description: "Shape the experience of a product used by millions",
        scores: { creative_architect: 3, relentless_builder: 1 }
      },
      {
        id: "b",
        text: "Data Scientist at a tech company",
        description: "Uncover insights that drive billion-dollar decisions",
        scores: { strategic_analyst: 3, curious_pioneer: 1 }
      },
      {
        id: "c",
        text: "Head of Product at a scaleup",
        description: "Lead the vision and strategy for a full product line",
        scores: { people_first_leader: 3, strategic_analyst: 1 }
      },
      {
        id: "d",
        text: "Founder building a new category",
        description: "Start from zero and create something that doesn’t exist",
        scores: { curious_pioneer: 3, relentless_builder: 2 }
      },
    ],
  },
  {
    id: 9,
    dimension: "What Drives You",
    question: "How important is visible social or environmental impact in your work?",
    options: [
      {
        id: "a",
        text: "Not important",
        description: "I focus on craft regardless of sector",
        scores: { strategic_analyst: 1 }
      },
      {
        id: "b",
        text: "Somewhat",
        description: "I’d prefer it, not a dealbreaker",
        scores: { creative_architect: 1, human_connector: 1 }
      },
      {
        id: "c",
        text: "Important",
        description: "I actively seek for roles where impact is real",
        scores: { human_connector: 2 }
      },
      {
        id: "d",
        text: "Essential",
        description: "I’d take less pay for meaningful work",
        scores: { human_connector: 3, curious_pioneer: 1 }
      },
    ],
  },
  {
    id: 10,
    dimension: "Work Preference",
    question: "Which type of feedback energizes you the most?",
    options: [
      {
        id: "a",
        text: "“This design is stunning”",
        description: "Aesthetic feedback - recognition of craft and quality",
        scores: { creative_architect: 3 }
      },
      {
        id: "b",
        text: "“Your logic is airtight”",
        description: "Analytical rigor - knowing your reasoning is sound",
        scores: { strategic_analyst: 3 }
      },
      {
        id: "c",
        text: "“The team really responded to your leadership”",
        description: "Knowing you moved the group forward meaningfully",
        scores: { people_first_leader: 3 }
      },
      {
        id: "d",
        text: "“You shipped faster than anyone expected”",
        description: "Execution speed - delivering and making things happen",
        scores: { relentless_builder: 3 }
      },
    ],
  },
  {
    id: 11,
    dimension: "Work Preference",
    question: "How do you feel about managing or mentoring other people?",
    options: [
      {
        id: "a",
        text: "I love it - most rewarding part of my job",
        description: "Helping others grow gives me real energy and purpose",
        scores: { people_first_leader: 3, human_connector: 2 }
      },
      {
        id: "b",
        text: "I enjoy it occasionally, IC work is my core",
        description: "I like mentoring occasionally, deep IC work is my core",
        scores: { people_first_leader: 1, creative_architect: 1, relentless_builder: 1 }
      },
      {
        id: "c",
        text: "I prefer deep individual contribution",
        description: "I’m at my best doing the actual work, not directing",
        scores: { strategic_analyst: 2, relentless_builder: 2 }
      },
      {
        id: "d",
        text: "Open to it - haven’t tried managing yet",
        description: "Curious about management still figuring out",
        scores: { curious_pioneer: 1 }
      },
    ],
  },
  {
    id: 12,
    dimension: "Ambition",
    question: "How do you feel about deeply ambiguous, undefined problems?",
    options: [
      {
        id: "a",
        text: "Uncomfortable",
        description: "I need clear scope to do my best work",
        scores: { strategic_analyst: 2 }
      },
      {
        id: "b",
        text: "Neutral",
        description: "I can handle it but prefer some initial structure",
        scores: { relentless_builder: 1 }
      },
      {
        id: "c",
        text: "Energized",
        description: "Open problems excite me - I like figuring things out",
        scores: { creative_architect: 2, curious_pioneer: 1 }
      },
      {
        id: "d",
        text: "Thrives on it",
        description: "The more undefined, the more interesting",
        scores: { curious_pioneer: 3, creative_architect: 1 }
      },
    ],
  },
  {
    id: 13,
    dimension: "Core Strengths",
    question: "Where do you genuinely see yourself in 5 years?",
    options: [
      {
        id: "a",
        text: "World-class expert in my craft",
        description: "",
        scores: { creative_architect: 3, strategic_analyst: 2 }
      },
      {
        id: "b",
        text: "Leading a team or department",
        description: "",
        scores: { people_first_leader: 3 }
      },
      {
        id: "c",
        text: "Building my own product or company",
        description: "",
        scores: { curious_pioneer: 3, relentless_builder: 2 }
      },
      {
        id: "d",
        text: "Key connector and collaborator",
        description: "",
        scores: { human_connector: 3, people_first_leader: 1 }
      },
    ],
  },
  {
    id: 14,
    dimension: "Core Strengths",
    question: "Which company type appeals most to you right now?",
    options: [
      {
        id: "a",
        text: "Fast-moving startup (10–100 people)",
        description: "",
        scores: { curious_pioneer: 3, relentless_builder: 1 }
      },
      {
        id: "b",
        text: "Growing scaleup (100–500 people)",
        description: "",
        scores: { relentless_builder: 2, people_first_leader: 1 }
      },
      {
        id: "c",
        text: "Established tech company (500–5000)",
        description: "",
        scores: { strategic_analyst: 2, people_first_leader: 2 }
      },
      {
        id: "d",
        text: "Large enterprise or MNC",
        description: "",
        scores: { strategic_analyst: 2, human_connector: 1 }
      },
    ],
  },
  {
    id: 15,
    dimension: "Core Strengths",
    question: "If you could design your ideal Monday morning...",
    options: [
      {
        id: "a",
        text: "Opening a design tool and creating something",
        description: "",
        scores: { creative_architect: 3 }
      },
      {
        id: "b",
        text: "A strategy session deciding our next move",
        description: "",
        scores: { people_first_leader: 3, human_connector: 1 }
      },
      {
        id: "c",
        text: "Pulling data and turning it into insights",
        description: "",
        scores: { strategic_analyst: 3 }
      },
      {
        id: "d",
        text: "Shipping something that goes live today",
        description: "",
        scores: { relentless_builder: 3, curious_pioneer: 1 }
      },
    ],
  },
];