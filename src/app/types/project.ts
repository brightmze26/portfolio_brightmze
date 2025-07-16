export type Project = {
  id: number;
  src: string;
  height: number;
  title: string;
  desc: string;
  liveUrl?: string; // optional agar bisa tidak ditampilkan
  stack: {
    Icon: React.ElementType;
    label: string;
  }[];
};