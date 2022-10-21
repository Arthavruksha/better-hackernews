export type Story = {
  id: number;
  title: string;
  by: string;
  time: number;
  score: number;
  descendants: number;
  url?: string;
  text?: string;
  type?: string;
  kids?: number[];
};

