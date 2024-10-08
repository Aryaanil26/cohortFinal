// import React from 'react';
// import MovieCard from '../components/MovieCard';
// import { useLoaderData } from 'react-router-dom';



// export async function loader() {
//     const response = await fetch('http://localhost:3000/movies')
//     const movies = await response.json()
//     return {movies}
//   }

// function Home(props) {
//     const {movies} = useLoaderData()
//      return (
//         <main>
//             <section className='container mx-auto py-16'>
//            <h2 className ='font-bold text-lg'>New arravial</h2>
//            <div className='mt-8 grid grid-cols-4 gap-4'>
//             {
//                movies.map(movie => {
//                     return <MovieCard
//                     key={movie._Id}
//                     movie = {movie}/>
//                  })
//              }
//            </div>
//            </section>
//         </main>
//     );
// }

// export default Home;

import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
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