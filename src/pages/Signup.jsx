import React from "react";
import { useForm } from "react-hook-form"
import { axiosInstance } from "../config/axiosInstance";


export const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async(data) => {
    try {
      const response = await axiosInstance({method:"POST", url:"/user/signup",data})
      console.log(response, '====response');
    

    } catch (error) {
   
     console.log(error);
    }
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Signup now!</h1>
   
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text"   {...register('name')} placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"  {...register('email')} placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password"  {...register('password')} placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Signup</button>
        </div>
      </form>
    </div>
  </div>
</div>
  );
};