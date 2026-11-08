import { Composition } from "remotion";
import { LaunchVideo } from "./LaunchVideo";

export function VideoRoot() {
  return <Composition id="WeloLaunch" component={LaunchVideo} width={1920} height={1080} fps={30} durationInFrames={486} />;
}
