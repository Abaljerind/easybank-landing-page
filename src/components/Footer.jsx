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
    <div className="bg-dark-blue grid justify-center py-10">
      <div>
        {/* logo + social media */}
        <div className="grid gap-10">
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
                <a href={image.link} target="_blank">
                  <img
                    key={index + 1}
                    src={image.img}
                    alt={image.alt}
                    className="size-7"
                  />
                </a>
              );
            })}
          </div>
        </div>
        {/* ./ logo + social media */}

        {/* nav items */}
        <div className="mt-8">
          <ul className="text-very-light-gray grid gap-4 text-center md:grid-cols-2">
            {navItems.map((item, index) => {
              return (
                <li key={index + 1}>
                  <a href="#">{item}</a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* ./ nav items */}
      </div>

      {/* button + copy rights */}
      <div className="mt-8 text-center">
        <ButtonRequest />

        <p className="text-grayish-blue mt-6 font-medium">
          &copy; Easybank. All Rights Reserved
        </p>
      </div>
      {/* ./ button + copy rights */}
    </div>
  );
};

export default Footer;
