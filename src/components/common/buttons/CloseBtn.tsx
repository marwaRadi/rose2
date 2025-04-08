interface closeBtnProp {
  onclick?: () => void
  style?:string
}

function CloseBtn({ onclick ,style }:closeBtnProp) {
  return (
    <button
      className={`${style}  absolute right-1.5 top-1.5 cursor-pointer text-heading `}
      onClick={onclick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-7 border border-black/20 p-1 rounded-full"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
}

export default CloseBtn
