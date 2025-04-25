const Hero = () => {
  return (
    <div>
      {/* hero image and background */}
      <div>
        <div className="relative -z-10">
          <img
            src="./images/bg-intro-mobile.svg"
            alt="Background Image"
            className="w-[650px]"
          />
          <img
            src="./images/image-mockups.png"
            alt="Image Mockups"
            className="absolute -top-20 w-[650px] px-2"
          />
        </div>
      </div>
      {/* ./ hero image and background */}

      {/* hero text */}
      <div className="-mt-8 flex flex-col items-center gap-8 px-4 pb-20 text-center">
        <div className="text-center">
          <h1 className="text-dark-blue mb-4 text-4xl font-medium">
            Next generation <br className="md:hidden" /> digital banking
          </h1>
          <p className="text-grayish-blue font-light">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
        </div>

        <button
          type="button"
          className="from-lime-green to-bright-cyan cursor-pointer rounded-full bg-linear-to-r/hsl px-7 py-2.5 font-bold text-white"
        >
          Request Invite
        </button>
      </div>
      {/* ./ hero text */}
    </div>
  );
};

export default Hero;
