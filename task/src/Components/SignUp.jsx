import React, { useState,useEffect } from "react";
import ToggleNavbar from "./ToggleNavbar";
import {MdStar } from "react-icons/md";
import { Country, State, City } from "country-state-city";
import { useLocation } from "react-router-dom";
const SignUp = () => {
  const [countrydatas, setcountrydatas] = useState(Country.getAllCountries());
  const [statedatas, setstatedatas] = useState(State.getAllStates());
  const [citydatas, setcitydatas] = useState(City.getAllCities());
  const [countryCode, setcountryCode] = useState("");
  const [stateCode, setstateCode] = useState("");
  const [selectcountry, setselectcountry] = useState("");
  const [selectstate, setselectstate] = useState("");
  const [selectcity, setselectcity] = useState("");
  const [selectmobilecode, setselectmobilecode] = useState("");

  const location=useLocation();
  const[loginflag,setloginflag]=useState(false);
  const[signupflag,setsignupflag]=useState(false);
  useEffect(()=>{
    if(location.state==="login")
    {
      setloginflag(true);
      setsignupflag(false);
    }else if(location.state==="signup" || location.pathname==="/")
    {
      setloginflag(false);
      setsignupflag(true);
    }else{
      setloginflag(false);
      setsignupflag(false);
    }
  },[location])

  const handleCountrySelect = (e) => {
    // console.log(e.target.value);
    setcountryCode(e.target.value);
    setselectcountry(e.target.value);
  };

  const handleStateSelect = (e) => {
    console.log(e.target.value);
    setstateCode(e.target.value);
    setselectstate(e.target.value);
  };

  const handleCitySelect = (e) => {
    setselectcity(e.target.value);
  };

  const handleMobileSelect = (e) => {
    setselectmobilecode(e.target.value);
  };

  return (
    <>
      <section className="bg-red-500 h-100">
        <div className="flex flex-col">
        <ToggleNavbar loginflag={loginflag} signupflag={signupflag}/>
          <div className="flex flex-col justify-center items-center mt-10">
            <form action="">
              {/* radio buttons */}
              <div className="flex flex-col justify-center items-center gap-2">
                <div>
                  <label htmlFor="employer">
                    Individual/Enterprise/Government
                  </label>
                </div>
                <div className="flex gap-x-4">
                  <input type="radio" name="employer" id="employer" />
                  Individual
                  <input type="radio" name="employer" id="employer" />
                  Enterprise
                  <input type="radio" name="employer" id="employer" />
                  Government
                </div>
              </div>

              {/* First Name */}
              <div className="flex flex-row justify-center items-center gap-4">
                <div className="flex flex-col gap-y-2">
                  <div className="flex">
                    <label htmlFor="fname">FirstName</label> <MdStar />
                  </div>
                  <div className="flex gap-x-4">
                    <input
                      type="text"
                      name="fname"
                      id="fname"
                      className="border-2 border-black"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-y-2">
                  <div>
                    <label htmlFor="lname">LastName</label>
                  </div>
                  <div className="flex gap-x-4">
                    <input
                      type="text"
                      name="lname"
                      id="lname"
                      className="border-2 border-black"
                    />
                  </div>
                </div>
              </div>
              {/* email */}
              <div className="flex flex-col gap-y-2">
                <div className="flex">
                  <label htmlFor="email">Email</label> <MdStar />
                </div>
                <div className="flex gap-x-4">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="border-2 border-black w-full"
                    required
                  />
                </div>
              </div>
              {/* address */}
              <div className="flex flex-col gap-y-2">
                <div className="flex">
                  <label htmlFor="address">Address</label> <MdStar />
                </div>
                <div className="flex gap-x-4">
                  <input
                    type="text"
                    name="address"
                    id="address"
                    className="border-2 border-black w-full"
                    required
                  />
                </div>
              </div>

              {/* country,state */}
              <div className="flex gap-x-4">
                <div className="flex flex-col gap-y-2">
                  <div className="flex">
                    <label htmlFor="country">Country</label> <MdStar />
                  </div>
                  <select
                    value={selectcountry}
                    onChange={handleCountrySelect}
                    required
                    className={`rounded px-3 py-2 focus:ring focus:border-blue-300 text-center border-4 border-slate-400 outline-none p-4 text-3xl font-bold`}
                  >
                    {countrydatas &&
                      countrydatas.map((val) => {
                        return <option value={val.isoCode}>{val.name}</option>;
                      })}
                  </select>
                </div>

                <div className="flex flex-col gap-y-2">
                  <div className="flex">
                    <label htmlFor="state">State</label> <MdStar />
                  </div>
                  <select
                    value={selectstate}
                    onChange={handleStateSelect}
                    required
                    className={`rounded px-3 py-2 focus:ring focus:border-blue-300 text-center border-4 border-slate-400 outline-none p-4 text-3xl font-bold`}
                  >
                    {statedatas &&
                      statedatas.map((val) => {
                        if (val.countryCode === countryCode) {
                          return (
                            <option value={val.isoCode}>
                              {val.name} {val.countryCode}
                            </option>
                          );
                        }
                      })}
                  </select>
                </div>
              </div>

              {/* city,pincode */}
              <div className="flex gap-x-10">
                <div className="flex flex-col gap-y-2">
                  <div className="flex">
                    <label htmlFor="city">City</label> <MdStar />
                  </div>
                  <select
                    value={selectcity}
                    onChange={handleCitySelect}
                    required
                    className={`rounded px-3 py-2 focus:ring focus:border-blue-300 text-center border-4 border-slate-400 outline-none p-4 text-3xl font-bold`}
                  >
                    {citydatas &&
                      citydatas.map((val) => {
                        if (
                          val.countryCode === countryCode &&
                          val.stateCode === stateCode
                        ) {
                          return (
                            <option value={val.countryCode}>
                              {val.name} {val.countryCode}
                            </option>
                          );
                        }
                      })}
                  </select>
                </div>

                <div className="flex flex-col gap-y-2 ml-40">
                  <div className="flex">
                    <label htmlFor="pincode">Pincode</label> <MdStar />
                  </div>
                  <div>
                    <input
                      type="number"
                      name="pincode"
                      id="pincode"
                      className="border-2 border-black w-full w-full"
                    />
                  </div>
                </div>
              </div>

              {/* Mobile,number */}
              <div className="flex gap-x-10">
                <div className="flex flex-col gap-y-2">
                  <div className="flex">
                    <label htmlFor="mobile">Mobile Number</label> <MdStar />
                  </div>
                  <select
                    value={selectmobilecode}
                    onChange={handleMobileSelect}
                    required
                    className={`rounded px-3 py-2 focus:ring focus:border-blue-300 text-center border-4 border-slate-400 outline-none p-4 text-3xl font-bold`}
                  >
                    {countrydatas &&
                      countrydatas.map((val) => {
                        return (
                          <option value={val.isoCode}>{val.isoCode}</option>
                        );
                      })}
                  </select>
                </div>

                <div className="flex flex-col gap-y-2 ml-60">
                  <div className="flex">
                    <label htmlFor="mobile">Mobile Number</label> <MdStar />
                  </div>
                  <div>
                    <input
                      type="number"
                      name="mobile"
                      id="mobile"
                      className="border-2 border-black w-full"
                    />
                  </div>
                </div>
              </div>

              {/* fax,phone */}
              <div className="flex gap-x-10">
                <div className="flex flex-col gap-y-2">
                  <div className="flex">
                    <label htmlFor="fax">FAX</label>
                  </div>
                  <div>
                    <input
                      type="number"
                      name="fax"
                      id="fax"
                      placeholder="011-55541234"
                      className="border-2 border-black w-full"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-y-2">
                  <div className="flex">
                    <label htmlFor="phone">Phone Number</label>
                  </div>
                  <div>
                    <input
                      type="number"
                      name="phone"
                      id="phone"
                      placeholder="011-55541234"
                      className="border-2 border-black w-full"
                    />
                  </div>
                </div>
              </div>


              {/* password */}
              <div className="flex flex-col gap-y-2">
                <div className="flex">
                  <label htmlFor="password">Password</label> <MdStar />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="border-2 border-black w-full"
                  />
                </div>
              </div>

              {/* confirm password */}
              <div className="flex flex-col gap-y-2 mb-20">
                <div className="flex">
                  <label htmlFor="cpassword">Confirm Password</label> <MdStar />
                </div>
                <div>
                  <input
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    className="border-2 border-black w-full"
                  />
                </div>
              </div>

              <div className="flex mb-20">
                <input type="submit" value="SignUp" className="border-4 border-blue-300 rounded-full w-full text-white bg-green-400 cursor-pointer" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
