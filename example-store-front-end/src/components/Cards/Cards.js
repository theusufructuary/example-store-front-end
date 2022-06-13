import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import css from './Cards.module.css';

function Cards() {
  const [courses, setCourses] = useState(null); 
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://example-store-api.herokuapp.com/courses`
      );
      const data = await response.json();
      setCourses(data);
    }
    fetchData();
  }, []);

  return (
      <div className={css.cards}>
        {courses
          ? courses.map((course) => {
              return <Card data={course} />;
            })
          : `Loading Data...`}
      </div>
  );
}

export default Cards;
