import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(
      "https://the-news-daragon-server-souravadhikar1.vercel.app/categories"
    )
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h4>All Category</h4>

      {categories.map((category) => (
        <p key={category.id}>
          <Link
            to={`/category/${category.id}`}
            className="text-decoration-none text-black fw-semibold  bg-opacity-25"
          >
            {category.name}
          </Link>
        </p>
      ))}
    </div>
  );
};

export default LeftNav;
