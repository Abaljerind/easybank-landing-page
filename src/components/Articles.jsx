const Articles = () => {
  const articles = [
    {
      image: "/images/image-currency.jpg",
      author: "By Claire Robinson",
      title: "Receive money in any currency with no fees",
      description:
        "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
    },
    {
      image: "/images/image-restaurant.jpg",
      author: "By Wilson Hutton",
      title: "Treat yourself without worrying about money",
      description:
        "Our simple budgeting article allows you to separate out your spending and set realistic limits each month. That means you …",
    },
    {
      image: "/images/image-plane.jpg",
      author: "By Wilson Hutton",
      title: "Take your Easybank card wherever you go",
      description:
        "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
    },
    {
      image: "/images/image-confetti.jpg",
      author: "By Claire Robinson",
      title: "Our invite-only Beta accounts are now live!",
      description:
        "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site …",
    },
  ];

  return (
    <div className="bg-very-light-gray px-4 py-16 lg:px-12 xl:px-36">
      {/* header */}
      <div className="mb-12 text-center md:text-start">
        <h2 className="text-dark-blue mb-4 text-3xl font-medium xl:text-4xl">
          Latest Articles
        </h2>
      </div>
      {/* ./ header */}

      {/* article */}
      <div className="grid md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4">
        {articles.map((article, index) => {
          return (
            <div
              key={index + 1}
              className="group mb-8 flex flex-col gap-2 overflow-hidden rounded-md bg-white shadow-xs duration-300 last:mb-0 hover:drop-shadow-xl md:mb-0"
            >
              <img
                src={article.image}
                alt={article.title}
                className="h-[220px] w-full object-cover"
              />
              <div className="p-5">
                <p className="text-grayish-blue mb-2 text-xs xl:text-sm">
                  {article.author}
                </p>
                <h4 className="text-dark-blue group-hover:text-lime-green mb-2 cursor-pointer text-lg leading-6 font-medium duration-300">
                  {article.title}
                </h4>
                <p className="text-grayish-blue text-sm">
                  {article.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {/* ./ article */}
    </div>
  );
};

export default Articles;
