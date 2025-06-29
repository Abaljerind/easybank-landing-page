import ButtonRequest from "./ButtonRequest";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse pb-20 md:flex-row md:pb-4 lg:pb-8 xl:pb-0 2xl:pb-12">
      {/* hero text */}
      <div className="flex flex-col items-center justify-center gap-8 px-4 text-center md:mt-10 md:w-8/12 md:items-start md:justify-start md:gap-6 md:pr-0 md:text-start lg:pl-12 xl:pl-36 2xl:-mt-64 2xl:w-1/2 2xl:justify-center 2xl:pl-36">
        <h1 className="text-dark-blue -mt-6 text-4xl md:mt-0 md:text-start xl:text-6xl">
          Next generation <br className="hidden lg:block" /> digital banking
        </h1>
        <p className="text-grayish-blue md:max-w-[400px] md:text-start xl:w-md xl:max-w-xl xl:text-lg">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing and much
          more.
        </p>
        <ButtonRequest />
      </div>
      {/* ./ hero text */}

      {/* hero image */}
      <figure className="relative overflow-hidden md:h-dvh md:w-full lg:h-[80dvh] lg:max-w-2xl xl:h-dvh 2xl:w-1/2 2xl:max-w-4xl">
        <img
          src="./images/image-mockups.png"
          alt="Phone screen mockups of Easybank app"
          className="absolute -top-24 md:-top-16 md:-right-[74px] md:z-10 lg:-top-32 lg:-right-24 xl:-right-[124px] xl:scale-95 2xl:-top-52 2xl:-right-36 2xl:scale-90"
        />

        <img
          src="./images/bg-intro-desktop.svg"
          alt="Decorative background for desktop"
          className="hidden md:absolute md:-top-16 md:-right-16 md:-z-10 md:block md:w-full md:scale-125 lg:-top-20 xl:-top-14 xl:-right-32 xl:scale-150 2xl:-top-24 2xl:-right-36"
        />
        <img
          src="./images/bg-intro-mobile.svg"
          alt="Decorative background for mobile"
          className="-z-10 w-full md:hidden"
        />
      </figure>
      {/* ./ hero image */}
    </section>
  );
};

export default Hero;
