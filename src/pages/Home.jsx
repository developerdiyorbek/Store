import React, { useState } from "react";
import { Cart, Loading, SwiperSlider } from "../components";
import { Link } from "react-scroll";
import { BASE_URL } from "../utils/BaseUrl";
import { useFetch } from "../hooks/useFetch";
import { Pagination } from "@mui/material";

const Home = () => {
  // url
  const url = `${BASE_URL}products`;

  // custom Hook
  const { data, loading } = useFetch(url);

  // pagination
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = data ? Math.ceil(data.length / itemsPerPage) : 0;

  const handleChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = page * itemsPerPage;

  const currentPageData = data?.slice(startIndex, endIndex);

  return (
    <>
      <div className="w-screen h-screen bg-[#ED165F]">
        <SwiperSlider />
        <div className="text-center mt-2">
          <p className="text-white text-7 font-semibold">
            Explore our collection
          </p>
          <Link
            to="about"
            smooth
            duration={1000}
            className="text-white text-[30px] cursor-pointer p-1"
          >
            <ion-icon name="chevron-down"></ion-icon>
          </Link>
        </div>
      </div>
      <section className="pt-24">
        <div name="about" className="container mx-auto">
          <h2 className="text-center text-2xl font-normal loading-[35px] mb-14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
            gravida cursus adipiscing viverra at tortor, egestas odio
            parturient. Morbi ut lorem in erat. Et et molestie diam diam
            ultricies. Scelerisque duis diam ac cras dictum adipiscing.
            Venenatis at sit proin ut vitae adipiscing id facilisis.
          </h2>
          <div className="grid grid-cols-4 gap-y-20 gap-x-8 text-center mb-16">
            {loading ? (
              <Loading />
            ) : (
              currentPageData?.map((product) => (
                <Cart key={product.id} product={product} />
              ))
            )}
          </div>
          <div className="w-full  mb-24 flex items-center justify-center">
            <Pagination
              count={totalPages}
              page={page}
              onChange={handleChange}
              variant="outlined"
              shape="rounded"
              className="ml-28"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
