import React from "react";
import SessionSetup from "./SessionSetup";
import Image from "next/image";
import ai from "@/public/home/features/ai.png";
import { Megaphone, Clock, Settings, ChartColumnBig } from "lucide-react";

const AiInterview = () => {
  return (
    <section className="w-full font-plus-jakarta-sans text-white py-18">
      <div className="grid grid-cols-[35%_1fr] px-18 gap-10">
        <div className="flex flex-col gap-10">
          <SessionSetup />
          <div className="bg-blue-normal rounded-3xl p-11">
            <h1 className="text-h3 font-bold">Tips</h1>
            <ul className="mt-4 space-y-5 font-semibold">
              <li className="flex items-center gap-4">
                <Megaphone size={24}/>
                <p>
                  Use the STAR method — Situation, Task,
                  <br />
                  Action, Result — for behavioral questions.
                </p>
              </li>
              <li className="flex items-center gap-4">
                <Clock size={24}/>
                Aim for 60–120 second answers —
                <br />
                concise but complete. Avoid rambling.
              </li>
              <li className="flex items-center gap-4">
                <Settings size={24}/>
                Press the mic button to record your voice,
                <br />
                or type your answer in the text box.
              </li>
              <li className="flex items-center gap-4">
                <ChartColumnBig size={24}/>
                After the session, you&apos;ll get a full feedback
                <br />
                report with scores for each answer.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="bg-blue-normal rounded-full p-8">
            <h1 className="text-300 font-bold">
              Configure your session and press start!
            </h1>
          </div>
          <div className="flex flex-col bg-blue-normal rounded-4xl p-8 grow justify-center items-center text-[#D9D9D9] gap-4">
            <Image src={ai} alt="..." width={80} height={80} color="#D9D9D9" />
            <h1 className="text-h2 font-bold">AI Interviewer Ready</h1>
            <p className="text-body">
              Set up your session on the left, then click Start Interview to
              begin your practice session.
            </p>
          </div>
          <div className="bg-blue-normal rounded-4xl p-8">
            <input
              type="text"
              className="w-full text-black block border border-[#B3B3B3] rounded-3xl bg-green-light-active px-7 py-7 placeholder:text-[#616162]"
              placeholder="Type your answer here, or use the mic to speak"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiInterview;
