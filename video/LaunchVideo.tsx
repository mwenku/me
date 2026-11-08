import { AbsoluteFill, Sequence, Track, useVideoConfig } from "remotion";
import { CameraShot } from "./elements";
import { FadeOut, Soundtrack, fadeOutDurationInSeconds } from "./ending";
import { Closing, Introduction } from "./scenes";
import "./fonts";
import "./video.css";

export function LaunchVideo() {
  const { durationInFrames, fps } = useVideoConfig();

  return (
    <AbsoluteFill style={{ backgroundColor: "#000000" }}>
      <Track name="Website tour">
        <Sequence name="Checkout my new website" from={0} durationInFrames={1.2 * fps}><Introduction /></Sequence>
        <Sequence name="Homepage reveal" from={1.2 * fps} durationInFrames={fps}><CameraShot source="home" duration={1} tilt={-18} roll={-5} zoomFrom={0.96} zoomTo={1.08} xFrom={70} xTo={-60} panTo={20} /></Sequence>
        <Sequence
          name="Experience"
          from={2.2 * fps}
          durationInFrames={fps}
          style={{
            translate: "-2px 0px"
          }}
        ><CameraShot source="experience" duration={1} tilt={-16} roll={-5} zoomFrom={1.03} zoomTo={1.2} xFrom={-50} xTo={60} panFrom={60} panTo={180} /></Sequence>
        <Sequence
          name="Backend"
          from={3.2 * fps}
          durationInFrames={fps}
          style={{
            translate: "-2px 0px"
          }}
        ><CameraShot source="backend" duration={1} tilt={16} roll={5} zoomFrom={1.14} zoomTo={1.06} xFrom={70} xTo={-90} panFrom={70} panTo={130} /></Sequence>
        <Sequence
          name="Reporting"
          from={4.2 * fps}
          durationInFrames={fps}
          style={{
            translate: "-2px 0px"
          }}
        ><CameraShot source="reporting" duration={1} tilt={-14} roll={-4} zoomFrom={1.12} zoomTo={1.25} xFrom={50} xTo={-30} panFrom={60} panTo={180} /></Sequence>
        <Sequence
          name="Project grid"
          from={5.2 * fps}
          durationInFrames={fps}
          style={{
            translate: "-2px 0px"
          }}
        ><CameraShot source="projects" duration={1} tilt={15} roll={5} zoomFrom={0.98} zoomTo={1.12} xFrom={-90} xTo={50} panFrom={30} panTo={160} /></Sequence>
        <Sequence
          name="Mitarbo card"
          from={6.2 * fps}
          durationInFrames={0.8 * fps}
          style={{
            translate: "-2px 0px"
          }}
        ><CameraShot source="projects-first" duration={0.8} tilt={-17} roll={-5} zoomFrom={1.38} zoomTo={1.5} xFrom={460} xTo={530} panFrom={100} panTo={170} /></Sequence>
        <Sequence
          name="Fleetle card"
          from={7 * fps}
          durationInFrames={0.8 * fps}
          style={{
            translate: "-2px 0px"
          }}
        ><CameraShot source="projects-first" duration={0.8} tilt={17} roll={5} zoomFrom={1.5} zoomTo={1.36} xFrom={-550} xTo={-430} panFrom={100} panTo={150} /></Sequence>
        <Sequence
          name="Raven card"
          from={7.8 * fps}
          durationInFrames={0.6 * fps}
          style={{
            translate: "-2px 0px"
          }}
        ><CameraShot source="projects-second" duration={0.6} tilt={-13} roll={-4} zoomFrom={1.38} zoomTo={1.46} xFrom={430} xTo={490} panFrom={100} panTo={140} /></Sequence>
        <Sequence
          name="Project grid pull-back"
          from={8.4 * fps}
          durationInFrames={0.8 * fps}
          style={{
            translate: "-2px 0px"
          }}
        ><CameraShot source="projects-second" duration={0.8} tilt={15} roll={5} zoomFrom={1.42} zoomTo={0.96} xFrom={-470} xTo={0} panFrom={140} panTo={100} /></Sequence>
        <Sequence
          name="Integration logos"
          from={9.2 * fps}
          durationInFrames={fps}
          style={{
            translate: "-2px 0px"
          }}
        ><CameraShot source="integrations" duration={1} tilt={-18} roll={-6} zoomFrom={1.18} zoomTo={1.28} xFrom={180} xTo={-180} panFrom={20} panTo={100} /></Sequence>
        <Sequence
          name="Expertise"
          from={10.2 * fps}
          durationInFrames={fps}
          style={{
            translate: "-2px 0px"
          }}
        ><CameraShot source="expertise" duration={1} tilt={16} roll={5} zoomFrom={1.04} zoomTo={1.2} xFrom={-70} xTo={70} panFrom={50} panTo={120} /></Sequence>
        <Sequence
          name="Command menu"
          from={11.2 * fps}
          durationInFrames={0.6 * fps}
          style={{
            translate: "-2px 0px"
          }}
        ><CameraShot source="command" duration={0.6} tilt={-10} roll={-3} zoomFrom={1.04} zoomTo={1.24} panFrom={90} panTo={120} /></Sequence>
        <Sequence
          name="Quick search"
          from={11.8 * fps}
          durationInFrames={0.4 * fps}
          style={{
            translate: "-2px 0px"
          }}
        ><CameraShot source="command-search" duration={0.4} tilt={8} roll={2} zoomFrom={1.24} zoomTo={1.32} panFrom={90} panTo={120} /></Sequence>
        <Sequence
          name="Contact close-up"
          from={12.2 * fps}
          durationInFrames={fps}
          style={{
            translate: "-2px 0px"
          }}
        ><CameraShot source="contact" duration={1} tilt={-15} roll={-5} zoomFrom={1.42} zoomTo={1.56} xFrom={350} xTo={260} panFrom={40} panTo={100} /></Sequence>
        <Sequence
          name="Contact pull-back"
          from={13.2 * fps}
          durationInFrames={fps}
          style={{
            translate: "-2px 0px"
          }}
        ><CameraShot source="contact" duration={1} tilt={15} roll={5} zoomFrom={1.18} zoomTo={0.94} xFrom={70} xTo={0} panFrom={60} panTo={20} /></Sequence>
        <Sequence
          name="Welo.one"
          from={14.2 * fps}
          durationInFrames={2 * fps}
          style={{
            translate: "-2px 0px"
          }}
        ><Closing /></Sequence>
      </Track>
      <Track name="Soundtrack"><Soundtrack /></Track>
      <Track name="Ending fade">
        <Sequence name="Fade to black" from={durationInFrames - fadeOutDurationInSeconds * fps} durationInFrames={fadeOutDurationInSeconds * fps}><FadeOut /></Sequence>
      </Track>
    </AbsoluteFill>
  );
}
