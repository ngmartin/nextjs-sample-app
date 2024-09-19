import { Col as ACol, Row as ARow, Typography } from "antd";
import ChampionCard, { type Champion } from "./ChampionCard";

type Props = {
  loading?: boolean;
  champions: Champion[];
};

const SKELETON_AMOUNT = 6;

const Row = ({ children }: React.PropsWithChildren) => (
  <ARow gutter={[16, 16]}>{children}</ARow>
);
const Col = ({ children }: React.PropsWithChildren) => (
  <ACol sm={12} md={8} lg={6}>
    {children}
  </ACol>
);

function ChampionList({ champions, loading }: Props) {
  if (loading) {
    return (
      <Row>
        {Array(SKELETON_AMOUNT)
          .fill(0)
          .map((_, index) => index)
          .map((key) => (
            <Col key={key}>
              <ChampionCard.Loading />
            </Col>
          ))}
      </Row>
    );
  }

  if (champions.length === 0) {
    return <Typography className="text-center">No champions found</Typography>;
  }

  return (
    <Row>
      {champions.map((champion) => (
        <Col key={champion.name}>
          <ChampionCard {...champion} />
        </Col>
      ))}
    </Row>
  );
}

export default ChampionList;
