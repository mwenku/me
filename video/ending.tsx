import { Audio } from "@remotion/media";
import { AbsoluteFill, Easing, interpolate, staticFile, useCurrentFrame, useVideoConfig } from "remotion";

export const fadeOutDurationInSeconds = 0.8;

const fadeMotion = { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.inOut(Easing.cubic) } as const;

export function Soundtrack() {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();

  return <Audio
    name="Deep In The Bottom (of Africa) - Instrumental"
    src={staticFile("launch-soundtrack.wav")}
    durationInFrames={durationInFrames}
    volume={interpolate(frame, [durationInFrames - fadeOutDurationInSeconds * fps, durationInFrames - 1], [0.8, 0], fadeMotion)}
  />;
}

export function FadeOut() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return <AbsoluteFill style={{ backgroundColor: "#000000", opacity: interpolate(frame, [0, fadeOutDurationInSeconds * fps - 1], [0, 1], fadeMotion) }} />;
}
