import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { setLocalStorage, removeLocalStorage, useLocalStorage } from "../hooks/useLocalStorage";

const SCORES_KEY = "career_discovery_scores";

const DEFAULT_SCORES: Record<string, number> = {
  strategic_analyst: 0, creative_architect: 0,
  people_first_leader: 0, relentless_builder: 0,
  human_connector: 0, curious_pioneer: 0,
};

export const useCareerDiscoveryRouter = () => {
  const router = useRouter();

  const scores = useLocalStorage<Record<string, number>>(SCORES_KEY, DEFAULT_SCORES);

  const saveScores = useCallback((newScores: Record<string, number>) => {
    setLocalStorage(SCORES_KEY, newScores);
  }, []);
  const loadScores = useCallback((): Record<string, number> => {
    try {
      const raw = localStorage.getItem(SCORES_KEY);
      return raw ? JSON.parse(raw) : DEFAULT_SCORES;
    } catch { return DEFAULT_SCORES; }
  }, []);

  const clearScores = useCallback(() => {
    removeLocalStorage(SCORES_KEY);
  }, []);

  const goToQuestion = useCallback((step: number) => {
    router.push(`/career-discovery/question?step=${step}`);
  }, [router]);

  const goToResult = useCallback(() => {
    router.push("/career-discovery/result");
  }, [router]);

  const goToRoadmap = useCallback(() => {
    router.push("/career-discovery/roadmap");
  }, [router]);

  const retake = useCallback(() => {
    clearScores();
    router.push("/career-discovery/question?step=1");
  }, [router, clearScores]);

  return { scores, saveScores, loadScores, clearScores, goToQuestion, goToResult, goToRoadmap, retake };
};