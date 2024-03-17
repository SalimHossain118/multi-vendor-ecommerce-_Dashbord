/** @format */

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { admin_login } from "../../store/Reducers/authReducer";

const AdminLogin = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const inputHandle = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(admin_login(state));
    console.log(state);
  };

  return (
    <div className="min-w-screen min-h-screen bg-[#161d31] flex justify-center items-center">
      <div className="w-[350px] text-[#d0d2d6] p-2">
        <div className="bg-[#283046] p-4 rounded-md">
          <h2 className="text-xl mb-3">Welcome to next e-commerce</h2>
          <div className="justify-center items-center">
            <div>
              <img
                src="http://localhost:3000/images/logo.png"
                alt="Logo"
                className="w-[200px] h-[200px]"
              />
            </div>
          </div>
          <form onSubmit={submit}>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="name">Email</label>
              <input
                onChange={inputHandle}
                value={state.name}
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden"
                type="email"
                name="email"
                placeholder="email"
                id="email"
                required
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="name">Password</label>
              <input
                onChange={inputHandle}
                value={state.name}
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden"
                type="password"
                name="password"
                placeholder="password"
                id="password"
                required
              />
            </div>
            {/* end of input fields */}

            <button className="bg-blue-500 w-full hover:shadow-blue-500/20 hover:shadow-lg text-white rounded-md px-7 py-2 mb-5 mt-5">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
