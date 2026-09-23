// This script is meant to handle every "common" actions from the APIs (decoding, using the generator...)

import createBadge from "./generate";

function base64ToUint8Array(base64: string): Uint8Array {
  const buffer = Buffer.from(base64, "base64");
  return buffer;
}

// This function takes svgData (base64 encoded), and the keys dict
export function generate(
  base64SVGData: string,
  replaceDict: { key: string; replace: string }[],
) {
  const svgDataBytes = base64ToUint8Array(base64SVGData);
  const svgData = new TextDecoder().decode(svgDataBytes);
  return createBadge(svgData, replaceDict);
}
