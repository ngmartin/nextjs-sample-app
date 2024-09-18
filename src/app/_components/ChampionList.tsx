import { Row, Col } from "antd";
import ChampionCard, { type Champion } from "./ChampionCard";

type Props = {
  champions: Champion[];
};

function ChampionList({ champions }: Props) {
  return (
    <Row gutter={[16, 16]}>
      {champions.map((champion) => (
        <Col key={champion.name} sm={12} md={8} lg={6}>
          <ChampionCard {...champion} />
        </Col>
      ))}
    </Row>
  );
}

export default ChampionList;
