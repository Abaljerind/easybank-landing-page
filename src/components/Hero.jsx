import ButtonRequest from "./ButtonRequest";

const Hero = () => {
  return (
    <section className="pb-24">
      {/* hero img */}
      <div>
        <figure className="relative h-[325px] min-[375px]:min-h-[385px]">
          <picture className="absolute right-0 left-0 -z-10">
            <source
              media="(min-width:768px)"
              srcset="./images/bg-intro-desktop.svg"
            />
            <img
              src="./images/bg-intro-mobile.svg"
              alt="Decorative background for Hero section"
              className="w-full min-[425px]:max-w-[426px]"
            ></img>
          </picture>
          <img
            src="./images/image-mockups.png"
            alt="Phone screen mockups of Easybank app"
            className="absolute -top-20 drop-shadow-xl min-[321px]:scale-95 min-[425px]:max-w-[426px]"
          />
        </figure>
      </div>
      {/* ./ hero img */}

      {/* hero text */}
      <div className="space-y-4 px-4 text-center max-[700px]:mt-0 min-[400px]:mt-12">
        <div className="space-y-4">
          <h1 className="text-dark-blue text-4xl leading-11 font-medium">
            Next generation <br /> digital banking
          </h1>
          <p className="text-grayish-blue">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
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
