// This script is meant to handle every "common" actions from the APIs (decoding, using the generator...)

import createBadge from "./generate"

// This function takes svgData (base64 encoded), and the keys dict
export function generate(base64SVGData: string, replaceDict: { key: string; replace: string }[]) {
  const svgData = atob(base64SVGData)
  return createBadge(svgData, replaceDict)
}
