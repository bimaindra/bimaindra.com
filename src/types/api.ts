export type Timeline = {
  id: string | number;
  title: string;
  description: string;
  location: string;
  date: string;
  endDate: string;
  type: string;
};

export type Author = {
  name: string;
};

export type CoverImage = {
  url: string;
};

export type Seo = {
  description: string;
};

export type Content = {
  html: string;
};

export type Category = {
  title: string;
};

export type Image = {
  url: string;
};

export type Post = {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  author: Author;
  content: Content;
  coverImage: CoverImage;
  seo: Seo;
  tags: string[];
};

export type PostSummary = {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  coverImage: CoverImage;
  author: Author;
};

export type PostSlug = {
  slug: string;
};

export type Page = {
  content: Content;
};

export type Portfolio = {
  id: string;
  description: Content;
  slug: string;
  title: string;
  url: string;
  date: string;
  category: Category;
  excerpt: string;
  techStack: string[];
  image: Image;
};

export type GetAllPostsResponse = {
  posts: PostSummary[];
};

export type GetAllSlugsResponse = {
  posts: PostSlug[];
};

export type GetPostResponse = {
  post: Post;
};

export type GetPageResponse = {
  page: Page;
};

export type GetTimelinesResponse = {
  timelines: Timeline[];
};

export type GetPortfoliosResponse = {
  portfolios: Portfolio[];
};
