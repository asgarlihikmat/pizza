import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "../redux/filterSlice";

const categories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];
function Categories() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.filterSlice.categoryId);

  return (
    <nav className="nav nav-pills nav-fill">
      {categories.map((categoryName, index) => (
        <a
          key={index}
          onClick={() => dispatch(setCategoryId(index))}
          className={selector === index ? "nav-link active" : "nav-link"}
          aria-current="page"
          href="#"
        >
          {categoryName}
        </a>
      ))}
    </nav>
  );
}

export default Categories;
