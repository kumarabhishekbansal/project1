import React from "react";
import { useNavigate } from "react-router-dom";
const ToggleNavbar = ({loginflag,signupflag}) => {
  const navigate=useNavigate();
  console.log(loginflag,signupflag);
  return (
    <>
      <div className="flex flex-row justify-center items-center bg-blue-300 gap-x-4">
        <h2 className={`cursor-pointer ${loginflag===true?"border-2 p-2 bg-green-500 rounded-full":"text-white"}`} onClick={()=>navigate(`/login`,{state:"login"})}>Login</h2>
        <h2 className={`cursor-pointer ${signupflag===true?"border-2 p-2 bg-green-500 rounded-full":"text-white"}`} onClick={()=>navigate(`/`,{state:"signup"})}>SignUp</h2>
      </div>
    </>
  );
};

export default ToggleNavbar;
