import React from 'react';
import css from './Card.module.css';

function Card({ data, key }) {
  console.log("card.js", data);
  return (
    <div className={css.card} key={key}>
      <h3>{data.title}</h3>
      <h4>{data.subtitle}</h4>
      <p className={css.subscribe}>{data.subscribe}</p>
      <p>{data.price}</p>
      <button className={css.button}>View Course {'>'}</button>
    </div>
  );
}

export default Card;