import React from "react";
import google from "/src/assets/google.png"

const Form = () => {
  return (
 <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-200 "> 
    <h1 className="text-5xl font-semibold">Welcome back</h1>
    <p className="font-medium text-lg text-gray-500 mt-4">Welcome Back! Please enter your 
     details</p>

    <div className="mt-8">
        <div>
            <label className="text-lg font-medium">Email</label>
            <input className="w-full border-2 border-gray-10 rounded-xl p-4 mt-1 bg- 
             transparent" type="text" name="" id="" placeholder="Enter your email" />
        </div>
        <div>
        <label className="text-lg font-medium">Password</label>
            <input className="w-full border-2 border-gray-10 rounded-xl p-4 mt-1 bg- 
             transparent" type="Password" name="" id="" placeholder="Enter your Password" />
        </div>

        <div className="mt-8 flex justify-between items-center ">
            <div>
                <input type="checkbox" id="remember" />
                <label className="ml-2 font-medium text-base" for="remember" >Remember for 30 
                 days</label>
            </div>
            <button className="font-medium text-base text-blue-500">Forgot Password</button>
        </div>
        <div className="mt-8 flex flex-col gap-y-4 " >
            <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out 
             transition-all bg-blue-500 text-white p-3 text-lg font-bold rounded-xl" >Sign in</button>
            
            
            <button className="flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 hover:scale-[ 
                 1.01] ease-in-out 
             transition-all border-2 p-3 rounded-xl ">
                <img className="icon" src={google} alt="" />
                Sign in with Google</button>
        </div>




    </div>
 </div> 
  )
}

export default Form
