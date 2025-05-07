declare interface CartBase<T> {
  numOfCartItems: number;
  cart: T;
}

declare interface Cart<T> extends DatabaseProperties {
  user: string;
  discount: number;
  totalPrice: number;
  totalPriceAfterDiscount: number;
  updatedAt: string;
  __v: 0;
  cartItems: [T];
}

declare interface CartItems<T> {
  product: T;
  price: number;
  quantity: number;
  _id: string;
}
