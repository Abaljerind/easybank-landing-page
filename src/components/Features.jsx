const Features = () => {
  const features = [
    {
      image: "/images/icon-online.svg",
      title: "Online Banking",
      text: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    },
    {
      image: "/images/icon-budgeting.svg",
      title: "Simple Budgeting",
      text: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
    },
    {
      image: "/images/icon-onboarding.svg",
      title: "Fast Onboarding",
      text: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
    },
    {
      image: "/images/icon-api.svg",
      title: "Open API",
      text: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    },
  ];

  return (
    <div className="bg-light-grayish-blue px-4 py-16">
      {/* header */}
      <div className="mb-12 text-center">
        <h2 className="text-dark-blue mb-4 text-3xl font-medium">
          Why choose <br className="md:hidden" /> Easybank?
        </h2>
        <p className="text-grayish-blue">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      {/* ./ header */}

      {/* features */}
      <div className="grid">
        {features.map((feature, index) => {
          return (
            <div
              key={index + 1}
              className="mb-8 flex flex-col items-center gap-4 last:mb-0"
            >
              <img src={feature.image} alt={feature.text} />
              <h4 className="text-dark-blue text-xl font-medium">
                {feature.title}
              </h4>
              <p className="text-grayish-blue text-center">{feature.text}</p>
            </div>
          );
        })}
      </div>
      {/* ./ features */}
    </div>
  );
};

export default Features;
