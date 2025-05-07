"use client";
//===========================================================
// imports
import { createContext, useContext, useState } from "react";
//===========================================================
//types
type ContextType = {
  count: number;
  cartCount: number;
  incrementCount: () => void;
  decrementCount: () => void;
  getCurrentCartProducts:(num:number)=>void
};
//==============================================================
//create context
const CounterContext = createContext<ContextType | null>(null);
//==============================================================
//context provider
function CounterProvider({ children }: { children: React.ReactNode }) {
  //============================================================
  // hooks
  const [count, setCount] = useState(1);
  const [cartCount ,setCartCount] = useState(0)
  //============================================================
  // functions
  function incrementCount() {
    setCount(count + 1);
  }
  function decrementCount() {
    setCount((c) => (c === 1 ? 1 : c - 1));
  }
// items in cart
  function getCurrentCartProducts(num:number) {
    setCartCount(num)
  }
  //=================================================================
  // render
  return (
    <CounterContext value={{ count, incrementCount, decrementCount ,getCurrentCartProducts ,cartCount}}>
      {children}
    </CounterContext>
  );
}

//====================================================================
// custom hook
export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
};
export default CounterProvider;
