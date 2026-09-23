export default function createBadge(
  svg: string,
  replaceDict: { key: string; replace: string }[],
) {
  replaceDict.forEach((entry) => {
    const placeholder = "{!}" + entry.key + "{!}";
    if (svg.includes(placeholder)) {
      svg = svg.replace(placeholder, entry.replace);
    }
  });

  return svg;
}
