import { AiOutlineClose } from "react-icons/ai";
import { IoMenuOutline } from "react-icons/io5";
import ButtonRequest from "./ButtonRequest";

const NavBar = ({ handleNav, nav }) => {
  const navItems = ["Home", "About", "Contact", "Blog", "Careers"];

  return (
    <nav className="relative z-30 flex items-center justify-between bg-white px-4 py-6 md:p-3 lg:px-12 xl:px-[150px] xl:py-4 2xl:pl-[170px]">
      {/* Logo */}
      <div>
        <img
          src="/images/logo.svg"
          alt="Logo easybank"
          className="xl:scale-125 xl:pl-4"
        />
      </div>
      {/* end Logo */}

      {/* menu icon */}
      <div className="cursor-pointer text-2xl md:hidden">
        {nav ? (
          <AiOutlineClose onClick={handleNav} />
        ) : (
          <IoMenuOutline onClick={handleNav} />
        )}
      </div>
      {/* end menu icon*/}

      {/* Mobile menu */}
      <div
        className={`absolute top-24 left-0 z-20 w-full origin-top md:hidden ${nav ? "scale-y-100" : "scale-y-0"} flex justify-center duration-300`}
      >
        <ul className="flex w-11/12 flex-col items-center justify-between gap-4 rounded-md bg-white py-6 shadow-md">
          {navItems.map((navItem, index) => {
            return (
              <li
                key={index + 1}
                className="w-full cursor-pointer text-center text-lg"
              >
                <a href="#" className="text-dark-blue font-medium">
                  {navItem}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      {/* end Mobile menu */}

      {/* desktop menu */}
      <ul className="hidden justify-evenly gap-4 md:flex lg:gap-8">
        {navItems.map((navItem, index) => {
          return (
            <li key={index + 1}>
              <a href="#" className="gradient-border nav-item">
                {navItem}
              </a>
            </li>
          );
        })}
      </ul>
      {/* end desktop menu */}

      {/* request invite */}
      <div className="hidden md:block">
        <ButtonRequest />
      </div>
      {/* end request invite */}
    </nav>
  );
};

export default NavBar;
