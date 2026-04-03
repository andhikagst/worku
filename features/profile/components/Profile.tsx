"use client";
import { useState } from "react";
import ProfileSidebar from "@/features/profile/components/sidebar/ProfileSidebar";
import ProfilePhotoSection from "@/features/profile/components/sections/ProfilePhotoSection";
import FullNameSection from "@/features/profile/components/sections/FullNameSection";
import ContactSection from "@/features/profile/components/sections/ContactSection";
import HomeLocationSection from "@/features/profile/components/sections/HomeLocationSection";
import { useUserInfo } from "@/features/profile/hooks/useUserInfo";

const STEP_LABELS = ["", "Personal Information", "Education", "Work Experience", "Skills & Expertise", "Notifications & Privacy"];

export default function Profile() {
  const [activeStep, setActiveStep] = useState(1);
  const { data: user, isLoading } = useUserInfo();

  const calcProgress = () => {
    if (!user) return 0;
    const fields = [user.first_name, user.last_name, user.email, user.profile_picture, user.location];
    const filled = fields.filter(Boolean).length;
    return Math.round((filled / fields.length) * 100);
  };

  return (
    <div className="flex min-h-screen font-plus-jakarta-sans w-full">
      <main className="flex-1 bg-blue-light">
        <div className="flex items-center justify-between px-10 py-4 bg-white border-b border-gray-100">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-green-light text-blue-normal text-body-xs font-bold rounded-full">
              STEP {activeStep} OF 5
            </span>
            <span className="font-semibold text-body-sm text-gray-700">{STEP_LABELS[activeStep]}</span>
          </div>
          <div className="flex gap-3">
            <button className="px-5 py-2 border border-gray-300 rounded-xl text-body-xs font-semibold text-blue-normal hover:bg-gray-50 transition-all">
              Skip
            </button>
            <button className="px-5 py-2 bg-blue-normal text-white rounded-xl text-body-xs font-semibold hover:bg-teal-800 transition-all">
              Save
            </button>
          </div>
        </div>

        <div className="px-10 py-8">
          {activeStep === 1 && (
            <>
              <div className="mb-8">
                <p className="text-body-xs text-teal-600 font-semibold">Step 1 — Personal Info</p>
                <h1 className="text-h2 font-bold text-gray-800 mt-1">Your basic information</h1>
                <p className="text-body text-gray-500 mt-1">
                  Used for your public WorkU profile, course certificates, and recruitment. Complete it now!
                </p>
              </div>

              {isLoading ? (
                <div className="flex items-center justify-center py-20">
                  <p className="text-gray-400">Loading...</p>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-5 w-full">
                  <ProfilePhotoSection photoUrl={user?.profile_picture} />
                  <FullNameSection user={user} />
                  <ContactSection user={user} />
                  <HomeLocationSection user={user} />
                </div>
              )}

              <div className="flex items-center justify-between mt-10">
                <div className="flex gap-2 flex-1 justify-center">
                  {[1,2,3,4,5].map((s) => (
                    <div key={s} className={`rounded-full transition-all ${s === activeStep ? "w-6 h-2.5 bg-green-normal" : "w-2.5 h-2.5 bg-gray-300"}`} />
                  ))}
                </div>
                <button
                  onClick={() => setActiveStep((prev) => Math.min(prev + 1, 5))}
                  className="flex items-center gap-2 px-6 py-2.5 bg-blue-normal text-white rounded-xl text-body-xs font-semibold hover:bg-teal-800 transition-all"
                >
                  Continue →
                </button>
              </div>
            </>
          )}

          {activeStep !== 1 && (
            <div className="flex items-center justify-center py-32 text-gray-400">
              <p>Step {activeStep} — Coming soon</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}