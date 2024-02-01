import React from 'react'
import { NavLink } from 'react-router-dom'
const ResetPassword = () => {
  return (
    <>
        <section className='bg-blue-500 h-[100vh] mt-10 flex flex-col justify-center items-center overflow-hidden'>
                <div className='flex flex-col gap-y-4 border-4 border-white w-1/3 justify-center items-center p-2 bg-white'>
                   <div>
                    <h1>Please provide your registerd email id to reset password</h1>
                   </div>
                   <div>
                    <input type="email" name="email" id="email" placeholder='Email id' className='border-2 border-black w-full text-center' />
                   </div>
                   <div className="flex gap-x-10">
                        <div>
                            <input type="submit" value="Reset Password" className='border-2 bg-green-400 rounded-full w-full p-2' />
                        </div>

                        <div className='p-3'>
                            <NavLink to="/" className='border-2 bg-orange-400 rounded-full w-full p-2'>Login/Signup</NavLink>
                        </div>
                   </div>
                </div>
        </section>
    </>
  )
}

export default ResetPassword