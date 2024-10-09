import React from "react";
import { SampleCards, SampleCards2, SampleCards3 } from "../components/Cards";


export const Home = () => {
  return ( 
<div>
 
  <main className="min-h-96 px-5">
<div className="flex-1">
<h1 className="font-bold text-4xl my-5">Welcome user,</h1>
<h2>latest release...</h2>
</div>
<div>
<SampleCards/>
</div>
<div>
<SampleCards2/>
</div>
<div>
<SampleCards3/>
</div>
   
  </main>

</div>
  );
};