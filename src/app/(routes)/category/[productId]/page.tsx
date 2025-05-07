import { getAllProducts, getProductById } from "@/lib/api/data-service.api";
import ProductCarousel from "./_components/ProductCarousel";
import { Suspense } from "react";
import LoadingSpinner from "@/components/common/spinner/LoadingSpinner";
import ProductContent from "./_components/ProductContent";
import RelatedProducts from "./_components/RelatedProducts";

export async function generateStaticParams() {
  const payload = await getAllProducts();
  return (
    payload?.products?.map((product) => ({ productId: product._id })) ?? []
  );
}

async function Page({ params }: { params: Promise<{ productId: string }> }) {
  const { productId } = await params;
  const product = await getProductById(productId);
  return (
    <div className="fixed-size">
      <div className=" grid  md:grid-cols-2 md:gap-10 gap-5 lg:gap-0  ">
        <Suspense fallback={<LoadingSpinner />}>
          <ProductCarousel
            product={{ images: product.images, name: product.title }}
          />
        </Suspense>
        <ProductContent product={product} />
      </div>
      {/* ========================================================= */}
      {/* Related Products */}
      <RelatedProducts productInfo={{category :product.category , id:product.id}} />
    </div>
  );
}

export default Page;
