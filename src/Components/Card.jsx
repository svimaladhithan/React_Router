import React from "react";

const Card = ({ element, index }) => {
  return (
    <>
     
      <div key={index} className="col mb-5">
        <div className="card h-100">
          <img className="card-img-top img-fluid" src={element.image} alt="course image" />
          <div className="card-body p-4">
            <div className="card-text">
              <h3 className="fw-bolder">{element.about}</h3>
            </div>
           
          </div>
          <div className="card-footer">
          <p class="card-author mt-2 mb-2 text-muted">{element.author}</p>
            <div className="card-text text-muted">{element.date}</div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Card;
