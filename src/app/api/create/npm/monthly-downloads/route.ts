import { generate } from "@/lib/api-handler";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const repo = searchParams.get("repo");
  const user = searchParams.get("user");

  if (!data || !repo) {
      return new Response("Missing 'data' or 'user' query parameter", {
        status: 400,
      });
    }

  const response = await fetch(
    `https://api.npmjs.org/downloads/point/last-month/${repo}`,
  );
  const result = await response.json();
  const downloads: number = result.downloads;

  const svg = generate(data, [{ key: "replaceme", replace: String(downloads) }]);

  return new Response(svg, {
    status: 200,
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control":
        "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
