interface PrimaryBtnProps {
  children: React.ReactNode
  style?: string,
  paddingVertical?: string,
  paddingHorizontal?: string,
  rounded?: string
  onclick?: () => void,
  disabled?:boolean
}

function PrimaryBtn({ children, style = "", paddingVertical, paddingHorizontal ,rounded ,onclick ,disabled}: PrimaryBtnProps) {
  return (
    <button
      disabled={disabled}
      onClick={onclick}
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
