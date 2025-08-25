"use client";

import { useCallback, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";

interface ClickSfxProps {
  /** Volume level from 0 to 1 */
  volume?: number;
  /** Whether to enable the sound effect */
  enabled?: boolean;
}

const ClickSfx: React.FC<ClickSfxProps> = ({
  volume = 0.3,
  enabled = true,
}) => {
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioBufferRef = useRef<AudioBuffer | null>(null);

  // detect mobile
  const isMobile = useMediaQuery({ maxWidth: 768 });

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

  // Play the click sound
  const playClickSound = useCallback(() => {
    if (
      !enabled ||
      isMobile ||
      !audioContextRef.current ||
      !audioBufferRef.current
    )
      return;

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
  }, [enabled, isMobile, volume]);

  useEffect(() => {
    if (!enabled || isMobile) return;

    // Initialize Audio Context
    const initAudio = async () => {
      try {
        audioContextRef.current = new (window.AudioContext ||
          (
            window as typeof window & {
              webkitAudioContext: typeof AudioContext;
            }
          ).webkitAudioContext)();

        // Always generate the click sound (no external URL)
        audioBufferRef.current = await generateClickSound();
      } catch (error) {
        console.warn("Failed to initialize audio context:", error);
      }
    };

    // Event handler for clicks/taps
    const handleInteraction = () => {
      // Resume audio context if suspended (required by browsers)
      if (audioContextRef.current?.state === "suspended") {
        audioContextRef.current.resume();
      }
      playClickSound();
    };

    const events = ["click", "touchstart"];

    events.forEach((eventType) => {
      document.addEventListener(eventType, handleInteraction, {
        passive: true,
      });
    });

    initAudio();

    return () => {
      events.forEach((eventType) => {
        document.removeEventListener(eventType, handleInteraction);
      });

      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, [enabled, isMobile, playClickSound]);

  return null;
};

export default ClickSfx;
