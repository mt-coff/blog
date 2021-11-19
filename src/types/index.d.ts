type Post = {
  id: string;
  title: string;
  tags?: string[];
  category?: Category;
  publishedAt: string;
};

type Category = {
  id: string;
  name: string;
};
