"use client";
import Image from "next/image";
import { products } from "../../../../../../public/files";
import { ArrowBack, ShoppingCart } from "@mui/icons-material";
import { Rating } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { additem } from "@/redux/slices/cart";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Alertbox from "@/components/alertonadd";
import Placeorder from "@/components/orderplace";

export default function Productspage({ params }) {
  const { id } = React.use(params);
  const product = products[id - 1];
  const dispatch = useDispatch();
  const router = useRouter();
  const cart = useSelector((state) => state.cart);
  const isincart = cart.find((item) => item.id === product.id);
  const [alert, setalert] = useState(false);
  const [order, setorder] = useState(false);
  const handleadd = () => {
    if (!isincart) {
      dispatch(additem(product));
      setalert(true);
    } else {
      router.push("/");
    }
  };

  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-br from-amber-50 to-yellow-100 flex items-center justify-center p-1 md:p-3 lg:p-4 xl:p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-xl rounded-2xl p-6 w-full max-w-5xl">
          <div className="flex items-center justify-center">
            <div className="overflow-hidden rounded-xl shadow-md">
              <Image
                height={500}
                width={500}
                src={product.image}
                alt={product.name}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-3 text-gray-800">
              {product.name}
            </h2>
            <Rating
              value={product.rating}
              precision={0.1}
              size="small"
              readOnly
            />
            <p className="text-gray-600 mb-4">
              {product.description ||
                "This is a high-quality product that you'll love."}
            </p>
            <p className="text-3xl font-semibold text-amber-500 mb-6">
              ₹{product.price}
            </p>
            <div className="flex gap-4">
              <button
                onClick={handleadd}
                className="px-5 py-2 flex items-center gap-2 text-sm font-bold text-white rounded-md bg-amber-400 hover:bg-amber-500 transition transform active:scale-95 hover:scale-105"
              >
                {isincart ? <ArrowBack /> : <ShoppingCart fontSize="small" />}
                {isincart ? "GO BACK" : " ADD TO CART"}
              </button>
              <button onClick={()=>setorder(true)} className="px-5 py-2 text-sm font-bold text-white rounded-md bg-blue-600 hover:bg-blue-700 transition transform active:scale-95 hover:scale-105">
                BUY NOW
              </button>
            </div>
          </div>
        </div>
        {alert && (
          <Alertbox setalert={setalert} alert={alert} product={product.name} />
        )}
        {order && <Placeorder setorder={setorder} order={order} />}
      </div>
    </>
  );
}
