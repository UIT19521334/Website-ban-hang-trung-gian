import React, {useState} from "react";
import sneaker from '../../assets/img/sneaker.jpg';
import { Form } from "react-bootstrap";
import ProductCard from "../../components/cards/productCard";
import PriceHistoryChart from "../../components/chart/PriceHistoryChart";
import ViewBid from "../../components/popup/viewBid";
import ViewSales from "../../components/popup/viewSales";
import ViewAsk from "../../components/popup/viewAsk";
import './productdetail.css';
function ProductDetail (props) {
    const[viewAsk_page,setviewAsk_page] = useState(false);
    const[viewBid_page,setviewBid_page] = useState(false);
    const[viewSales_page,setviewSales_page] = useState(false);
    const show_viewAsk = () => {
        setviewAsk_page(!viewAsk_page)
    }
    const show_viewBid = () => {
        setviewBid_page(!viewBid_page)
    }
    const show_viewSales = () => {
        setviewSales_page(!viewSales_page)
    }
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
                            <button onClick={show_viewAsk}> View Asks</button>
                            <button onClick={show_viewBid}> View Bids</button>
                            <button onClick={show_viewSales}> View Sales</button>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="afterbody">
                <h5>Related Product</h5>
                <ProductCard/>
            </div>
            <hr/>
            <div className="afterbody">
                <h5>Product Details</h5>
                <div className="afterbody_1">
                    <div className="afterbody__left">
                        <div className="row">
                            <div className="col-3">
                            
                                <li>Style</li>
                                <li>Color way</li>
                                <li>Retail Price</li>
                                <li>Release Date</li>                          
                                                   
                            </div>
                            <div className="col-4">

                                <div><b>DH7722-001</b></div> 
                                <div><b>BLACK/BLACK-WHITE</b></div> 
                                <div><b>$120</b></div> 
                                <div><b>04/12/2022</b></div>
                            
                            </div>
                        </div>
                        
                        
                    </div>
                    <div className="afterbody__right">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vitae reiciendis minima nobis aperiam numquam nam voluptatum quasi iusto?
                        Itaque fugit eos tempore, aliquid fugiat deleniti repudiandae minus illum ipsum porro?
                        </p>
                    </div>
                </div>
                
            </div>
            <hr />
            <div className="afterbody">
                <h5>Price History</h5>
                <PriceHistoryChart/>
            </div>
            <hr/>
            {
                viewBid_page && <ViewBid handleClose={show_viewBid}/>
            }{
                viewAsk_page && <ViewAsk handleClose={show_viewAsk}/>
            }{
                viewSales_page && <ViewSales handleClose={show_viewSales}/>
            }
        </div>
    );
}
export default ProductDetail