# Welo launch video

A 16.2-second, 1920 × 1080 Remotion composition at 30 fps. The website is the subject: tilted browser shots, quick zooms, close crops, and fast cuts through every section. The composition ends with the final scene; the last 0.8 seconds fade the picture to black and the soundtrack to silence.

The soundtrack is the opening 18 seconds of [Monique Bingham, Black Coffee — Deep In The Bottom (of Africa), instrumental](https://www.youtube.com/watch?v=5nEO0lt4mXM), uploaded by Instru Lyrics. It is stored locally as `public/launch-soundtrack.wav`, with a short fade in and a 0.6-second fade out. The download used yt-dlp after youtube-dl could not extract the available formats.

Open the interactive preview:

```sh
AWS_PROFILE=cc-dev PREFIX=mwelwa npm run video:studio
```

Select **WeloLaunch** at http://localhost:3333/WeloLaunch. Every shot has its own named timeline item. Preview assets and fonts are local, so the site does not need to run during playback.

The current sequence is opening reveal (0–1.2s), homepage (1.2–2.2s), experience/backend/reporting (2.2–5.2s), project montage (5.2–9.2s), integrations/expertise (9.2–11.2s), command menu (11.2–12.2s), contact (12.2–14.2s), and the homepage pull-back with the URL (14.2–16.2s).

To export an H.264 MP4, use Studio’s Render button or:

```sh
AWS_PROFILE=cc-dev PREFIX=mwelwa npm run video:render
```

The output goes to `video/out/welo-launch.mp4`. Generated previews and exports in `video/out/` are ignored by Git.

To refresh the site captures, first run the portfolio development server, then:

```sh
AWS_PROFILE=cc-dev PREFIX=mwelwa npm run video:capture
```

Chrome is detected on macOS and common Linux paths. Set `CHROME_PATH` for another installation, or `SITE_URL` to capture another instance of the portfolio. Captures use the real site without changing its source.

Check the video’s TypeScript:

```sh
AWS_PROFILE=cc-dev PREFIX=mwelwa npm run video:typecheck
```

`npm run video:soundtrack` regenerates the previous synthesized track in `public/soundtrack.wav`; it does not change the selected YouTube soundtrack.

Shot timing and camera settings are in `LaunchVideo.tsx`, the camera implementation is in `elements.tsx`, the opening/mobile/closing scenes are in `scenes.tsx`, coordinated ending fades are in `ending.tsx`, and the appearance is in `video.css`. The local DM Sans and Space Mono fonts come from Google Fonts and use the SIL Open Font License; their licenses are included alongside the font files.
