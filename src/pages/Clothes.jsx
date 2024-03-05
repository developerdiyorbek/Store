import React, { useState } from "react";
import { BASE_URL } from "../utils/BaseUrl";
import { useFetch } from "../hooks/useFetch";
import { Pagination } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Cart } from "../components";

const sizes = [
  {
    id: 1,
    size: "XXS",
  },
  {
    id: 2,
    size: "XS",
  },
  {
    id: 3,
    size: "S",
  },
  {
    id: 4,
    size: "M",
  },
  {
    id: 5,
    size: "L",
  },
  {
    id: 6,
    size: "XL",
  },
  {
    id: 7,
    size: "23",
  },
  {
    id: 8,
    size: "24",
  },
  {
    id: 9,
    size: "25",
  },
  {
    id: 10,
    size: "26",
  },
  {
    id: 11,
    size: "27",
  },
  {
    id: 12,
    size: "28",
  },
  {
    id: 13,
    size: "29",
  },
  {
    id: 14,
    size: "30",
  },
  {
    id: 15,
    size: "31",
  },
  {
    id: 16,
    size: "32",
  },
];

const colors = [
  {
    id: 1,
    title: "Beige",
    color: "bg-[#F5F5DC]",
  },
  {
    id: 2,
    title: "Blue",
    color: "bg-blue-500",
  },
  {
    id: 3,
    title: "Black",
    color: "bg-black",
  },
  {
    id: 4,
    title: "Orange",
    color: "bg-orange-500",
  },
  {
    id: 5,
    title: "Green",
    color: "bg-green-500",
  },
  {
    id: 6,
    title: "Brown",
    color: "bg-[#A52A2A]",
  },
  {
    id: 7,
    title: "Purple",
    color: "bg-purple-500",
  },
  {
    id: 8,
    title: "Gold",
    color: "bg-[#FFD700]",
  },
  {
    id: 9,
    title: "Taupe",
    color: "bg-[#483C32]",
  },
  {
    id: 10,
    title: "White",
    color: "bg-white",
  },
  {
    id: 11,
    title: "Pink",
    color: "bg-pink-500",
  },
  {
    id: 12,
    title: "Red",
    color: "bg-red-500",
  },
];

const Clothes = () => {
  // url
  const [url, setUrl] = useState(`${BASE_URL}products`);

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
    <div className="container mx-auto">
      <h2 className="text-[30px] loading-[18px] font-extrabold tracking-[3px] my-16">
        Clothes
      </h2>

      <div className="flex gap-[30px] mb-16">
        <div className="w-[28%]">
          <h3 className="text-[20px] font-semibold loading-[18px] mb-[15px]">
            Category
          </h3>
          <div className="w-full h-[2px] bg-[#00000080] mb-7"></div>
          <div className="mb-16">
            <button
              className={`block text-left hover:text-[#ED165F] duration-150 w-full py-[2px] mb-[2px] ${
                url === "https://fakestoreapi.com/products"
                  ? "text-[#ED165F]"
                  : ""
              }`}
              onClick={() => setUrl(`${BASE_URL}products`)}
            >
              All
            </button>
            <button
              className={`block text-left hover:text-[#ED165F] duration-150 w-full py-[2px] mb-[2px] ${
                url === "https://fakestoreapi.com/products/category/jewelery"
                  ? "text-[#ED165F]"
                  : ""
              }`}
              onClick={() => setUrl(`${BASE_URL}products/category/jewelery`)}
            >
              Jewelery
            </button>
            <button
              className={`block text-left hover:text-[#ED165F] duration-150 w-full py-[2px] mb-[2px] ${
                url === "https://fakestoreapi.com/products/category/electronics"
                  ? "text-[#ED165F]"
                  : ""
              }`}
              onClick={() => setUrl(`${BASE_URL}products/category/electronics`)}
            >
              Electronics
            </button>
            <button
              className={`block text-left hover:text-[#ED165F] duration-150 w-full py-[2px] mb-[2px] ${
                url ===
                "https://fakestoreapi.com/products/category/men's%20clothing"
                  ? "text-[#ED165F]"
                  : ""
              }`}
              onClick={() =>
                setUrl(`${BASE_URL}products/category/men's%20clothing`)
              }
            >
              Men's clothing
            </button>
            <button
              className={`block text-left hover:text-[#ED165F] duration-150 w-full py-[2px] mb-[2px] ${
                url ===
                "https://fakestoreapi.com/products/category/women's%20clothing"
                  ? "text-[#ED165F]"
                  : ""
              }`}
              onClick={() =>
                setUrl(`${BASE_URL}products/category/women's%20clothing`)
              }
            >
              Women's clothing
            </button>
          </div>
          <div className="mb-16">
            <h3 className="text-[20px] font-semibold loading-[18px] mb-[15px]">
              Size
            </h3>
            <div className="w-full h-[2px] bg-[#00000080] mb-7"></div>

            <ul className="grid grid-cols-4 gap-2">
              {sizes.map((size) => (
                <li
                  className="border-black border-[1px] rounded py-[7px] px-[14px] text-center hover:bg-[#ED165F] hover:text-white duration-100 cursor-pointer"
                  key={size.id}
                >
                  {size.size}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-16">
            <h3 className="text-[20px] font-semibold loading-[18px] mb-[15px]">
              Color
            </h3>
            <div className="w-full h-[2px] bg-[#00000080] mb-7"></div>

            <ul className="grid grid-cols-3 gap-x-2 gap-y-3">
              {colors.map((color) => (
                <li
                  className="flex items-center flex-wrap gap-1"
                  key={color.id}
                >
                  <p
                    className={"w-[38px] h-12 rounded border " + color.color}
                  ></p>
                  <p className="w-[46%]">{color.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-[70%]">
          <div className="text-end">
            <select className="py-1 px-3 border-black border-[1px] outline-none rounded mb-[14px] cursor-pointer">
              <option>Sort by:Most popular</option>
            </select>
          </div>
          <div className="w-full h-[2px] bg-[#00000080] mb-7"></div>

          <div className="grid grid-cols-3 gap-6">
            {loading ? (
              <div>
                <p className="text-2xl">Loading...</p>
              </div>
            ) : (
              <>
                {url === `${BASE_URL}products`
                  ? currentPageData?.map((product) => (
                      <Cart product={product} key={product.id} />
                    ))
                  : data?.map((product) => (
                      <Cart product={product} key={product.id} />
                    ))}
              </>
            )}
          </div>
          {url === `${BASE_URL}products` && (
            <div className="w-full  mb-24 flex items-center justify-center">
              <Pagination
                count={totalPages}
                page={page}
                onChange={handleChange}
                variant="outlined"
                shape="rounded"
                className="mt-16"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Clothes;
