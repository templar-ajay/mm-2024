type LeftLineProps = {
  icon?: any;
  children: any;
};
const LeftLineContainer = ({ icon, children }: LeftLineProps) => {
  return (
    <div className="flex w-full">
      <div className="relative w-[1.5px] mx-1 largeTablet:mx-6">
        {icon}
        <div className="absolute inset-0 bg-[#A428BC] blur-sm "></div>
        <div className="bg-[#A428BC] h-full relative"></div>
      </div>

      <div className="w-full">{children}</div>
    </div>
  );
};

export default LeftLineContainer;
