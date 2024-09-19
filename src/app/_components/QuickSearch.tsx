import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import debounce from "lodash.debounce";

type Props = {
  onChange?: (value: string) => void;
};

function QuickSearch({ onChange = () => {} }: Props) {
  return (
    <Input
      addonBefore={<SearchOutlined />}
      placeholder="Quick search"
      allowClear
      onChange={debounce((e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
      }, 300)}
    />
  );
}

export default QuickSearch;
