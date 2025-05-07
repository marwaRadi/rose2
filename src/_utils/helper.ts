type FormatPriceProps = {
  price: number;
  format?: string;
  currency?:string

  
}
export const formatPrice = ({price ,format="en-EG",currency ="EGP"}:FormatPriceProps) => {
  const formatted = new Intl.NumberFormat(format, {
    style: "currency",
    currency: currency,
  }).format(price);

  return formatted
} 