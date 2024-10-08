import React from "react";
import { Link } from "react-router-dom";

export const ReviewCards = ({review}) => {
return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <img src={"review?.thubnail"} alt="review" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{review?.moviename}!</h2>
    <p>{review?.review}</p>
    <div className="card-actions justify-end">
     <Link to ={`/AddReviews/${movie?._id}`}>
      <button className="btn btn-primary">Add review</button>
      </Link>
    </div>
  </div>
</div>
);
};

export const SampleCards = ({sample}) => {
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
    <figure>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Dp4mE-bjNNuGSPqaURB3Z9TiKH18MVjx8w&s"
        alt="Aveesham" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">Aveesham</h2>
      <div className="card-actions justify-end">
      <Link to ={'/AddReviews'}>
      <button className="btn btn-primary">Add review</button>
      </Link>
      </div>
    </div>
  </div>
  );
  };

  export const SampleCards2 = ({sample2}) => {
    return (
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvgKJt1efAMIoX3lXK_nNjPkpcfcC4USTc2w&s"
          alt="Turbo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Turbo</h2>
        <p>Wounderfull</p>
        <div className="card-actions justify-end">
        <Link to ={'/AddReviews'}>
        <button className="btn btn-primary">Add review</button>
        </Link>
        </div>
      </div>
    </div>
    );
    };

    export const SampleCards3 = ({sample2}) => {
      return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7U6OqZ37UXWYrCBLkpYeGp2Wf6nzQ-z1d6A&s"
            alt="Guruvyoor Ambalanadayil" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Guruvyoor Ambalanadayil</h2>
          <p>Fun dhamaka</p>
          <div className="card-actions justify-end">
          <Link to ={'/AddReviews'}>
          <button className="btn btn-primary">Add review</button>
          </Link>
          </div>
        </div>
      </div>
      );
      };

  export const AdminCards = () => {
    return (
      <form className="card-body">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Moviename</span>
        </label>
        <input type="text" placeholder="moviename" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Genre</span>
        </label>
        <input type="genre"  placeholder="genre" className="input input-bordered" required />
      </div>
     
      <div className="form-control">
      <label className="label">
          <span className="label-text">Thumbnail</span>
        </label>
        <input type="Thumbnail"  placeholder="Thumbnail" className="input input-bordered" required />
        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Dp4mE-bjNNuGSPqaURB3Z9TiKH18MVjx8w&s" alt="" /> */}
      </div>
      <Link to = {'/review'}>
      <div className="form-control mt-6">
        <button className="btn btn-primary">Submit</button>
      </div>
      </Link>
    </form>

    );
    };