import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

function Cards() {
  const [courses, setCourses] = useState(null);
  console.log("Card component called"); 
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://example-store-api.herokuapp.com/courses`
      );
      const data = await response.json();
      setCourses(data);
    }
    fetchData();

    console.log(courses);
  }, []);

  return (
    <div>
      <div>
        {courses
          ? courses.map((course) => {
              return <Card data={course} />;
            })
          : `Loading Data...`}
      </div>
    </div>
  );
}

export default Cards;
