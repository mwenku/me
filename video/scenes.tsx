import { AbsoluteFill, Interactive, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { CameraShot, Phone, cameraMotion } from "./elements";

function OpeningTitle() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return <Interactive.H1 name="Checkout my new website" className="opening-title" style={{
    opacity: interpolate(frame, [0, 0.12 * fps, 0.95 * fps, 1.2 * fps - 1], [0, 1, 1, 0], cameraMotion),
    translate: `${interpolate(frame, [0, 0.3 * fps, 1.2 * fps - 1], [-60, 0, -20], cameraMotion)}px 0px`,
    scale: `${interpolate(frame, [0, 1.2 * fps - 1], [0.96, 1.04], { ...cameraMotion, output: "perceptual-scale" })}`,
  }}>Meet my<br />new website.</Interactive.H1>;
}

export function Introduction() {
  return (
    <AbsoluteFill className="scene introduction">
      <CameraShot source="home" duration={1.2} tilt={-24} roll={-9} zoomFrom={0.92} zoomTo={1.04} xFrom={550} xTo={260} yFrom={100} yTo={30} panTo={0} />
      <div className="opening-shade" />
      <OpeningTitle />
    </AbsoluteFill>
  );
}

export function Mobile() {
  return (
    <AbsoluteFill className="scene mobile-scene">
      <CameraShot source="home" duration={1} tilt={12} roll={-4} zoomFrom={0.88} zoomTo={0.78} xFrom={-180} xTo={-270} yFrom={35} yTo={0} panTo={0} />
      <Phone />
    </AbsoluteFill>
  );
}

function WebsiteAddress() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return <Interactive.Div name="Website address" className="website-address" style={{ opacity: interpolate(frame, [0.5 * fps, 0.85 * fps], [0, 1], cameraMotion), translate: `0px ${interpolate(frame, [0.5 * fps, fps], [35, 0], cameraMotion)}px` }}>mwelwa.com</Interactive.Div>;
}

export function Closing() {
  return (
    <AbsoluteFill className="scene closing-scene">
      <CameraShot source="home" duration={2} tilt={14} roll={5} zoomFrom={1.14} zoomTo={0.68} xFrom={-40} xTo={0} yFrom={40} yTo={-145} panTo={0} settle />
      <WebsiteAddress />
    </AbsoluteFill>
  );
}
