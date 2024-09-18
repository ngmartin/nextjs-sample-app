"use client";
import { Layout, Button, Flex } from "antd";
import { useChampions } from "@/services";
import ChampionList from "./_components/ChampionList";

export default function Home() {
  const { items, isLoading, loadMore } = useChampions();
  const champions = items.map((item) => ({
    name: item.name,
    title: item.title,
    image: item.image.full,
    partype: item.partype,
    tags: item.tags,
  }));

  return (
    <Layout>
      <Layout.Sider width="25%">aa</Layout.Sider>
      <Layout.Content className="p-4">
        <ChampionList champions={champions} />
        <Flex justify="center" className="pt-4">
          <Button loading={isLoading} onClick={loadMore}>
            View More
          </Button>
        </Flex>
      </Layout.Content>
    </Layout>
  );
}
