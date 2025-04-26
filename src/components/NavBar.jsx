import { AiOutlineClose } from "react-icons/ai";
import { IoMenuOutline } from "react-icons/io5";
import ButtonRequest from "./ButtonRequest";

const NavBar = ({ handleNav, nav }) => {
  return (
    <div className="relative flex items-center justify-between bg-white p-6">
      {/* Logo */}
      <div>
        <img src="/images/logo.svg" alt="Logo easybank" />
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
        className={`absolute top-24 left-0 w-full origin-top md:hidden ${nav ? "scale-y-100" : "scale-y-0"} flex justify-center duration-300`}
      >
        <ul className="flex w-11/12 flex-col items-center justify-between gap-4 rounded-md bg-white py-6 shadow-md">
          <li className="w-full cursor-pointer text-center text-lg">
            <a href="#" className="text-dark-blue font-medium">
              Home
            </a>
          </li>
          <li className="w-full cursor-pointer text-center text-lg">
            <a href="#" className="text-dark-blue font-medium">
              About
            </a>
          </li>
          <li className="w-full cursor-pointer text-center text-lg">
            <a href="#" className="text-dark-blue font-medium">
              Contact
            </a>
          </li>
          <li className="w-full cursor-pointer text-center text-lg">
            <a href="#" className="text-dark-blue font-medium">
              Blog
            </a>
          </li>
          <li className="w-full cursor-pointer text-center text-lg">
            <a href="#" className="text-dark-blue font-medium">
              Careers
            </a>
          </li>
        </ul>
      </div>
      {/* end Mobile menu */}

      {/* desktop menu */}
      <ul className="hidden justify-evenly gap-4 md:flex lg:gap-8">
        <li>
          <a href="#" className="text-grayish-blue font-medium">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-grayish-blue font-medium">
            About
          </a>
        </li>
        <li>
          <a href="#" className="text-grayish-blue font-medium">
            Contact
          </a>
        </li>
        <li>
          <a href="#" className="text-grayish-blue font-medium">
            Blog
          </a>
        </li>
        <li>
          <a href="#" className="text-grayish-blue font-medium">
            Careers
          </a>
        </li>
      </ul>
      {/* end desktop menu */}

      {/* request invite */}
      <div className="hidden md:block">
        <ButtonRequest />
      </div>
      {/* end request invite */}
    </div>
  );
};

export default NavBar;
