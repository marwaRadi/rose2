interface PrimaryBtnProps {
  children: React.ReactNode
  style?: string,
  paddingVertical?: string,
  paddingHorizontal?: string,
  rounded?: string
}

function PrimaryBtn({ children, style = "", paddingVertical, paddingHorizontal ,rounded}: PrimaryBtnProps) {
  return (
    <button
      className={`${style}
  ${rounded ? rounded : "rounded-[10px]"}
   ${paddingVertical ? paddingVertical : "py-2"} ${
        paddingHorizontal ? paddingHorizontal : "px-4"
      } w-fit inline-block capitalize bg-primary-dark text-sm text-white hover:bg-primary-light-10 transition-colors cursor-pointer`}
    >
      {children}
    </button>
  );
}

export default PrimaryBtn
