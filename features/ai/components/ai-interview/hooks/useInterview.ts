import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { startInterview, continueInterview } from "../services/ai-interview.service";
import { InterviewMessage, InterviewSession, SessionSetupPayload } from "../schemas/ai-interview.schema";

export const useInterview = () => {
  const [session, setSession] = useState<InterviewSession | null>(null);

  const startMutation = useMutation({
    mutationFn: (payload: SessionSetupPayload) =>
      startInterview({ ...payload, input: "Hi" }),
    onSuccess: (data, variables) => {
      setSession({
        previous_response_id: data!.previous_response_id,
        messages: [{ role: "ai", content: data!.response }],
        setup: variables,
      });
    },
  });

  const continueMutation = useMutation({
    mutationFn: (input: string) => {
      if (!session) throw new Error("No active session");
      return continueInterview({
        previous_response_id: session.previous_response_id,
        input,
      });
    },
    onSuccess: (data, input) => {
      setSession((prev) => {
        if (!prev) return prev;
        const newMessages: InterviewMessage[] = [
          ...prev.messages,
          { role: "user", content: input },
          { role: "ai", content: data!.response },
        ];
        return {
          ...prev,
          previous_response_id: data!.previous_response_id,
          messages: newMessages,
        };
      });
    },
  });

  const resetSession = () => setSession(null);

  return {
    session,
    isSessionActive: !!session,
    startSession: startMutation.mutate,
    isStarting: startMutation.isPending,
    startError: startMutation.error,
    sendMessage: continueMutation.mutate,
    isSending: continueMutation.isPending,
    sendError: continueMutation.error,
    resetSession,
  };
};