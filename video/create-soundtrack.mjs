import { writeFile } from "node:fs/promises";

const sampleRate = 44100;
const duration = 18;
const beatDuration = 0.4;
const leftChannel = new Float32Array(sampleRate * duration);
const rightChannel = new Float32Array(sampleRate * duration);

function addSound(start, length, volume, pan, waveform) {
  const firstSample = Math.floor(start * sampleRate);
  const sampleCount = Math.floor(length * sampleRate);

  for (let sampleIndex = 0; sampleIndex < sampleCount; sampleIndex += 1) {
    const outputIndex = firstSample + sampleIndex;
    if (outputIndex >= leftChannel.length) break;
    const time = sampleIndex / sampleRate;
    const sound = waveform(time, sampleIndex) * volume;
    leftChannel[outputIndex] += sound * Math.sqrt((1 - pan) / 2);
    rightChannel[outputIndex] += sound * Math.sqrt((1 + pan) / 2);
  }
}

function frequency(note) {
  return 440 * 2 ** ((note - 69) / 12);
}

const chords = [[50, 57, 60, 64], [46, 53, 57, 60], [53, 60, 64, 67], [48, 55, 60, 64]];

for (let bar = 0; bar < Math.ceil(duration / (4 * beatDuration)); bar += 1) {
  const chord = chords[Math.floor(bar / 2) % chords.length];
  const start = bar * 4 * beatDuration;

  chord.forEach((note, noteIndex) => {
    const pitch = frequency(note + 12);
    addSound(start, 2.4, 0.04, (noteIndex - 1.5) / 2, (time) => {
      const envelope = Math.min(time / 0.1, 1) * Math.max(0, 1 - time / 2.4) ** 1.6;
      return envelope * (Math.sin(2 * Math.PI * pitch * time) + 0.3 * Math.sin(2 * Math.PI * pitch * 1.003 * time));
    });
  });

  for (let step = 0; step < 8; step += 1) {
    const note = chord[[0, 2, 1, 3, 2, 1, 3, 2][step]] + 24;
    const pitch = frequency(note);
    addSound(start + step * beatDuration / 2, 0.7, 0.075, step % 2 ? 0.4 : -0.4, (time) => {
      const envelope = Math.min(time / 0.005, 1) * Math.exp(-time * 8);
      return envelope * (Math.sin(2 * Math.PI * pitch * time) + 0.2 * Math.sin(2 * Math.PI * pitch * 2 * time));
    });
  }

  if (start >= 16) continue;

  for (let beat = 0; beat < 4; beat += 1) {
    addSound(start + beat * beatDuration, 0.3, 0.31, 0, (time) => {
      const phase = 2 * Math.PI * (48 * time + 3.4 * (1 - Math.exp(-time * 32)));
      return Math.sin(phase) * Math.exp(-time * 16);
    });
    const bassPitch = frequency(chord[0] - 12);
    addSound(start + beat * beatDuration, 0.3, 0.18, 0, (time) => Math.sin(2 * Math.PI * bassPitch * time) * Math.min(time / 0.006, 1) * Math.exp(-time * 12));
    if (beat % 2 === 0) continue;
    addSound(start + beat * beatDuration, 0.13, 0.09, 0, (time, sampleIndex) => {
      const noise = Math.sin((sampleIndex + bar * 71) * 78.233) * 43758.5453;
      return ((noise - Math.floor(noise)) * 2 - 1) * Math.exp(-time * 30);
    });
  }

  for (let step = 0; step < 8; step += 1) {
    addSound(start + step * beatDuration / 2 + beatDuration / 4, 0.06, step % 2 ? 0.025 : 0.04, step % 2 ? 0.5 : -0.5, (time, sampleIndex) => {
      const noise = Math.sin((sampleIndex + bar * 101 + step * 17) * 78.233) * 43758.5453;
      return ((noise - Math.floor(noise)) * 2 - 1) * Math.exp(-time * 75);
    });
  }
}

for (const start of [1.2, 3, 6, 10, 12, 14, 16]) {
  addSound(start, 0.65, 0.065, 0, (time) => Math.sin(2 * Math.PI * 1046.5 * time) * Math.exp(-time * 10));
  addSound(start - 0.12, 0.22, 0.065, 0.25, (time, sampleIndex) => {
    const noise = Math.sin((sampleIndex + start * 101) * 12.9898) * 43758.5453;
    const envelope = Math.sin(Math.PI * time / 0.22) ** 2;
    return ((noise - Math.floor(noise)) * 2 - 1) * envelope;
  });
}

for (const start of [12, 12.6]) {
  addSound(start, 0.045, 0.1, 0, (time) => Math.sin(2 * Math.PI * 1800 * time) * Math.exp(-time * 110));
}

for (let sampleIndex = 0; sampleIndex < leftChannel.length; sampleIndex += 1) {
  const delayedIndex = sampleIndex - Math.floor(sampleRate * beatDuration * 0.75);
  if (delayedIndex < 0) continue;
  leftChannel[sampleIndex] += rightChannel[delayedIndex] * 0.16;
  rightChannel[sampleIndex] += leftChannel[delayedIndex] * 0.16;
}

const output = Buffer.alloc(44 + leftChannel.length * 4);
output.write("RIFF", 0);
output.writeUInt32LE(output.length - 8, 4);
output.write("WAVEfmt ", 8);
output.writeUInt32LE(16, 16);
output.writeUInt16LE(1, 20);
output.writeUInt16LE(2, 22);
output.writeUInt32LE(sampleRate, 24);
output.writeUInt32LE(sampleRate * 4, 28);
output.writeUInt16LE(4, 32);
output.writeUInt16LE(16, 34);
output.write("data", 36);
output.writeUInt32LE(leftChannel.length * 4, 40);

for (let sampleIndex = 0; sampleIndex < leftChannel.length; sampleIndex += 1) {
  const time = sampleIndex / sampleRate;
  const fade = Math.min(time / 0.12, 1, Math.max(0, (duration - time) / 0.8));
  output.writeInt16LE(Math.round(Math.tanh(leftChannel[sampleIndex] * 1.4) * fade * 24000), 44 + sampleIndex * 4);
  output.writeInt16LE(Math.round(Math.tanh(rightChannel[sampleIndex] * 1.4) * fade * 24000), 46 + sampleIndex * 4);
}

await writeFile(new URL("./public/soundtrack.wav", import.meta.url), output);
console.log("Created the original 18-second soundtrack at 150 BPM.");
