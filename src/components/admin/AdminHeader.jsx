import React from "react";
import { Link } from "react-router-dom";

 export const AdminHeader = () => {
    return (
     <div className="flex justify-between items-center w-full px-20 h-24 bg-primary-content">
       <Link to='/'>
       <div className="text-3xl font-bold">Logo</div>
       </Link>
        

        <nav className="flex gap-16 items-center font-semibold">
            <Link to ={'/'}>Home</Link>
            <Link to ={'/review'}>Review</Link>
            <Link to={'/movie'}>Movie</Link>
        </nav>
    </div>
    );
};
