export type ServiceSection = {
  title: string;
  paragraphs?: string[];
  list?: string[];
  imageIndex?: number;
};

export type Service = {
  image?: string;
  alt?: string;
  tag: string;
  title: string;
  intro?: string;
  images?: string[];
  description?: string;
  sections?: ServiceSection[];
};
