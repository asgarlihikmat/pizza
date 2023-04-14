import React from 'react'
import { useParams } from 'react-router-dom';
import { Container,Row,Col } from 'reactstrap';

function PizzaBlock({id,title,price,imageUrl,sizes,types}) {

  const[activeSize,setActiveSize] = React.useState(-1);
  const[activeType,setActiveType] = React.useState(-1);

  const typeName = ['Тонкое','Традиционное'];
  
  return (

       <div className="card" style={{ width: "18rem", margin: "10px"}}>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
          <Container>
          <Row>
            <Col xs={12}>
            
            <div className="btn-group " role="group" aria-label="Basic outlined example">
              {types.map((typeIndex)=>(
                  <button key={typeIndex} onClick={()=> setActiveType(typeIndex)} type="button" className={activeType === typeIndex ? 'btn btn-outline-primary active' : 'btn btn-outline-primary'}>{typeName[typeIndex]}</button>
              ))}
            </div>          
            </Col>

            <Col >
            <div className="btn-group" role="group" aria-label="Basic outlined example">
              {sizes.map((sizeNumber,index)=>(
                  <button key={index} onClick={()=> setActiveSize(index)} type="button" className={activeSize === index ? 'btn btn-outline-primary active' : 'btn btn-outline-primary'}>{sizeNumber} см.</button>
              ))}
            </div>   
            </Col>
          </Row>
          </Container>
          </p>
          <p className="text-black-50 bg-white">от {price} azn</p>    
          <button key={122} type="button" className="btn btn-outline-primary">+Добавить</button>
        </div>
      </div> 
  );
}

export default PizzaBlock;
