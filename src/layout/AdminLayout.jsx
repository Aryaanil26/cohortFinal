import React from "react";
import { Footer } from "../components/Footer";
import { AdminHeader } from "../components/admin/AdminHeader";
import { AdminCards } from "../components/Cards";


    export const AdminLayout = () => {
    return (
    <div>
      
      <div className="min-h-96">
      <AdminHeader/>
      <div>
        <AdminCards/>
      </div>
      </div>
      <Footer/>
    </div>
    );
};
