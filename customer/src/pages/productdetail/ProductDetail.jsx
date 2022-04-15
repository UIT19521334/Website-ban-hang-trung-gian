import React from "react";
import sneaker from '../../assets/img/sneaker.jpg';
import { Form } from "react-bootstrap";
import ProductCard from "../../components/cards/productCard";
import './productdetail.css';
function ProductDetail (props) {
    return (
        <div className="product__detail">
            
            <div className="header">
                <div className="header__left">
                    <h4>Nike Blazer Low</h4>
                    <h5>Off-White University Red</h5>
                </div>
                <div className="header__right">
                    <i class='bx bx-cart-add'></i>
                    <i class='bx bx-heart' ></i>
                    <i class='bx bx-share bx-flip-horizontal' ></i>
                </div>
                
            </div>
            <div className="body">
                <div className="body__left">
                    <img src={sneaker} alt="ảnh sản phẩm" />
                </div>
                <div className="body__right">
                    <Form.Group style={{minWidth:'600px'}}>
                        <Form.Label>Disabled select menu</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Most popular</option>
                            <option value="1">Feature</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                    <div className="conponent__btn">
                        <button className="buy__btn"> Buy or Bid </button>
                        <div className="conponent__text">
                            <p>Lowest Ask</p>
                            <h4>$ 310</h4>
                        </div>
                    </div>
                    <div className="conponent__btn">
                        <button className="sell__btn"> Sell or Ask </button>
                        <div className="conponent__text">
                            <p>Highest Bid</p>
                            <h4>$ 310</h4>
                        </div>
                    </div>
                    <div className="conponent__btn">
                        <div className="component__left">
                            <p>Last sale:</p>
                            <h4 style={{color:'red'}}>$ 310</h4>
                        </div>
                        <div className="conponent__right">
                            <button> View Asks</button>
                            <button> View Bids</button>
                            <button> View Sales</button>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="afterbody">
                <h5>Related Product</h5>
                <ProductCard/>
            </div>
            <div className="afterbody">
                <h5>Product Details</h5>
                <div className="afterbody_1">
                    <div className="afterbody__left">
                        <ul>
                            <li>Style</li>
                            <li>Color way</li>
                            <li>Retail Price</li>
                            <li>Release Date</li>                          
                            
                        </ul>
                        <ul>
                            <li>DH7722-001</li>
                            <li>BLACK/BLACK-WHITE</li>
                            <li>$120</li>
                            <li>04/12/2022</li>
                        </ul>
                    </div>
                    <div className="afterbody__right">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vitae reiciendis minima nobis aperiam numquam nam voluptatum quasi iusto?
                        Itaque fugit eos tempore, aliquid fugiat deleniti repudiandae minus illum ipsum porro?
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
export default ProductDetail