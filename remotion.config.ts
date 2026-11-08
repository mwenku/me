import { Config } from "@remotion/cli/config";

Config.setPublicDir("./video/public");
Config.setCodec("h264");
Config.setPixelFormat("yuv420p");
Config.setCrf(18);
