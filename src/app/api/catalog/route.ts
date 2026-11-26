import { NextRequest, NextResponse } from "next/server";

const upstreamBase = "https://wp.real-music.store/wp-json/wc/store/v1/";
const allowedParams = new Set(["page", "per_page", "search", "min_price", "max_price", "category", "order", "orderby", "include"]);

export async function GET(request: NextRequest) {
  const resource = request.nextUrl.searchParams.get("resource") ?? "";
  if (!/^products(?:\/categories|\/\d+)?$/.test(resource)) {
    return NextResponse.json({ error: "Invalid catalog resource" }, { status: 400 });
  }
  const upstreamUrl = new URL(resource, upstreamBase);
  for (const [key, value] of request.nextUrl.searchParams) {
    if (allowedParams.has(key)) upstreamUrl.searchParams.set(key, value);
  }
  try {
    const upstream = await fetch(upstreamUrl, { next: { revalidate: 300 } });
    if (!upstream.ok) return NextResponse.json({ error: "Catalog unavailable" }, { status: upstream.status });
    const response = NextResponse.json(await upstream.json());
    for (const header of ["x-wp-total", "x-wp-totalpages"]) {
      const value = upstream.headers.get(header);
      if (value) response.headers.set(header, value);
    }
    return response;
  } catch {
    return NextResponse.json({ error: "Catalog unavailable" }, { status: 502 });
  }
}
