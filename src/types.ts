export type URL = {
  regular: string;
  small: string;
};

export type User = {
  name: string;
};

export type Image = {
  id: string;
  alt_description: string;
  created_at: string;
  likes: number;
  user: User;
  urls: URL;
};

export type Response = {
    total: number;
    total_pages: number;
    results: Array<Image>;
};