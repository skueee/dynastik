import { generate } from "@/lib/api-handler";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const data = searchParams.get("data");
  const repo = searchParams.get("repo");
  const user = searchParams.get("user");

  const response = await fetch(
    `https://api.github.com/repos/${user}/${repo}/stargazers/count`,
  );
  const result = await response.json();
  const stars: number = result.count;

  const svg = generate(data, [{ key: "replaceme", replace: String(stars) }]);

  return new Response(svg, {
    status: 200,
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control":
        "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
