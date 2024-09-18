export type Champion = {
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  partype: string;
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
  image: {
    full: string;
  };
  tags: string[];
};
