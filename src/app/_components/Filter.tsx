import { Button, Flex, Form, Select } from "antd";
import { useState } from "react";

type Props = {
  disabled?: boolean;
  onChange?: (value: { partype: string; tag: string }) => void;
};

const PARTYPES = ["All", "Blood Well", "Mana", "Energy"] as const;
const TAGS = [
  "All",
  "Mage",
  "Fighter",
  "Tank",
  "Assassin",
  "Support",
  "Marksman",
] as const;

function Filter({ disabled, onChange = () => {} }: Props) {
  const [partype, setPartype] = useState<(typeof PARTYPES)[number]>("All");
  const [tag, setTag] = useState<(typeof TAGS)[number]>("All");

  const handleSearch = () => {
    onChange({
      partype: partype === "All" ? "" : partype,
      tag: tag === "All" ? "" : tag,
    });
  };

  const handleReset = () => {
    setPartype("All");
    setTag("All");
    onChange({
      partype: "",
      tag: "",
    });
  };

  return (
    <div>
      <Form.Item label="Partype" layout="vertical">
        <Select value={partype} onChange={setPartype}>
          {PARTYPES.map((partype) => (
            <Select.Option key={partype} value={partype}>
              {partype}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="Tag" layout="vertical">
        <Select value={tag} onChange={setTag}>
          {TAGS.map((tag) => (
            <Select.Option key={tag} value={tag}>
              {tag}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Flex gap={8}>
        <Button disabled={disabled} onClick={handleReset}>
          Reset filter
        </Button>
        <Button type="primary" disabled={disabled} onClick={handleSearch}>
          Search
        </Button>
      </Flex>
    </div>
  );
}

export default Filter;
