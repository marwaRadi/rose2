import { updataCartQuantity } from "@/lib/actions/cart.action";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

function Quantity({ id, quantity }: { id: string; quantity: number }) {
  const [count, setCount] = useState(quantity);
  //=============================================================================
  const styling = `h-[28px] w-[28px] text-primary-dark bg-primary-light-80 rounded-full flex items-center justify-center`;
  //===============================================================================
  async function handleAddQuantity() {
    setCount((c) => c + 1);

    await updataCartQuantity(id, count + 1);
  }
  async function handleDeleteQuantity() {
    setCount((c) => (c === 1 ? 1 : c - 1));

    await updataCartQuantity(id, count - 1);
  }
  //===============================================================================
  return (
    <>
      <div className="flex gap-2 items-center">
        <button
          disabled={count === 1}
          className={`${styling} disabled:opacity-50 disabled:cursor-not-allowed`}
          onClick={handleDeleteQuantity}
        >
          <Minus size={14} />
        </button>
        <span>{count}</span>
        <button className={styling} onClick={handleAddQuantity}>
          <Plus size={14} />
        </button>
      </div>
    </>
  );
}

export default Quantity;
