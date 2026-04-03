import { useCallback, useSyncExternalStore } from "react";
import { setLocalStorage } from "../hooks/useLocalStorage";
import { RoadmapPhase } from "../types/career-discovery.types";

const PROGRESS_KEY = "roadmap_completed_items";

const subscribers = new Set<() => void>();

const notifySubscribers = () => {
  subscribers.forEach((cb) => cb());
};

export const useRoadmapProgress = (archetypeId: string) => {
  const storageKey = `${PROGRESS_KEY}_${archetypeId}`;

  const getSnapshot = useCallback(() => {
    try { return localStorage.getItem(storageKey); }
    catch { return null; }
  }, [storageKey]);

  const subscribe = useCallback((cb: () => void) => {
    subscribers.add(cb);
    window.addEventListener("storage", cb);
    return () => {
      subscribers.delete(cb);
      window.removeEventListener("storage", cb);
    };
  }, []);

  const raw = useSyncExternalStore(subscribe, getSnapshot, () => null);

  const completed: Set<string> = (() => {
    try { return raw ? new Set<string>(JSON.parse(raw)) : new Set<string>(); }
    catch { return new Set<string>(); }
  })();

  const toggleCompleted = useCallback((itemId: string) => {
    const next = new Set(completed);
    next.has(itemId) ? next.delete(itemId) : next.add(itemId);
    setLocalStorage(storageKey, [...next]);
    notifySubscribers(); 
  }, [storageKey, completed]);

  const isPhaseCompleted = useCallback((phase: RoadmapPhase): boolean => {
    return phase.items.every((item) => completed.has(item.id));
  }, [completed]);

  return { completed, toggleCompleted, isPhaseCompleted };
};