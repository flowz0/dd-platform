export interface BlogProps {
  _id?: string;
  author?: string;
  createdAt?: string;
  readTime: string;
  img?: string | File | null | StaticImageData;
  title: string;
  summary: string;
  header: string;
  paragraph: string;
  header2: string;
  paragraph2: string;
  header3?: string;
  paragraph3?: string;
  header4?: string;
  paragraph4?: string;
  header5?: string;
  paragraph5?: string;
}