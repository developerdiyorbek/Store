import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";

const Cart = ({ product }) => {
  const data = JSON.parse(localStorage.getItem("data"));
  const navigate = useNavigate();

  const handleCart = (product) => {
    if (!data) {
      navigate("/login");
      return null;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const isProductExist = cart.find((item) => item.id === product.id);
    if (isProductExist) {
      const updateCart = cart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(updateCart));
    } else {
      localStorage.setItem(
        "cart",
        JSON.stringify([...cart, { ...product, quantity: 1 }])
      );
    }
    alert("Product added to cart");
  };

  // like
  const handleLike = (product) => {
    console.log(product);
  };

  return (
    <div className="text-center group relative  group p-2">
      <LazyLoadImage
        src={product.image}
        alt={product.category}
        className="mb-7 h-[300px] block mx-auto"
        effect="blur"
      />
      <p>{product.title}</p>
      <p>${product.price}</p>
      <div className="hidden bg-[#00000066] w-full h-full  absolute top-0 left-0 text-2xl group-hover:flex  items-center justify-center flex-col">
        <button
          className="bg-white px-2 py-2 flex items-center rounded-[2px] text-2xl text-[#ED165F] cursor-pointer mb-4"
          onClick={() => handleLike(product)}
        >
          <ion-icon name="heart-outline"></ion-icon>
        </button>
        <button
          className="bg-white rounded-[2px] flex items-center justify-center py-2 px-2 gap-2 cursor-pointer hover:opacity-75 duration-150"
          onClick={() => handleCart(product)}
        >
          <p className="text-xl">ADD TO CART</p>
          <span className="text-[#ED165F] block pt-1">
            <ion-icon name="cart"></ion-icon>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Cart;
