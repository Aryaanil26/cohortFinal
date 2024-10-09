import React, { useEffect, useState } from "react";
import { axiosInstance } from "../config/axiosInstance";
import { ReviewCards, SampleCards } from "../components/Cards";

export const Review = () => {
  const [data ,setData] = useState([]);
 console.log(data,`============data`);

  const fetchreviews =async()=>{
    try{
      const response = await axiosInstance({
        method:"GET",
        url:"/review"
      });
      setData(response?.data?.data)
      console.log(response);
   } catch (error) {
    console.log(error);
   }
};

useEffect(() =>{
  fetchreviews();
}, []);

  return (
  <div>
    <SampleCards/>
    {data.map((value)=> (
    <ReviewCards review={ value } key ={value?._id} />
    ))};
     </div>
  );
};