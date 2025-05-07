function FormHeader({text}:{text:string}) {
  return (
    <h5 className="capitalize text-[clamp(1.3rem,2vw,2rem)] font-normal">
     {text}
    </h5>
  );
}

export default FormHeader
