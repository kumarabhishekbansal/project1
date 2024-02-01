import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MdSearch, MdShoppingCart, MdPerson } from "react-icons/md";
const TopNavbar = () => {
  const [searchflag, setsearchflag] = useState(false);
  const [totalitems, settotalitems] = useState(0);
  const navigate = useNavigate();
  const toggleSearch = () => {
    setsearchflag((prev) => !prev);
  };

  useEffect(() => {
    if (localStorage.getItem("cartitems")) {
      settotalitems(JSON.parse(localStorage.getItem("cartitems")).length);
    }
  }, [totalitems]);
  return (
    <>
      <section className="bg-grey-200 border-b-4">
        <div className="flex w-full justify-evenly p-4">
          {/* logo */}
          <NavLink to="/viewProduct">
            <h2>
              <span className="text-green">SHOP</span>LANE
            </h2>
          </NavLink>
          {/* items */}
          <div className="flex gap-x-6">
            <div>
              <NavLink to="/viewProduct">Home</NavLink>
            </div>
            <div>
              <h1
                onClick={() => navigate(`/viewProduct`, { state: "cloth" })}
                className="cursor-pointer"
              >
                Clothings
              </h1>
            </div>
            <div>
              <h1
                onClick={() =>
                  navigate(`/viewProduct`, { state: "Accessories" })
                }
                className="cursor-pointer"
              >
                Accessories
              </h1>
            </div>
          </div>
          {/* icons */}
          <div className="flex gap-x-6">
            <div>
              <input
                type="text"
                name="search"
                id="search"
                className={`border-4 border-black ${
                  searchflag === true ? "block" : "hidden"
                }`}
              />
            </div>
            <div className="text-xl">
              <MdSearch onClick={toggleSearch} />
            </div>
            <div className="text-xl">
              <NavLink to="/viewCart">
                <MdShoppingCart />
                {/* <input type="number" name="cartitem" id="cartitem" readOnly className="border-rounded-full  border-black w-10" value={totalitems}/> */}
              </NavLink>
            </div>
            <div className="text-xl">
              <NavLink to="/">
                <MdPerson />
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopNavbar;
