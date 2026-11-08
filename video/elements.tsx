import type { CSSProperties } from "react";
import { AbsoluteFill, CanvasImage, Easing, Interactive, interpolate, staticFile, useCurrentFrame, useVideoConfig } from "remotion";

export const cameraMotion = { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.bezier(0.2, 0.75, 0.3, 1) } as const;

function PageImage({ source, duration, panFrom, panTo }: { source: string; duration: number; panFrom: number; panTo: number }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return <CanvasImage name="Website capture" src={staticFile(`captures/${source}.png`)} width={1440} height={1000} style={{ width: "100%", height: "auto", display: "block", translate: `0px ${interpolate(frame, [0, duration * fps - 1], [-panFrom, -panTo], { ...cameraMotion, easing: Easing.linear })}px` }} />;
}

export function BrowserWindow({ source, duration, panFrom = 0, panTo = 0, style }: { source: string; duration: number; panFrom?: number; panTo?: number; style?: CSSProperties }) {
  return (
    <div className="browser" style={style}>
      <div className="browser-toolbar"><div className="browser-dots"><i /><i /><i /></div><div className="browser-address">mwelwa.com</div><span className="browser-plus">+</span></div>
      <div className="browser-screen"><PageImage source={source} duration={duration} panFrom={panFrom} panTo={panTo} /></div>
    </div>
  );
}

type CameraShotProps = {
  source: string;
  duration: number;
  tilt?: number;
  roll?: number;
  zoomFrom?: number;
  zoomTo?: number;
  xFrom?: number;
  xTo?: number;
  yFrom?: number;
  yTo?: number;
  panFrom?: number;
  panTo?: number;
  settle?: boolean;
};

export function CameraShot({ source, duration, tilt = -12, roll = -4, zoomFrom = 1, zoomTo = 1.12, xFrom = 0, xTo = 0, yFrom = 0, yTo = 0, panFrom = 0, panTo = 60, settle = false }: CameraShotProps) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const lastFrame = duration * fps - 1;

  return (
    <AbsoluteFill
      className="scene camera-stage"
      data-shot={source}
      style={{
        translate: "-2px 0px"
      }}
    >
      <Interactive.Div name="Cinematic camera" className="camera-plane" style={{
        translate: `${interpolate(frame, [0, lastFrame], [xFrom, xTo], cameraMotion)}px ${interpolate(frame, [0, lastFrame], [yFrom, yTo], cameraMotion)}px`,
        scale: `${interpolate(frame, [0, lastFrame], [zoomFrom, zoomTo], { ...cameraMotion, output: "perceptual-scale" })}`,
        rotate: `${interpolate(frame, [0, lastFrame], [roll, settle ? 0 : roll * 0.55], cameraMotion)}deg`,
        transform: `rotateX(${interpolate(frame, [0, lastFrame], [7, settle ? 0 : -3], cameraMotion)}deg) rotateY(${interpolate(frame, [0, lastFrame], [tilt, settle ? 0 : tilt * 0.6], cameraMotion)}deg)`,
      }}>
        <BrowserWindow source={source} duration={duration} panFrom={panFrom} panTo={panTo} />
      </Interactive.Div>
    </AbsoluteFill>
  );
}

export function Phone() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <Interactive.Div name="Mobile fly-by" className="phone" style={{
      translate: `${interpolate(frame, [0, 0.45 * fps, fps - 1], [650, 0, -25], cameraMotion)}px ${interpolate(frame, [0, fps - 1], [80, -20], cameraMotion)}px`,
      rotate: `${interpolate(frame, [0, fps - 1], [14, 4], cameraMotion)}deg`,
      transform: `perspective(1800px) rotateY(${interpolate(frame, [0, fps - 1], [-24, -8], cameraMotion)}deg)`,
    }}>
      <div className="phone-speaker" />
      <div className="phone-screen"><CanvasImage name="Mobile website" src={staticFile("captures/mobile-home.png")} width={390} height={844} style={{ width: "100%", height: "auto", display: "block" }} /></div>
    </Interactive.Div>
  );
}
