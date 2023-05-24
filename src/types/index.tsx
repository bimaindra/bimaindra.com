export type ChildrenProps = {
  children: React.ReactNode;
};

export type HeroProps = {
  link: string;
  gtm?: string;
};

export type TimelineProps = {
  timeline: any[];
};

export type UnderDevProps = {
  status?: string;
};

export type ButtonProps = {
  type: string;
  href: string;
  text: string;
  gtm?: string;
  theme?: string;
};

export type ArticleDetailProps = {
  title: string;
  description: string;
  content: string;
  date: string;
  author: string;
  image?: string;
  tags?: string[] | any;
};

export type BlogCardProps = {
  title: string;
  description: string;
  date: string;
  slug: string;
  author: string;
  image?: string;
};
