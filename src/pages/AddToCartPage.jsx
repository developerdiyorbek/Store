import React, { useState, useEffect } from "react";

const AddToCartPage = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    const total = cart.reduce((acc, item) => {
      return acc + item.quantity * item.price;
    }, 0);
    setTotal(total);
  }, [cart]);

  const handleInc = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    updateCart(updatedCart);
  };

  const handleDec = (id) => {
    const updatedCart = cart
      .map((item) => {
        if (item.id === id) {
          const updatedQuantity = item.quantity - 1;
          if (updatedQuantity <= 0) {
            removeProduct(id);
            return null;
          }
          return { ...item, quantity: updatedQuantity };
        }
        return item;
      })
      .filter(Boolean);
    updateCart(updatedCart);
  };

  const removeProduct = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    updateCart(updatedCart);
  };

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  if (cart.length === 0)
    return (
      <div className="container mx-auto">
        <div className="border border-gray-300 rounded-lg p-4 text-center my-[200px] w-[50%] py-10">
          <p className="text-gray-700 text-xl">Your cart is empty</p>
        </div>
      </div>
    );

  return (
    <div className="container mx-auto my-16 flex gap-10 ">
      <div className="w-[60%]">
        <div className="flex justify-between mb-6 px-1">
          <h2 className="text-xl">Shopping cart</h2>
          <p className="text-xl">{cart?.length} items</p>
        </div>
        {cart?.map((item) => {
          return (
            <div
              className="relative rounded-lg border p-4 flex gap-[100px] mb-6 pr-12"
              key={item.id}
            >
              <img
                src={item.image}
                alt="item"
                className="w-24 h-24 rounded-lg object-contain mr-4"
              />
              <div className="flex gap-24">
                <div>
                  <h2 className="text-lg font-semibold mb-2">Quantity</h2>
                  <div className="flex items-center gap-1">
                    <button
                      className="text-lg text-gray-600 border border-gray-400 rounded px-2 py-[2px] ml-1 transition duration-300 hover:bg-gray-200 focus:outline-none"
                      onClick={() => handleDec(item?.id)}
                    >
                      -
                    </button>
                    <p className="font-semibold border rounded w-7 text-center">
                      {item?.quantity}
                    </p>
                    <button
                      className="text-lg text-gray-600 border border-gray-400 rounded px-2 py-[2px] ml-1 transition duration-300 hover:bg-gray-200 focus:outline-none"
                      onClick={() => handleInc(item?.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div>
                  <h2 className="text-lg font-semibold mb-2">Price</h2>
                  <p className="text-lg font-semibold">${item.price}</p>
                </div>
                <div>
                  <h2 className="text-lg font-semibold mb-2">Total</h2>
                  <p className="text-lg font-semibold">
                    ${(item.quantity * item.price).toFixed(2)}
                  </p>
                </div>
              </div>
              <button
                className="absolute bottom-2 right-4 bg-[#ED165F] py-1 px-2 text-white rounded"
                onClick={() => removeProduct(item?.id)}
              >
                remove
              </button>
            </div>
          );
        })}
      </div>
      <div className="flex mt-1">
        <h1 className="text-xl font-bold mr-2">Total Price:</h1>
        <h1 className="text-xl font-bold text-[#ED165F]">
          ${total.toFixed(2)}
        </h1>
      </div>
    </div>
  );
};

export default AddToCartPage;
