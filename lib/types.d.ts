export type Post = {
  title: string;
  slug: string;
  date: string;
  tags: string[];
  description: string;
  body: string;
  lastModified?: number;
  views?: number;
  href?: string;
  thumbnail?: string;
};

export type Project = {
  title: string;
  description: string;
  href: string;
  role: string;
  years: string[];
  stars?: number;
  gitUrl?: string;
  tech?: string[];
  showYears?: boolean;
};
