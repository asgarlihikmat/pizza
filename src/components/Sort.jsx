import React from 'react'

function Sort({sorted,setSorted}) {

  const[sortType,setSortType] = React.useState([
    {name: 'популярности (DESC)',sortProperty: 'rating'},
    {name: 'популярности (ASC)',sortProperty: '-rating'},
    {name: 'цена (DESC)',sortProperty: 'price'},
    {name: 'цена (ASC)',sortProperty: '-price'},
    {name: 'алфавиту (DESC)',sortProperty: 'title'},
    {name: 'алфавиту (ASC)',sortProperty: '-title'}
]);

    return(
        <div className="dropdown">
          <a
            className="btn btn-secondary dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Сортировка по: {sorted.name}
          </a>

          <ul className="dropdown-menu">
              {sortType.map((sortName)=>(
                <li onClick={() => setSorted(sortName)}>
                <a className="dropdown-item" href="#">{sortName.name}</a>
                </li>
              ))}
         
          </ul>
        </div>
    )
}

export default Sort;