declare interface Product extends DatabaseProperties {
  title: string;
  slug: string;
  description: string;
  imgCover: string;
  images: string[];
  price: number;
  priceAfterDiscount: number;
  quantity: number;
  category: string;
  occasion: string;
  updatedAt: string;
  __v: number;
  discount: number;
  sold: number;
  rateAvg: number;
  rateCount: number;
  id: number;
}
