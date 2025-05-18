import { Howl } from "howler";

export type SoundType = "click" | "hover";

const SOUNDS: Record<SoundType, string> = {
  click: "/audio/ui-click.mp3",
  hover: "/audio/ui-hover.mp3",
};

// Cache for loaded sound Instances
const SoundInstances: Partial<Record<SoundType, Howl>> = {};

// Load a sound if not done already
const getSound = (type: SoundType): Howl => {
  if (!SoundInstances[type]) {
    SoundInstances[type] = new Howl({
      src: [SOUNDS[type]],
      volume: 0.7,
      preload: true,
      html5: false,
    });
  }
  return SoundInstances[type];
};

// Sound service methods
export const soundService = {
  play: (type: SoundType): void => {
    getSound(type).play();
  },

  stop: (type: SoundType): void => {
    getSound(type).stop();
  },

  setVolume: (volume: number): void => {
    Object.keys(SoundInstances).forEach((key) => {
      SoundInstances[key as SoundType]?.volume(volume);
    });
  },
};
