import React from "react";
import {Card} from "react-bootstrap";
import ProductData from '../../assets/json/productData.json';
import sneaker from '../../assets/img/sneaker.jpg';
import { Link } from "react-router-dom";
import './productcard.css';
function CardItem (props){
    return(
        <Card style={{ width: '12rem' }}>
        <Card.Img variant="top" src={props.img} style={{ width: '8rem', margin:'auto' }} />
        <Card.Body>
            <Card.Text style={{ textOverflow:'ellipsis', whiteSpace:"nowrap", overflow:'hidden'}}>
              {props.describe}
            </Card.Text>
            <Card.Title>${props.price}</Card.Title>
            <button className="card__sold">{props.sold} sold</button>
        </Card.Body>
        </Card>
    );
}   
function ProductList () {
    return (
        <div className="product__list">
            {
                ProductData.map((item,index)=>(
                  <div className="product_card__" >
                      <Link className="product_card__Link"
                        to={{
                            pathname: "/productdetail",
                            state : {
                              data: item.id
                            }
                        }}
                      >
                        <CardItem key ={index}
                            // img = {item.img} đáng ra là code này nhưng tôi chưa biết cách đưa ảnh vào json nên để tạm
                            img = {sneaker}
                            describe ={item.describe}
                            price = {item.price}
                            sold = {item.sold}    
                        />
                      </Link>  
                  </div>
              )) 

            }
        </div>
    );
}
 
export default ProductList