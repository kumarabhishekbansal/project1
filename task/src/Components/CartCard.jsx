import React, { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { FaMinus, FaPlus } from "react-icons/fa";
const CartCard = ({ val }) => {
  const handlePlus = (id) => {
    if (localStorage.getItem("cartitems")) {
      const data = JSON.parse(localStorage.getItem("cartitems"));
      for (var i = 0; i < data.length; i++) {
        if (data[i].id === id) {
          data[i].quantity = data[i].quantity + 1;
        }
      }
      localStorage.setItem("cartitems", JSON.stringify(data));
      window.location.reload(false);
    }
  };

  const handleMinus = (id) => {
    if (localStorage.getItem("cartitems")) {
      const data = JSON.parse(localStorage.getItem("cartitems"));
      for (var i = 0; i < data.length; i++) {
        if (data[i].id === id) {
          data[i].quantity = data[i].quantity - 1;
        }
      }
      localStorage.setItem("cartitems", JSON.stringify(data));
      window.location.reload(false);
    }
  };

  const handleDelete=(id)=>{
    if (localStorage.getItem("cartitems")) {
        const data = JSON.parse(localStorage.getItem("cartitems"));
        const datas=[];
        for (var i = 0; i < data.length; i++) {
          if (data[i].id !== id) {
            datas[i] = data[i];
          }
        }
        localStorage.setItem("cartitems", JSON.stringify(datas));
        window.location.reload(false);
      }
  }
  return (
    <>
      <section className="flex flex-col justify-center items-center mt-10">
        <div className="flex flex-col border-4 border-black p-4 w-full h-1/2 justify-center items-center">
          <div className="flex gap-x-10">
            {/* img */}
            <div>
              <img src={val.src} alt={val.title} className="h-[200px]" />
            </div>

            {/* title */}

            <div>
              <h1>{val.title}</h1>
            </div>

            {/* + - buutons */}
            <div className="flex flex-col">
              <div className="flex gap-x-6">
                {/* plus */}
                <FaPlus onClick={() => handlePlus(val.id)} />
                {/* minus */}
                <FaMinus onClick={() => handleMinus(val.id)} />
                {/* delete */}
                <MdDelete onClick={() => handleDelete(val.id)} />
              </div>

              {/* quantity */}

              <div className="text-center border-2 border-black mt-2">
                {val.quantity}
              </div>
            </div>
          </div>

          {/* total rupees */}
          <div>
          <h2>Quantity*price=total</h2>
          <h2>Total : {val.quantity}*{val.price}=<span className="font-bold text-xl">{val.quantity*val.price} Rs</span> </h2>
          </div>
        </div>

       
      </section>
    </>
  );
};

export default CartCard;
