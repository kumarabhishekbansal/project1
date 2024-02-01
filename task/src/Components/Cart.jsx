import React, { useEffect, useState } from "react";
import CartCard from "./CartCard";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const [datas, setdatas] = useState([]);
    const navigate=useNavigate();
  const hanldeClearCart=()=>{
    if(localStorage.getItem("cartitems"))
    {
        localStorage.removeItem("cartitems");
    }
    navigate("/viewProduct");
    window.location.reload(false);

  }

  useEffect(() => {
    if (!localStorage.getItem("cartitems")) {
        navigate("/viewProduct");
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("cartitems")) {
      setdatas(JSON.parse(localStorage.getItem("cartitems")));
    }
  }, []);

  return (
    <>
      <section className="flex flex-col justify-center items-center">
        <div className="flex flex-col gap-5">
          {datas.map((val) => {
            return <CartCard val={val} />;
          })}
        </div>
        <div className="border-2 border-green w-full rounded-xl text-center m-10">
          <h2 className="bg-orange-400 p-4 text-white font-bold text-xl cursor-pointer hover:bg-red-800 active:scale-110" onClick={hanldeClearCart}>Clear Cart</h2>
        </div>
      </section>
    </>
  );
};

export default Cart;
