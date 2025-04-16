type SliderBackgroundProps = {
  url: string;
  children: React.ReactNode;
};

function SliderBackground({ url, children }: SliderBackgroundProps) {
  return (
    <div
      style={{ backgroundImage: `url(/${url})` }}
      className={` bg-cover bg-center bg-no-repeat main-rounded h-full `}
    >
      {children}
    </div>
  );
}

export default SliderBackground;
