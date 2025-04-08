interface Category extends DatabaseProperties {
  name: string;
  slug: string;
  image: string;
  updatedAt: string;
  productsCount: number;
}