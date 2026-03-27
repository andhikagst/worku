"use client";
import React, { useRef, useState, useEffect } from "react";
import SessionSetup from "./SessionSetup";
import Image from "next/image";
import ai from "@/public/home/features/ai.png";
import { Megaphone, Clock, Settings, ChartColumnBig, Mic, SendHorizonal } from "lucide-react";
import { TextInput } from "@/shared/components/UI/input/TextInput";
import { Button } from "@/shared/components/UI/button/Button";
import { useInterview } from "../hooks/useInterview";

const AiInterview = () => {
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { session, isSessionActive, startSession, isStarting, sendMessage, isSending, resetSession } = useInterview();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [session?.messages]);

  const handleSend = () => {
    if (!input.trim() || isSending) return;
    sendMessage(input.trim());
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section className="w-full font-plus-jakarta-sans text-white py-18">
      <div className="grid grid-cols-[35%_1fr] px-18 gap-10">
        <div className="flex flex-col gap-10">
          <SessionSetup
            onStart={startSession}
            isLoading={isStarting}
            isDisabled={isSessionActive}
          />
          {isSessionActive && (
            <Button
              variant="primary"
              size="smaller"
              onClick={resetSession}
              className="bg-red-500 w-full text-body rounded-xl"
            >
              End Session
            </Button>
          )}
          <div className="bg-blue-normal rounded-3xl p-11">
            <h1 className="text-h3 font-bold">Tips</h1>
            <ul className="mt-4 space-y-5 font-semibold">
              <li className="flex items-center gap-4">
                <Megaphone size={24} className="stroke-green-normal" />
                <p>
                  Use the STAR method — Situation, Task,
                  <br />
                  Action, Result — for behavioral questions.
                </p>
              </li>
              <li className="flex items-center gap-4">
                <Clock size={24} className="stroke-green-normal" />
                Aim for 60–120 second answers —
                <br />
                concise but complete. Avoid rambling.
              </li>
              <li className="flex items-center gap-4">
                <Settings size={24} className="stroke-green-normal" />
                Press the mic button to record your voice,
                <br />
                or type your answer in the text box.
              </li>
              <li className="flex items-center gap-4">
                <ChartColumnBig size={24} className="stroke-green-normal" />
                After the session, you&apos;ll get a full feedback
                <br />
                report with scores for each answer.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="bg-blue-normal rounded-3xl p-8">
            <h1 className="text-300 font-bold">
              {isSessionActive
                ? `Interview: ${session?.setup.job_role} • ${session?.setup.interview_type} • ${session?.setup.difficulty}`
                : "Configure your session and press start!"}
            </h1>
          </div>

          <div className="flex flex-col bg-blue-normal rounded-4xl p-8 grow min-h-96 overflow-y-auto flex-1">
            {!isSessionActive ? (
              <div className="flex flex-col justify-center items-center h-full text-[#D9D9D9] gap-4">
                <Image src={ai} alt="AI" width={80} height={80} />
                <h1 className="text-h2 font-bold">AI Interviewer Ready</h1>
                <p className="text-body text-center">
                  Set up your session on the left, then click Start Interview to begin.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {session?.messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] px-5 py-3 rounded-2xl text-body leading-relaxed whitespace-pre-wrap
                        ${msg.role === "ai"
                          ? "bg-blue-normal-hover text-white"
                          : "bg-green-normal text-white"
                        }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}
                {isSending && (
                  <div className="flex justify-start">
                    <div className="bg-blue-normal-hover px-5 py-3 rounded-2xl text-[#B3B3B3] text-body animate-pulse">
                      AI is typing...
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          <div className="bg-blue-normal rounded-4xl p-8 flex items-end">
            <div className="flex w-full gap-2">
              <div className="flex-1">
                <TextInput
                  placeholder="Type your answer here, or use the mic to speak"
                  containerClassName="bg-blue-normal-hover! h-18"
                  className="placeholder:text-[#B3B3B3] text-white"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={!isSessionActive || isSending}
                />
              </div>
              <Button className="bg-green-normal rounded-xl p-5!" size="small" disabled={!isSessionActive}>
                <Mic size={32} className="stroke-white" />
              </Button>
              <Button
                className="bg-blue-normal rounded-xl p-5! border border-[#b3b3b3]"
                size="small"
                onClick={handleSend}
                disabled={!isSessionActive || isSending || !input.trim()}
              >
                <SendHorizonal size={32} className="stroke-white" />
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AiInterview;
