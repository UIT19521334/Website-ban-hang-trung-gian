import React from "react";
import { Card } from "react-bootstrap";
import sneaker from "../../assets/img/sneaker.jpg";
import ProductItem from "../../assets/json/product.json";
import { Link } from "react-router-dom";
import "./productcard.css";
import { useSelector } from "react-redux";
function CardItem(props) {
  return (
    <Card style={{ width: "12rem" }}>
      <Card.Img
        variant="top"
        src={props.img}
        style={{ width: "8rem", margin: "auto" }}
      />
      <Card.Body>
        <Card.Text
          style={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          {props.describe}
        </Card.Text>
        <Card.Title>${props.price}</Card.Title>
        <button className="card__sold">{props.sold} sold</button>
      </Card.Body>
    </Card>
  );
}
function ProductCard() {
  const { product } = useSelector((state) => state.product);
  // Gioi han so card hien thi
  let productcard = [];
  for (let i = 0; i < 6; i ++) {
    productcard.push(product[i])
  }
  return (
    <div className="product__content">
      {productcard.map((item, index) => (
        <div className="product_card" key={index}>
          <Link
            className="product_card__Link"
            to="/productdetail"
            state={{
              name: item.name,
              img: item.img,
              describe: item.describe,
              id: item.id,
            }}
          >
            <CardItem
              key={index}
              // img = {item.img} đáng ra là code này nhưng tôi chưa biết cách đưa ảnh vào json nên để tạm
              img={item.img}
              describe={item.describe}
              price={item.price}
              sold={item.sold}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
export default ProductCard;
