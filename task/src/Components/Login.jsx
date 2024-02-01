import React,{useState,useEffect} from "react";
import ToggleNavbar from "./ToggleNavbar";
import { NavLink,useLocation } from "react-router-dom";
const Login = () => {
  const location=useLocation();
  const[loginflag,setloginflag]=useState(false);
  const[signupflag,setsignupflag]=useState(false);
  useEffect(()=>{
    console.log(location.state);
    if(location.state==="login")
    {
      setloginflag(true);
      setsignupflag(false);
    }else if(location.state==="signup")
    {
      setloginflag(false);
      setsignupflag(true);
    }else{
      setloginflag(false);
      setsignupflag(false);
    }
  },[location])


  return (
    <>
      <section className="bg-orange-400 h-[100vh] flex flex-col justify-center items-center">
        <div className="flex flex-col bg-white w-1/4 justify-center p-2">
          <ToggleNavbar loginflag={loginflag} signupflag={signupflag}/>

          <div className="flex flex-col justify-center items-center mt-10">
            <form action="">
              <div className="flex flex-col">
                <div>
                  <label htmlFor="email">Email</label>
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="border-4 border-black rounded-full w-full"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <div>
                  <label htmlFor="password">Password</label>
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="border-4 border-black rounded-full w-full"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-y-10 mt-20">
                <div>
                  <NavLink
                    to="/forgotpass"
                    className="border-4 border-black rounded-full w-full bg-orange-500 p-4 m-20"
                  >
                    ForgotPassword
                  </NavLink>
                </div>
                <div>
                  <input
                    type="submit"
                    value="Login"
                    className="border-4 border-black rounded-full w-full bg-green-500"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
