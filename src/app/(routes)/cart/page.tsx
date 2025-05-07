import ProtectedRoute from "@/components/protected-route/ProtectedRoute";
import { getMetadata } from "../../../_utils/getMetadata";

import { Cart, columns } from "./_components/Columns";
import { DataTable } from "./_components/DataTable";
import { getAllCategories, getUserCart } from "@/lib/api/data-service.api";
import EmptyCart from "./_components/EmptyCart";
import CartSummary from "@/components/custom/cart-summary";
import Link from "next/link";
import PrimaryBtn from "@/components/common/buttons/PrimaryBtn";
import { ArrowLeft } from "lucide-react";
import ClearBtn from "@/components/common/buttons/ClearBtn";


export const metadata = getMetadata(
  "Cart",
  '"Your cart contains all your selected gifts. Review, edit, and proceed to checkout to complete your order."'
);

async function getData(): Promise<Cart[]> {

  const [payload, allCategories] = await Promise.all([
    getUserCart(),
    getAllCategories(),
  ]);

  const products = payload?.cart.cartItems;
  // determine product list
  const userCart = products?.map((product) => {
    const categoryName = allCategories?.filter(
      (c) => c._id === product.product.category
    )[0]?.name;

    return {
      price: product.price,
      priceAfterDiscount: product.product.priceAfterDiscount,
      quantity: product.quantity,
      id: product.product._id,
      image: product.product.imgCover,
      productName: {
        title: product.product.title,
        category: categoryName,
      },
      total: product.product.priceAfterDiscount * product.quantity || 0,
    };
  });

  // Fetch data from your API here.
  return userCart || [];
}
//=====================================================================

//=====================================================================
async function page() {
  const data = await getData();
  return (
    <div className="fixed-size">
      <ProtectedRoute>
        {data.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 py-10 gap-10 xl:grid-cols-4">
            {/* cart table */}
            <div className="md:col-span-2 xl:col-span-3">
              <div className="container mx-auto ">
                <DataTable columns={columns} data={data || []} />
              </div>

              {/*cart Actions  */}

              <div className=" flex justify-evenly mt-10">
                <Link href={"/category"}>
                  <PrimaryBtn>
                    <div className="flex items-center">
                      <ArrowLeft className="inline-block mr-1" />
                      continue shopping
                    </div>
                  </PrimaryBtn>
                </Link>
                <ClearBtn />
              </div>
            </div>

            {/* cart summary */}
            <CartSummary />
          </div>
        ) : (
          <EmptyCart />
        )}
      </ProtectedRoute>
    </div>
  );
}

export default page;
