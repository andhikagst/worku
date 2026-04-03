"use client";
import ProfileSidebar from "@/features/profile/components/sidebar/ProfileSidebar";
import { useUserInfo } from "@/features/profile/hooks/useUserInfo";
import { useState } from "react";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeStep, setActiveStep] = useState(1);
  const { data: user, isLoading } = useUserInfo();

  const calcProgress = () => {
    if (!user) return 0;
    const fields = [
      user.first_name,
      user.last_name,
      user.email,
      user.profile_picture,
      user.location,
    ];
    const filled = fields.filter(Boolean).length;
    return Math.round((filled / fields.length) * 100);
  };
  return (
    <div className="flex">
      <ProfileSidebar
        activeStep={activeStep}
        onStepChange={setActiveStep}
        progress={calcProgress()}
      />
      {children}
    </div>
  );
}
