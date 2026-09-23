function optimize(svg: string): string {
  return svg
    .replace(/<!--[\s\S]*?-->/g, "") // Remove comments
    .replace(/>\s+</g, "><")         // Remove whitespace between tags
    .replace(/\s{2,}/g, " ")         // Collapse multiple spaces
    .trim();
}

export function generate_url(url: string, svg: string, args = {}) {
  const minimizedSVG = optimize(svg);
  console.log(minimizedSVG)
  const encodedSVG = encodeURI(btoa(minimizedSVG));

  const params = new URLSearchParams({
    data: encodedSVG,
    ...args
  });

  return `${url}?${params.toString()}`
}
