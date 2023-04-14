import { Container, Row, Col } from "reactstrap";
import Header from './Header'
import Categories from "./Categories";
import Sort from "./Sort";
import ShoppingCart from "./ShoppingCart";
import PizzaBlock from "./PizzaBlock";
import React from 'react'
import Skeleton from "./Skeleton";
import NotFound from "./NotFound";
import Search from "./Search";
import Pagination from "./Pagination";

function DashBoard() {
    const[categoryId,setCategoryId] = React.useState(0);
    const[items,setItems] = React.useState([]);
    const[sorted,setSorted] = React.useState({name: 'популярности',sortProperty: 'rating'});
    const[searched,setSearch] = React.useState("");
    const[isLoading,setIsloading] = React.useState(true);

    const[currentPage,setCurrentPage] = React.useState(1);
    const[postsPerPage,setPostsPerPage] = React.useState(4);

  React.useEffect(()=>{
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const order = sorted.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sorted.sortProperty.replace('-','');
    const search = searched ? `title_like=${searched}` : '';
    const pagination = `_page=${currentPage}&_limit=${postsPerPage}`

    setIsloading(true)

    fetch(`http://localhost:3000/pizzas?&${pagination}${category}&_sort=${sortBy}&_order=${order}&${search}`)
    .then(response => response.json())
    .then(result => {
      console.log(result.length);
      setItems(result) 
      setIsloading(false)
    })
    
  },[categoryId,sorted,searched,currentPage])

    return(
        <Container>
         
      <Row>
        <Col xs={9}>
        <Search searched={searched} setSearch={setSearch}/>
        </Col>
        <Col>
        <ShoppingCart />
        </Col>
      </Row>
      <Row>
        <Col xs={9}>
          <Categories categoryId={categoryId} setCategoryId={setCategoryId}/>
        </Col>
        <Col xs={3}>
          <Sort sorted={sorted} setSorted={setSorted}/>
        </Col>
      </Row>
      <Row>
        <div className="d-flex flex-wrap">
        {
          isLoading 
          ? [...new Array(6)].map((_,index)=> <Skeleton  key={index}/>) 
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj}/>) 
        }
        </div>
      </Row>
      <Row>
        <Pagination items={items} currentPage={currentPage} setCurrentPage={setCurrentPage} postsPerPage={postsPerPage} setPostsPerPage={setPostsPerPage}/>
      </Row>
    </Container>
    )
}

export default DashBoard;