type Post = {
  id: string;
  title: string;
  tags?: Tag[];
  category: Category;
  publishedAt: string;
};

type Category = {
  id: string;
  name: string;
};

type Tag = {
  id: string;
  name: string;
};
