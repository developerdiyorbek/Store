import { Link } from "react-router-dom";
import Logo from "../images/Logo.svg";

const Footer = () => {
  return (
    <footer className="bg-[#F5F5F5] py-16">
      <div className="container mx-auto flex justify-between">
        <ul className="flex gap-[50px]">
          <li>
            <Link
              to="/"
              className="hover:scale-110 block duration-150 ease-in-out"
            >
              <img src={Logo} alt="logo" className="w-[80px] h-[46px]" />
            </Link>
          </li>
          <li>
            <Link
              className="block mb-2 hover:text-[#ED165F] duration-100 font-medium"
              href="#"
            >
              About Us
            </Link>
            <Link
              className="block mb-2 hover:text-[#ED165F] duration-100 font-medium"
              href="#"
            >
              Contact
            </Link>
            <Link
              className="block hover:text-[#ED165F] duration-100 font-medium"
              href="#"
            >
              Terms & Conditions
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center gap-2 group">
              <span className="block text-[22px] pt-1 text-[#ED165F] group-hover:scale-125 duration-100 ease-in-out">
                <ion-icon name="logo-facebook"></ion-icon>
              </span>
              <p className="group-hover:text-[#ED165F]">Facebook</p>
            </Link>
            <Link href="#" className="flex items-center gap-2 group">
              <span className="block text-[22px] pt-1 text-[#ED165F] group-hover:scale-125 duration-100 ease-in-out">
                <ion-icon name="logo-twitter"></ion-icon>
              </span>
              <p className="group-hover:text-[#ED165F]">Twitter</p>
            </Link>
            <Link href="#" className="flex items-center gap-2 group">
              <span className="block text-[22px] pt-1 text-[#ED165F] group-hover:scale-125 duration-100 ease-in-out">
                <ion-icon name="logo-instagram"></ion-icon>
              </span>
              <p className="group-hover:text-[#ED165F]">Instagram</p>
            </Link>
          </li>
          <li>
            <form>
              <span className="block mb-6">Subscribe to our newsletter</span>
              <label className="flex items-center border-[#ED165F] border-2 rounded max-w-[300px] w-full pl-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-transparent w-full outline-none"
                />
                <button className="bg-[#ED165F] text-white py-2 px-4">
                  OK
                </button>
              </label>
            </form>
          </li>
        </ul>
        <div>
          <Link
            className="block font-semibold mb-2 hover:text-[#ED165F] duration-150"
            href="#"
          >
            497 Evergreen Rd.Roseville, CA95673
          </Link>
          <Link
            className="block font-semibold mb-2 hover:text-[#ED165F] duration-150"
            href="#"
          >
            +44 345 678 903
          </Link>
          <Link
            className="block font-semibold  hover:text-[#ED165F] duration-150"
            href="#"
          >
            adobexd@mail.com
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
