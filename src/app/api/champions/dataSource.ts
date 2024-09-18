import type { Champion } from "@/types";

const CHAMPIONS_API =
  "https://ddragon.leagueoflegends.com/cdn/13.17.1/data/en_US/champion.json";

type ChampionsResponse = {
  data: Record<string, Champion>;
};

function generateImageUrl(champion: Champion) {
  return `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.name}_0.jpg`;
}

function transformChampions(champions: ChampionsResponse): Champion[] {
  return Object.values(champions.data).map((champion) => ({
    ...champion,
    image: { full: generateImageUrl(champion) },
  }));
}

export async function get() {
  return fetch(CHAMPIONS_API)
    .then((res) => res.json())
    .then(transformChampions);
}
