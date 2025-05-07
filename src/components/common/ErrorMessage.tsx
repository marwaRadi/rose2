function ErrorMessage({children}:{children:React.ReactNode}) {
  return (
    <p className="pl-2 text-red-500 font-semibold ">
      {children}
    </p>
  );
}

export default ErrorMessage
