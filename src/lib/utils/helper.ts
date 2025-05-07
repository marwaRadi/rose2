import { getAllCategories, getAllProducts } from "../api/data-service.api";
export async function getCategoryNameById(
  ids: string[] | string
): Promise<{ name: string; id: string }[]> {
  const categories = await getAllCategories();
  if (Array.isArray(ids)) {
    return categories
      ? categories
          ?.filter((category) => ids.includes(category._id))
          .map((category) => ({ name: category.name, id: category._id }))
      : [];
  } else {
    return categories
      ? categories
          ?.filter((category) => category._id === ids)
          .map((category) => ({ name: category.name, id: category._id }))
      : [];
  }
}

// get popular products base on avgRating

export async function getIdsBasedOnRateAvg(rateAvg: number): Promise<string[]> {
  const payload = await getAllProducts();
  const products = payload?.products;
  // Get popular categories based on rating

  const ids = products
    ?.filter((product) => product.rateAvg >= rateAvg)
    //Extract category from each product
    .map((product) => product.category)
    // Remove duplicates
    .filter((category, index, arr) => arr.indexOf(category) === index);

  return ids ? ids : [];
}
