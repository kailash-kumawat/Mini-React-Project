import React from "react";

function Card({ userName, btnText = "visit me" }) {
  return (
    <>
      <div>
        <div className="card bg-gray-600 w-96 shadow-sm mb-4 rounded-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{userName}</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">{btnText}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
