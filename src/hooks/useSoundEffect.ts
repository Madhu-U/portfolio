import { soundService, SoundType } from "@/utils/soundService";
import { useCallback } from "react";

export const useSoundEffect = () => {
  const playSound = useCallback((type: SoundType) => {
    soundService.play(type);
  }, []);

  return {
    playSound,
  };
};
