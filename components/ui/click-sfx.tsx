"use client";

import { useCallback, useEffect, useRef } from "react";

interface ClickSfxProps {
  /** Volume level from 0 to 1 */
  volume?: number;
  /** Custom sound URL (optional) */
  soundUrl?: string;
  /** Whether to enable the sound effect */
  enabled?: boolean;
}

const ClickSfx: React.FC<ClickSfxProps> = ({
  volume = 0.3,
  soundUrl,
  enabled = true,
}) => {
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioBufferRef = useRef<AudioBuffer | null>(null);

  // Generate a simple click sound using Web Audio API
  const generateClickSound = async (): Promise<AudioBuffer> => {
    if (!audioContextRef.current) return null as unknown as AudioBuffer;

    const audioContext = audioContextRef.current;
    const sampleRate = audioContext.sampleRate;
    const duration = 0.1; // 100ms
    const samples = sampleRate * duration;

    const audioBuffer = audioContext.createBuffer(1, samples, sampleRate);
    const channelData = audioBuffer.getChannelData(0);

    // Generate a simple click sound (short burst with decay)
    for (let i = 0; i < samples; i++) {
      const t = i / sampleRate;
      const envelope = Math.exp(-t * 50); // Exponential decay
      const frequency = 800; // 800Hz click
      channelData[i] = Math.sin(2 * Math.PI * frequency * t) * envelope * 0.3;
    }

    return audioBuffer;
  };

  // Load custom sound from URL
  const loadCustomSound = async (url: string): Promise<AudioBuffer | null> => {
    if (!audioContextRef.current) return null;

    try {
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      const audioBuffer = await audioContextRef.current.decodeAudioData(
        arrayBuffer
      );
      return audioBuffer;
    } catch (error) {
      console.warn("Failed to load custom sound:", error);
      return null;
    }
  };

  // Play the click sound
  const playClickSound = useCallback(() => {
    if (!enabled || !audioContextRef.current || !audioBufferRef.current) return;

    try {
      const source = audioContextRef.current.createBufferSource();
      const gainNode = audioContextRef.current.createGain();

      source.buffer = audioBufferRef.current;
      gainNode.gain.value = volume;

      source.connect(gainNode);
      gainNode.connect(audioContextRef.current.destination);

      source.start();
    } catch (error) {
      console.warn("Failed to play click sound:", error);
    }
  }, [enabled, volume]);

  useEffect(() => {
    if (!enabled) return;

    // Initialize Audio Context
    const initAudio = async () => {
      try {
        audioContextRef.current = new (window.AudioContext ||
          (
            window as typeof window & {
              webkitAudioContext: typeof AudioContext;
            }
          ).webkitAudioContext)();

        // Load sound
        if (soundUrl) {
          const customBuffer = await loadCustomSound(soundUrl);
          audioBufferRef.current = customBuffer || (await generateClickSound());
        } else {
          audioBufferRef.current = await generateClickSound();
        }
      } catch (error) {
        console.warn("Failed to initialize audio context:", error);
      }
    };

    // Event handler for clicks/taps
    const handleInteraction = (event: Event) => {
      // Resume audio context if suspended (required by browsers)
      if (audioContextRef.current?.state === "suspended") {
        audioContextRef.current.resume();
      }
      playClickSound();
    };

    // Add event listeners for various interaction types
    const events = ["click", "touchstart"];

    events.forEach((eventType) => {
      document.addEventListener(eventType, handleInteraction, {
        passive: true,
      });
    });

    // Initialize audio when component mounts
    initAudio();

    // Cleanup
    return () => {
      events.forEach((eventType) => {
        document.removeEventListener(eventType, handleInteraction);
      });

      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, [enabled, volume, soundUrl, playClickSound]);

  // This component doesn't render anything visible
  return null;
};

export default ClickSfx;
