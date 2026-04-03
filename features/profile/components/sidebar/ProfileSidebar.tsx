"use client";
import { useUserInfo } from "../../hooks/useUserInfo";
import { User, GraduationCap, Briefcase, CheckCircle, Bell, LogOut, Trash2 } from "lucide-react";
import Image from "next/image";
import { signOut } from "next-auth/react";

const NAV_ITEMS = [
  { group: "IDENTITY", items: [
    { label: "Personal Info", sub: "Name, contact, location", icon: User, step: 1 },
    { label: "Education", sub: "Academic History", icon: GraduationCap, step: 2 },
  ]},
  { group: "PROFESSIONAL", items: [
    { label: "Work Experience", sub: "Position & Company", icon: Briefcase, step: 3 },
    { label: "Skills & Expertise", sub: "Hard skills, soft skills, tools", icon: CheckCircle, step: 4 },
  ]},
  { group: "ACCOUNT", items: [
    { label: "Notifications & Privacy", sub: "Preferences & Security", icon: Bell, step: 5 },
  ]},
];

interface ProfileSidebarProps {
  activeStep: number;
  onStepChange: (step: number) => void;
  progress: number;
}

const ProfileSidebar = ({ activeStep, onStepChange, progress }: ProfileSidebarProps) => {
  const { data: user } = useUserInfo();

  return (
    <aside className="w-88 bg-gradient-to-right to-teal-900 text-white flex flex-col px-5 py-8 gap-10 font-plus-jakarta-sans">
      <div className="flex items-center gap-3">
        <div className="w-14 h-14 rounded-full overflow-hidden bg-teal-600 shrink-0">
          {user?.profile_picture ? (
            <Image src={user.profile_picture} alt="profile" width={56} height={56} className="object-cover w-full h-full" />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <User size={24} />
            </div>
          )}
        </div>
        <div>
          <p className="font-bold text-body-sm">{user?.name ?? "Your Name"}</p>
          <p className="text-body-xs text-teal-300">● Setting up profile</p>
        </div>
      </div>

      <hr />

      <nav className="flex flex-col gap-5">
        {NAV_ITEMS.map(({ group, items }) => (
          <div key={group} className="flex flex-col gap-2">
            <p className="text-body-xs text-white font-semibold">{group}</p>
            {items.map(({ label, sub, icon: Icon, step }) => (
              <button
                key={step}
                onClick={() => onStepChange(step)}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-left transition-all
                  ${activeStep === step ? "bg-[#D0E5E3] ring-4 ring-green-normal text-blue-normal" : "border-green-light border text-white hover:bg-white/10"}`}
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0
                  ${activeStep === step ? "bg-blue-normal" : "bg-white"}`}>
                  <Icon className={`${activeStep === step ? "text-white" : "text-blue-normal"}`} size={18} />
                </div>
                <div>
                  <p className="font-semibold text-body-xs">{label}</p>
                  <p className="text-body-xs opacity-70">{sub}</p>
                </div>
              </button>
            ))}
          </div>
        ))}
      </nav>
        <hr />
      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-body-xs text-white">
          <span>Setup Progress</span>
          <span>{progress}%</span>
        </div>
        <div className="h-2 bg-white/20 rounded-full overflow-hidden">
          <div className="h-full bg-white rounded-full transition-all" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="flex items-center gap-2 px-4 py-3 rounded-2xl border border-white text-white text-body-xs font-semibold hover:bg-white/20 transition-all"
        >
          <LogOut size={16} /> Log Out
        </button>
        <button className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-red-200 text-red-500 text-body-xs font-semibold hover:bg-red-500/30 transition-all">
          <Trash2 size={16} /> Delete Account
        </button>
      </div>
    </aside>
  );
};

export default ProfileSidebar;