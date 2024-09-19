import { Card, Tag, Flex, Skeleton } from "antd";

export type Champion = {
  image: string;
  name: string;
  title: string;
  partype: string;
  tags: string[];
};

function ChampionCard({ image, name, title, partype, tags }: Champion) {
  return (
    <Card
      hoverable
      cover={
        <div className="relative">
          <img
            alt={name}
            src={image}
            className="w-full aspect-[11/20] rounded-t-lg"
          />
          {partype ? (
            <Tag color="#cd201f" className="!absolute bottom-9 left-2">
              {partype}
            </Tag>
          ) : null}
          <Flex className="absolute bottom-2 left-2">
            {tags.map((tag) => (
              <Tag key={tag} color="#3b5999">
                {tag}
              </Tag>
            ))}
          </Flex>
        </div>
      }
      className="h-full"
    >
      <Card.Meta title={name} description={title} />
    </Card>
  );
}

ChampionCard.Loading = () => <Skeleton.Input block className="!h-[450px]" />;

export default ChampionCard;
