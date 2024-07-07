const Footer = () => {
  return (
    <div className="bg-blue-800 py-10">
      <div className="container mx-auto flex items-center justify-between">
        <span className="text-3xl font-bold tracking-tight text-[#eaeaea] hover:underline">
          MernHotels.com
        </span>
        <span className="flex gap-4 font-bold tracking-tight text-[#eaeaea]">
          <p className="cursor-pointer font-thin hover:underline">
            Privacy Policy
          </p>
          <p className="cursor-pointer font-thin hover:underline">
            Term of Service
          </p>
        </span>
      </div>
    </div>
  );
};
export default Footer;
