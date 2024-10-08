// // import React from 'react'
// // import ReactDOM from 'react-dom/client'
// // import {
// //   createBrowserRouter,
// //   RouterProvider,
// // } from "react-router-dom";
// // import './index.css';
// // import Root from './pages/root.jsx';
// // import ErrorPage from './error-page';
// // import Home,{loader as homeLoader} from './pages/home.jsx';
// // //import Contact from './routes/contact';
// // import Movies from './pages/movies.jsx';
// // //import About from './routes/about';
// // import Movie,{loader as movieLoader} from './pages/movie.jsx';
// // import Reviews,{loader as reviewLoader} from './pages/reviews.jsx';
// // import Signup from './pages/signup.jsx';
// // import Login from './pages/login.jsx';
// // import { Provider } from 'react-redux';
// // import store from './app/store.js';
// // // import Reviews from './routes/reviews';




// // const router = createBrowserRouter([
// //   {
// //     path: "/",
// //     element: <Root/>,
// //     errorElement:<ErrorPage/>,
// //     children:[
// //       {
// //         path:'/',
// //         element: <Home/>,
// //         loader: homeLoader
// //       },
// //          {
// //           path:'/reviews',
// //           element: <Reviews/>,
// //        loader: reviewLoader 
// //          },
// //       {
// //         path:'/movies',
// //         element: <Movie/>,
// //         loader:movieLoader
// //       },
// //       //    {
// //       //      path:'/reviews/:review._id',
// //       //    element: <Review/>
// //       //  },
// //       // {
// //       //   path:'/movies/:movie_id',
// //       //   element:<Movie/>,
// //       // loader:movieLoader
// //       // },
// //       {
// //         path:'/signup',
// //       element: <Signup/>
// //     },
// //     {
// //       path:'/login',
// //       element: <Login/>
// //     }
// //     ]
// //   },

// // ]);

// // ReactDOM.createRoot(document.getElementById('root')).render(
// //   <React.StrictMode>
// //     <Provider store={store}>
// //     <RouterProvider router={router} />
// //     </Provider>
// //   </React.StrictMode>
// // )


import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(<App />);
