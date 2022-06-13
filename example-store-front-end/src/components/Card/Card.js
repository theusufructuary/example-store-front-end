import React from 'react';
import css from './Card.module.css';

function Card({ data }) {
  return (
    <div className={css.card}>
      <h1>{data.title}</h1>
      <h3>{data.subtitle}</h3>
      <p>{data.subscribe}</p>
      <p>{data.price}</p>
    </div>
  );
}

export default Card;