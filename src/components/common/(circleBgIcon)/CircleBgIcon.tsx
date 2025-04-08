import { ReactNode } from "react";

type CircleBgIconProp = {
  children: ReactNode;
  padding?: string;
  color?: string;
  bg?: string;
  className?: string;
  border?: string;
};

function CircleBgIcon({
  children,
  className,
  padding,
  color,
  bg,
  border,
}: CircleBgIconProp) {
  return (
    <span
      className={` ${className} 
      ${color ? color : "white"}
      ${bg ? bg : "bg-primary-dark"}
      ${padding ? padding : " p-5"} 
      ${border ? border : ""}
      w-fit
      rounded-full inline-block  text-white bg-primary-dark `}
    >
      {children}
    </span>
  );
}

export default CircleBgIcon;
