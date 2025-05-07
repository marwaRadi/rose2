"use client";

import { useCounter } from "@/context/providers/CounterProvider";
import { Minus, Plus } from "lucide-react";
const styling = `h-[28px] w-[28px] text-primary-dark bg-primary-light-80 rounded-full flex items-center justify-center`;
function Counter() {
  //=============================================================================
  // hooks
  const { count, incrementCount, decrementCount } = useCounter();
  //=============================================================================
  // render
  return (
    <div className="flex gap-2 items-center">
      <button
        disabled={count === 1}
        className={`${styling} disabled:opacity-50 disabled:cursor-not-allowed`}
        onClick={() => decrementCount()}
      >
        <Minus size={14} />
      </button>
      <span>{count}</span>
      <button className={styling} onClick={() => incrementCount()}>
        <Plus size={14} />
      </button>
    </div>
  );
}

export default Counter;
