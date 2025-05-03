import ButtonRequest from "./ButtonRequest";

const images = [
  {
    img: "/images/icon-facebook.svg",
    alt: "facebook icon",
    link: "https://www.facebook.com",
  },
  {
    img: "/images/icon-youtube.svg",
    alt: "youtube icon",
    link: "https://www.youtube.com",
  },
  {
    img: "/images/icon-twitter.svg",
    alt: "twitter icon",
    link: "https://www.twitter.com",
  },
  {
    img: "/images/icon-pinterest.svg",
    alt: "pinterest icon",
    link: "https://www.pinterest.com",
  },
  {
    img: "/images/icon-instagram.svg",
    alt: "instagram icon",
    link: "https://www.instagram.com",
  },
];

const navItems = [
  "About Us",
  "Contact",
  "Blog",
  "Careers",
  "Support",
  "Privary Policy",
];

const Footer = () => {
  return (
    <footer className="bg-dark-blue grid justify-center py-10 lg:grid-cols-2 lg:items-center lg:px-12 xl:items-start xl:px-36">
      <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-6 xl:gap-20">
        {/* logo + social media */}
        <div className="grid gap-10 lg:gap-12">
          <div className="mx-auto">
            <img
              src="/images/logo-white.svg"
              alt="easybank logo"
              className="scale-125"
            />
          </div>

          <div className="flex justify-evenly gap-4">
            {images.map((image, index) => {
              return (
                <a
                  href={image.link}
                  key={index + 1}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={image.img} alt={image.alt} className="size-7" />
                </a>
              );
            })}
          </div>
        </div>
        {/* ./ logo + social media */}

        {/* nav items */}
        <nav className="mt-8 lg:mt-0" aria-label="Footer Navigation">
          <ul className="text-very-light-gray grid gap-4 text-center md:grid-cols-2 lg:text-start">
            {navItems.map((item, index) => {
              return (
                <li key={index + 1}>
                  <a
                    href="#"
                    className="hover:text-lime-green transition-colors duration-300 ease-in"
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        {/* ./ nav items */}
      </div>

      {/* button + copy rights */}
      <div className="mt-8 text-center lg:mt-0 lg:text-end xl:place-self-end">
        <ButtonRequest />

        <p className="text-grayish-blue mt-6 font-medium">
          &copy; Easybank. All Rights Reserved
        </p>
      </div>
      {/* ./ button + copy rights */}
    </footer>
  );
};

export default Footer;
