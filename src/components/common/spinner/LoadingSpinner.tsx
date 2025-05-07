function LoadingSpinner() {

  return (
    <span className="w-[50] h-[50]  rounded-[50%] inline-block border-t-[4px] border-r-[4px] border-r-[transparent] border-t-heading animate-spin after:absolute after:left-0 after:top-0 after:w-[50px] after:h-[50px]  after:rounded-full after:border-l-[4px] after:border-b-[4px] after:border-b-transparent  after:border-primary-dark after:animate-rotation "></span>
  );
}

export default LoadingSpinner


//  width: 48px;
//   height: 48px;
//   border-radius: 50%;
//   display: inline-block;
//   border-top: 4px solid #FFF;
//   border-right: 4px solid transparent;
//   box-sizing: border-box;
//   animation: rotation 1s linear infinite;