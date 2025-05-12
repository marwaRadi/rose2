"use client";

import DeleteBtn from "@/components/common/buttons/DeleteBtn";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import Quantity from "./Quantity";
import { formatPrice } from "@/_utils/helper";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Cart = {
  id: string;
  image: string;
  price: number;
  priceAfterDiscount: number;
  productName: {
    title: string;
    category: string;
  };
  quantity: number;
  total: number;
};

export const columns: ColumnDef<Cart>[] = [
  {
    accessorKey: "image",
    cell: ({ row }) => {
      const productImg = row.getValue("image") as string;
      return (
        <Image
          sizes="100vw"
          src={productImg}
          alt="product image"
          width={50}
          height={50}
          className="w-[50px] h-[50px] rounded-full"
        />
      );
    },
    header: "Image",
  },
  {
    cell: ({ row }) => {
      const name = row.getValue("productName") as {
        title: string;
        category: string;
      };
      return (
        <div>
          <h6 className="">{name.title}</h6>
          <p>{name.category}</p>
        </div>
      );
    },
    accessorKey: "productName",
    header: "Product Name",
  },
  {
    cell: ({ row }) => {
      const price = row.getValue("price") as number;

      return <span>{formatPrice({ price })}</span>;
    },

    accessorKey: "price",
    header: "Price",
  },
  {
    cell: ({ row }) => {
      const priceAfterDiscount = row.getValue("priceAfterDiscount") as number;
      return <span>{formatPrice({ price: priceAfterDiscount })}</span>;
    },
    accessorKey: "priceAfterDiscount",
    header: "Price After Discount",
  },
  {
    cell: ({ row }) => {
      const quantity = row.getValue("quantity") as number;
      const id = row.original.id;
      return <Quantity id={id} quantity={quantity} key={id} />;
    },

    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "total",
    header: "Total",
  },

  {
    accessorKey: "delete",
    header: "Delete",
    cell: ({ row }) => {
      const item = row.original;
      return <DeleteBtn id={item.id} key={item.id} />;
      
    },
  },
];
