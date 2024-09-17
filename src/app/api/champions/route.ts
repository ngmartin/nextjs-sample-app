import type { NextRequest } from "next/server";
import * as dataSource from "./dataSource";

const LIMIT = 10;

export async function GET(request: NextRequest) {
  let champions = [];
  try {
    champions = await dataSource.get();
  } catch (error) {
    return Response.json({ message: "Resource not found" }, { status: 404 });
  }

  const searchParams = request.nextUrl.searchParams;
  const limit = Number(searchParams.get("limit") || LIMIT);
  const cursor = searchParams.get("cursor");
  const name = searchParams.get("name");
  const partype = searchParams.get("partype");

  if (cursor) {
    const index = champions.findIndex((champion) => champion.id === cursor);
    champions = index < 0 ? [] : champions.slice(index + 1);
  }

  champions = champions.filter(
    (champion) =>
      (!name || champion.name.toLowerCase().includes(name.toLowerCase())) &&
      (!partype || champion.partype === partype),
  );

  return Response.json({ data: champions.slice(0, limit) });
}
