"use client";
import { PlayIcon, BookIcon, TrophyIcon, Icon} from "@phosphor-icons/react";

type Tab = "video" | "module" | "project";

interface Props {
  active: Tab;
  onChange: (tab: Tab) => void;
}

const TABS: { id: Tab; label: string; icon: Icon }[] = [
  { id: "video", label: "Video", icon: PlayIcon },
  { id: "module", label: "Module", icon: BookIcon },
  { id: "project", label: "Verified Project", icon: TrophyIcon },
];

const CourseTabs = ({ active, onChange }: Props) => (

  <div className="flex border-b border-gray-200 bg-white">
    {TABS.map((tab) => {
      const TabIcon = tab.icon;
      return (
      <button
        key={tab.id}
        onClick={() => onChange(tab.id)}
        className={`flex items-center gap-2 px-10 py-4 text-body font-semibold border-b-2 transition-all
          ${active === tab.id
            ? "border-green-normal text-green-normal"
            : "border-transparent text-gray-400 hover:text-gray-600"
          }`}
      >
        <span>
          <TabIcon size={24} weight="fill" />
        </span>
        {tab.label}
      </button>
    )})}
  </div>
);

export default CourseTabs;