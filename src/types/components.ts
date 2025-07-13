export type ChildrenPropsType = {
  children: React.ReactNode;
};

export type PostType = {
  id: string | number;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  coverImage: {
    url: string;
  };
  author: {
    name: string;
  };
};

export type HeroPropsType = {
  link: string;
};

export type UnderDevPropsType = {
  status?: string;
};

export type ButtonPropsType = {
  type: 'button' | 'link';
  href: string;
  text: string;
  theme?: string;
};

export type ArticleDetailPropsType = {
  title: string;
  description: string;
  content: string;
  date?: string;
  author: string;
  image?: string;
  tags?: string[];
};

export type CardBlogPropsType = {
  title: string;
  description: string;
  date?: string;
  slug: string;
  author: string;
  image?: string;
};

export type CardProjectPropsType = {
  title: string;
  excerpt: string;
  date?: string;
  url: string;
  stacks: string[];
  image: string;
};

export type CardServicePropsType = {
  title: string;
  icon: React.ReactNode;
};
