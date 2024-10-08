import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../config/axiosInstance";
import { Link } from "react-router-dom";

export const AddReviews = () => {
  const [AddReviews,setAddReviews]=useState({})
  const {id} = useParams();

  console.log(id);

  const fetchAddReviews = async () => {
    try {
      const response = await axiosInstance({
        method:"GET",
        url:`/review/addreview${id}`,
      });

      setAddReviews(response?.data?.data);
      console.log(response,"===response");
      }catch (error) {
        console.log(error);
      }
    };

    useEffect(()=>{
      fetchAddReviews()
    },[])
  
  return (
   <div>
     <h2>Add review</h2>
    <div className="flex w-full">
    <div className="w-8/12 my-10">
    <form className="card-body">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Review</span>
        </label>
        <input type="text" placeholder="review" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Rating</span>
        </label>
        <input type="text"  placeholder="rating" className="input input-bordered" required />
      </div>
      <Link to = {'/review'}>
      <div className="form-control mt-6">
        <button className="btn btn-primary">Submit</button>
      </div>
      </Link>
    </form>
  </div>
  </div>;
  </div>
  );
};