import React from "react";
import { Outlet } from "react-router-dom";

// components
import { Footer, Header } from "../components";

const RootLayouts = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayouts;
