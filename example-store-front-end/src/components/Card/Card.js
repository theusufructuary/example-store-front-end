import React from "react";

function Card({ data }) {
  console.log(JSON.stringify(data));
  console.log("Card component called");
  return (
    <div>
      <div>
        {data.title}
      </div>
      <h3>{data.subtitle}</h3>
      <p>{data.subscribe}</p>
      <p>{data.price}</p>
    </div>
  );
}

export default Card;