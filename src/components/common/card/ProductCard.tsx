import Image from "next/image"

type ProductCardProps = {
  product: Product
  
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="relative ">
      <div className="relative ">
        <Image fill  src={product.imgCover} alt={product.title} className=" object-cover aspect-square "/>
      </div>
    </div>
  )
}

export default ProductCard
