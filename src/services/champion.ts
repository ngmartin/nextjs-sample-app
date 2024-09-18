import type { Champion } from "@/types";
import useSWRInfinite from "swr/infinite";

type GetChampionsRequest = {
  name?: string;
  partype?: string;
  tag?: string;
};
type GetChampionsResponse = {
  data: Champion[];
  nextCursor?: string;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const getKey = (
  previousPageData: GetChampionsResponse | null,
  params?: GetChampionsRequest,
) => {
  const searchParams = new URLSearchParams(params);

  if (previousPageData) {
    if (previousPageData.nextCursor) {
      searchParams.append("cursor", previousPageData.nextCursor);
    } else {
      return null;
    }
  }

  return `/api/champions?${searchParams.toString()}`;
};

export function useChampions(params?: GetChampionsRequest) {
  const { data, size, setSize, isValidating } =
    useSWRInfinite<GetChampionsResponse>(
      (_, previousPageData) => getKey(previousPageData, params),
      fetcher,
    );
  const items = data ? data.flatMap((page) => page.data) : [];
  const loadMore = () => setSize(size + 1);

  return { items, isLoading: isValidating, loadMore };
}
