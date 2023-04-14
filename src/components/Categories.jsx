import React from 'react'

function Categories({categoryId,setCategoryId}) {
  const categories = ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые'];

 

  return (
    <nav className="nav nav-pills nav-fill">
        {categories.map((categoryName,index)=>(
          <a key={index} onClick={() => setCategoryId(index)} className={categoryId === index ? 'nav-link active' : 'nav-link'} aria-current="page" href="#">
            {categoryName}
          </a>
        ))}
        </nav>
  );
}

export default Categories;
