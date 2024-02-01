import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Card from "./Card";
const ProductView = () => {
  const [datas, setdatas] = useState([]);
  const [clothfilter, setclothfilter] = useState(false);
  const [accfilter, setaccfilter] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/viewProduct" && location.state === "cloth") {
      setclothfilter(true);
      setaccfilter(false);
    } else if (
      location.pathname === "/viewProduct" &&
      location.state === "Accessories"
    ) {
      setclothfilter(false);
      setaccfilter(true);
    } else if (
      location.pathname === "/viewProduct" &&
      location.state === null
    ) {
      setaccfilter(false);
      setclothfilter(false);
    }
  }, [location]);

  useEffect(() => {
    console.log(datas);
    return async () => {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setdatas(data);
    };
  }, []);
  return (
    <>
      <section className="bg-grey-400 h-[100vh] mt-5">
        <h1 className="font-bold text-xl">
          {clothfilter === true
            ? "Clothing for Men and Women"
            : accfilter === true
            ? "Accessories for Men and Women"
            : "All Products for Men and Women"}
        </h1>
        <div className="flex justify-around flex-wrap gap-4">
          {datas.map((val) => {
            if (clothfilter === true && val.category.includes("cloth")) {
              return (
                <Card
                  src={val.image}
                  title={val.title}
                  desc={val.description.substring(0, 50)}
                  price={val.price}
                  id={val.id}
                />
              );
            } else if (accfilter === true && !val.category.includes("cloth")) {
              return (
                <Card
                  src={val.image}
                  title={val.title}
                  desc={val.description.substring(0, 50)}
                  price={val.price}
                  id={val.id}
                />
              );
            } else if (clothfilter === false && accfilter === false) {
              return (
                <Card
                  src={val.image}
                  title={val.title}
                  desc={val.description.substring(0, 50)}
                  price={val.price}
                  id={val.id}
                />
              );
            }
          })}
        </div>
      </section>
    </>
  );
};

export default ProductView;
