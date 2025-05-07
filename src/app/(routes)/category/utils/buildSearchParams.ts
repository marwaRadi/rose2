type FilterProps = {
  categories: { categoryName: string; id: string }[];
  price: number[];
  rating: number[];
};

export function buildSearchParams(filters:FilterProps) {
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((v) => {
        if (typeof v === "object" && "id" in v) {
          params.append(key, v.id);
        } else {
          params.append(key, v.toString());
        }
      });
    }
  
  });

  return params.toString();
}
