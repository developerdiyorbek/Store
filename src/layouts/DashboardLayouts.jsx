import React, { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const DashboardLayouts = () => {
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("data"));

  useEffect(() => {
    if (!data) {
      navigate("/login");
    }
  }, []);

  const signOut = () => {
    const confirmation = confirm("Do you really want to log out this website");
    if (confirmation) {
      localStorage.removeItem("data");
      navigate("/");
    }
  };

  return (
    <div className="container mx-auto my-16 flex gap-6">
      <div className="w-[35%] shadow-lg shadow-[#0000001a]">
        <h3 className="py-[32px] px-[59px] text-[16px] font-extrabold loading-[18px] tracking-[0.2px]">
          ACCOUNT DASHBOARD
        </h3>
        <nav className="mb-[200px]">
          <NavLink
            to="userinformation"
            className="flex items-center gap-3 dashboardLink py-3 pl-[52px]"
          >
            <span className="text-[19px] pt-1 block">
              <ion-icon name="person"></ion-icon>
            </span>
            <span className="block loading-[18px] tracking-[0.2px] font-normal">
              Account Information
            </span>
          </NavLink>
          <NavLink
            to="addresbook"
            className="flex items-center gap-3 dashboardLink  py-3 pl-[52px]"
          >
            <span className="text-[19px] pt-[7px] block">
              <ion-icon name="book"></ion-icon>
            </span>
            <span className="block loading-[18px] tracking-[0.2px] font-normal">
              Address Book
            </span>
          </NavLink>
          <NavLink
            to="myorders"
            className="flex items-center gap-3 dashboardLink  py-3 pl-[52px]"
          >
            <span className="text-[19px] pt-[5px] block">
              <ion-icon name="gift"></ion-icon>
            </span>
            <span className="block loading-[18px] tracking-[0.2px] font-normal">
              My Orders
            </span>
          </NavLink>
          <NavLink
            to="myfavorites"
            className="flex items-center gap-3 dashboardLink  py-3 pl-[52px]"
          >
            <span className="text-[19px] pt-[5px] block">
              <ion-icon name="heart"></ion-icon>
            </span>
            <span className="block loading-[18px] tracking-[0.2px] font-normal">
              My Favorites
            </span>
          </NavLink>
        </nav>
        <button
          className="text-[#ED165F] flex items-center gap-2 mx-auto mb-16"
          onClick={() => signOut()}
        >
          <span className="text-[22px] block pt-[6px]">
            <ion-icon name="log-out"></ion-icon>
          </span>
          <span className="font-bold tracking-[0.2px]">SIGN OUT</span>
        </button>
      </div>
      <>
        <Outlet />
      </>
    </div>
  );
};

export default DashboardLayouts;
