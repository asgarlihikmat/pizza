import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSort } from "../redux/filterSlice";

export const sortType = [
  {id:1, name: "популярности (DESC)", sortProperty: "rating" },
  {id:2, name: "популярности (ASC)", sortProperty: "-rating" },
  {id:3, name: "цена (DESC)", sortProperty: "price" },
  {id:4, name: "цена (ASC)", sortProperty: "-price" },
  {id:5, name: "алфавиту (DESC)", sortProperty: "title" },
  {id:6, name: "алфавиту (ASC)", sortProperty: "-title" },
];

function Sort() {
  const sortItem = useSelector((state) => state.filterSlice.sort);
  const dispatch = useDispatch();

  return (
    <div className="dropdown">
      <a
        className="btn btn-secondary dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Сортировка по: {sortItem.name}
      </a>

      <ul className="dropdown-menu">
        {sortType.map((obj) => (
          <li key={obj.id} onClick={() => dispatch(setSort(obj))}>
            <a className="dropdown-item" href="#">
              {obj.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sort;
