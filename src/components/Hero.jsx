import ButtonRequest from "./ButtonRequest";

const Hero = () => {
  return (
    <section className="pb-24 md:flex md:flex-row-reverse md:overflow-hidden lg:pl-8">
      {/* hero img */}
      <div className="md:w-full md:pb-60">
        <figure className="relative h-[325px] min-[375px]:min-h-[385px] md:min-h-0">
          {/* background */}
          <picture className="absolute inset-0 -z-10">
            <source
              media="(min-width:768px)"
              srcset="./images/bg-intro-desktop.svg"
            />
            <img
              src="./images/bg-intro-mobile.svg"
              alt="Decorative background for Hero section"
              className="w-full min-[425px]:max-w-[426px] md:absolute md:top-0 md:left-10 md:scale-200 lg:left-52"
            ></img>
          </picture>
          {/* ./ background */}

          {/* mockups */}
          <img
            src="./images/image-mockups.png"
            alt="Phone screen mockups of Easybank app"
            className="absolute -top-20 drop-shadow-xl min-[321px]:scale-95 min-[425px]:max-w-[426px] md:-top-12 md:-left-4 md:scale-100 lg:left-[120px]"
          />
          {/* ./ mockups */}
        </figure>
      </div>
      {/* ./ hero img */}

      {/* hero text */}
      <div className="space-y-4 px-4 text-center max-[700px]:mt-0 min-[400px]:mt-12 md:text-start lg:space-y-6">
        <div className="space-y-4 lg:space-y-6">
          <h1 className="text-dark-blue text-4xl leading-11 font-medium">
            Next generation <br /> digital banking
          </h1>
          <p className="text-grayish-blue md:text-balance lg:text-nowrap">
            Take your financial life online. Your Easybank account{" "}
            <br className="hidden lg:block" /> will be a one-stop-shop for
            spending, saving,
            <br className="hidden lg:block" /> budgeting, investing, and much
            more.
          </p>
        </div>
        <ButtonRequest />
      </div>
      {/* ./ hero text */}
    </section>
  );
};

export default Hero;
