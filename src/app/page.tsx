"use client";
import { useState, useEffect } from "react";
import { Layout, Button, Flex, Divider } from "antd";
import { useChampions } from "@/services";
import ChampionList from "./_components/ChampionList";
import QuickSearch from "./_components/QuickSearch";
import Filter from "./_components/Filter";

const REFRESH_INTERVAL = 1000 * 60; // 60s

export default function Home() {
  const [params, setParams] = useState({
    name: "",
    partype: "",
    tag: "",
  });

  const {
    items,
    isLoadingInitialData,
    isLoadingMore,
    isReachingEnd,
    loadMore,
    mutate,
  } = useChampions({
    name: params.name,
    partype: params.partype,
    tag: params.tag,
  });
  const champions = items.map((item) => ({
    name: item.name,
    title: item.title,
    image: item.image.full,
    partype: item.partype,
    tags: item.tags,
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      mutate();
    }, REFRESH_INTERVAL);

    return () => clearInterval(interval);
  }, [mutate]);

  const handleFilter = ({ partype, tag }: { partype: string; tag: string }) => {
    setParams((prev) => ({ ...prev, partype, tag }));
  };

  const handleQuickSearch = (name: string) => {
    setParams((prev) => ({ ...prev, name }));
  };

  return (
    <Layout>
      <Layout.Sider width="25%" className="!bg-gray-100">
        <div className="pt-4 pl-4 sticky top-0">
          <QuickSearch onChange={handleQuickSearch} />
          <Divider />
          <Filter disabled={isLoadingInitialData} onChange={handleFilter} />
        </div>
      </Layout.Sider>
      <Layout.Content className="p-4">
        <ChampionList loading={isLoadingInitialData} champions={champions} />
        {!isReachingEnd && !isLoadingInitialData ? (
          <Flex justify="center" className="pt-4">
            <Button type="primary" loading={isLoadingMore} onClick={loadMore}>
              View More
            </Button>
          </Flex>
        ) : null}
      </Layout.Content>
    </Layout>
  );
}
