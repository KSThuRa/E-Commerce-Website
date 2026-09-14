export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  badge?: string;
  rating: number;
  stock: number;
  description: string;
};

export type CartItem = Product & { quantity: number };