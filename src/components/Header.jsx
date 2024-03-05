import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

// Logo
import Logo from "../images/Logo.svg";

const Header = () => {
  const location = useLocation();

  return (
    <header
      className={
        location.pathname === "/"
          ? "absolute top-[25px]  left-0 w-full z-10"
          : "sticky top-0  left-0 z-10"
      }
    >
      <nav
        className={
          location.pathname === "/"
            ? "bg-white w-full py-[15px]"
            : "bg-[#F5F5F5] w-full py-[15px]"
        }
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-[24px]">
            <NavLink
              className="font-semibold text-[14px] loading-[18px] tracking-[0.2px] px-2 py-[10px]"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="font-semibold text-[14px] loading-[18px] tracking-[0.2px] px-2 py-[10px]"
              to="/clothes"
            >
              Clothes
            </NavLink>
            <NavLink
              className="font-semibold text-[14px] loading-[18px] tracking-[0.2px] px-2 py-[10px]"
              to="/shoes"
            >
              Shoes
            </NavLink>
            <NavLink
              className="font-semibold text-[14px] loading-[18px] tracking-[0.2px] px-2 py-[10px]"
              to="/accessories"
            >
              Accessories
            </NavLink>
          </div>
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-[70px] h-[40px]" />
          </Link>
          <div className="flex items-center gap-5">
            <form>
              <label className="flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Search..."
                  className="border-b-2 px-2 py-1 focus:outline-none bg-transparent"
                />
                <span className="text-black text-xl block pt-1 cursor-pointer">
                  <ion-icon name="search"></ion-icon>
                </span>
              </label>
            </form>
            <NavLink className="text-[18px] block  pt-1 icons" to="login">
              <ion-icon name="person"></ion-icon>
            </NavLink>
            <NavLink className="text-[18px] block  pt-1 icons" to="addtocart">
              <ion-icon name="cart"></ion-icon>
            </NavLink>
            <NavLink className="text-[18px] block  pt-1 icons" to="likes">
              <ion-icon name="heart"></ion-icon>
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
