import React, { useEffect, useState } from "react";
import sneaker from "../../assets/img/sneaker.jpg";
import { Form } from "react-bootstrap";
import ProductCard from "../../components/cards/productCard";
import PriceHistoryChart from "../../components/chart/PriceHistoryChart";
import ViewBid from "../../components/popup/viewBid";
import ViewSales from "../../components/popup/viewSales";
import ViewAsk from "../../components/popup/viewAsk";
import BuySize from "../../components/shoesSize/buySize";
import SellSize from "../../components/shoesSize/SellSize";
import { Modal, Button } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import "./productdetail.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrderByProduct } from "../../slices/orderSlice";
import { fetchSaleByProduct } from "../../slices/saleSlice";
import { addFollow, checkFollow } from "../../slices/productSlice";
function ProductDetail(props) {
  const [viewAsk_page, setviewAsk_page] = useState(false);
  const [viewBid_page, setviewBid_page] = useState(false);
  const [viewSales_page, setviewSales_page] = useState(false);
  const [viewBuy_page, setviewBuy_page] = useState(false);
  const [viewSell_page, setviewSell_page] = useState(false);
  const show_viewAsk = () => {
    setviewAsk_page(!viewAsk_page);
  };
  const show_viewBid = () => {
    setviewBid_page(!viewBid_page);
  };
  const show_viewSales = () => {
    setviewSales_page(!viewSales_page);
  };
  const show_viewBuy = () => {
    setviewBuy_page(!viewBuy_page);
  };
  const show_viewSell = () => {
    setviewSell_page(!viewSell_page);
  };
  const location = useLocation();
  const { id } = useParams();
  const state = location.state;

  const { productOrder } = useSelector((state) => state.order);
  const { productSale } = useSelector((state) => state.sale);
  const { user } = useSelector((state) => state.auth);
  const [follow, setFollow] = useState(false);

  const fetchLowestAsk = function () {
    if (!productOrder || productOrder.length < 1) return 0;

    let ask = [];

    productOrder.forEach((order) => {
      if (order.order_type === "sell" && order.active) {
        ask.push(order);
      }
    });
    const sortedAsk = ask.sort((a1, a2) => a1.price - a2.price);
    return sortedAsk[0]?.price;
  };
  const fetchHightestBid = function () {
    if (!productOrder || productOrder.length < 1) return 0;

    let ask = [];

    productOrder.forEach((order) => {
      if (order.order_type === "buy") {
        ask.push(order);
      }
    });
    const sortedAsk = ask.sort((a1, a2) => -a1.price + a2.price);
    return sortedAsk[0]?.price;
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOrderByProduct(state.id));
    dispatch(fetchSaleByProduct(state.id));
    checkFollowFunc();
  }, [id, viewBuy_page, viewSell_page]);

  const handleFollow = () => {
    dispatch(addFollow({ user_id: user._id, product_id: state.id }));
    setFollow((prev) => !prev);
  };
  const { follow: followStatus } = useSelector((state) => state.product);
  const checkFollowFunc = () => {
    dispatch(checkFollow({ user_id: user._id, product_id: state.id }));
  };
  useEffect(() => {
    setFollow(followStatus);
  }, [followStatus, id]);

  return (
    <div className="product__detail">
      <div className="header">
        <div className="header__left">
          <h4>{state.name}</h4>
          <h5>{state.describe}</h5>
        </div>
        <div className="header__right">
          <i class="bx bx-cart-add"></i>
          {follow && (
            <i
              onClick={handleFollow}
              style={{
                color: "green",
                cursor: "pointer",
              }}
              class="bx bxs-heart"
            ></i>
          )}
          {!follow && (
            <i
              style={{
                cursor: "pointer",
              }}
              onClick={handleFollow}
              class="bx bx-heart"
            ></i>
          )}
          <i class="bx bx-share bx-flip-horizontal"></i>
        </div>
      </div>
      <div className="body">
        <div className="body__left">
          <img className="image" src={state.img} alt="ảnh sản phẩm" />
        </div>
        <div className="body__right">
          <Form.Group style={{ minWidth: "600px" }}>
            <Form.Label>Status menu</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Most popular</option>
              <option value="1">Featured Shoes</option>
              <option value="2">Trading Cards</option>
              <option value="3">Collectibles Staff Picks</option>
              <option value="4">Trendding sneaker</option>
              <option value="5">Release Calendar</option>
            </Form.Select>
          </Form.Group>
          <div className="conponent__btn">
            <button onClick={show_viewBuy} className="buy__btn">
              {" "}
              Buy or Bid{" "}
            </button>
            <div className="conponent__text">
              <p>Lowest Ask</p>
              <h4>$ {fetchLowestAsk()}</h4>
            </div>
          </div>
          <div className="conponent__btn">
            <button onClick={show_viewSell} className="sell__btn">
              {" "}
              Sell or Ask{" "}
            </button>
            <div className="conponent__text">
              <p>Highest Bid</p>
              <h4>$ {fetchHightestBid()}</h4>
            </div>
          </div>
          <div className="conponent__btn">
            <div className="component__left">
              <p>Last sale:</p>
              <h4 style={{ color: "red" }}>
                $ {productSale && productSale[productSale.length - 1]?.price}
              </h4>
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
        <ProductCard />
      </div>
      <hr />
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
                <div>
                  <b>DH7722-001</b>
                </div>
                <div>
                  <b>BLACK/BLACK-WHITE</b>
                </div>
                <div>
                  <b>$120</b>
                </div>
                <div>
                  <b>04/12/2022</b>
                </div>
              </div>
            </div>
          </div>
          <div className="afterbody__right">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              reiciendis minima nobis aperiam numquam nam voluptatum quasi
              iusto? Itaque fugit eos tempore, aliquid fugiat deleniti
              repudiandae minus illum ipsum porro?
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="afterbody">
        <h5>Price History</h5>
        <PriceHistoryChart />
      </div>
      <hr />

      <Modal size="lg" show={viewBid_page} onHide={show_viewBid}>
        <ViewBid productOrder={productOrder} handleClose={show_viewBid} />
      </Modal>
      <Modal size="lg" show={viewAsk_page} onHide={show_viewAsk}>
        <ViewAsk productOrder={productOrder} handleClose={show_viewAsk} />
      </Modal>
      <Modal size="lg" show={viewSales_page} onHide={show_viewSales}>
        <ViewSales productSale={productSale} handleClose={show_viewSales} />
      </Modal>
      <BuySize
        product_id={state.id}
        view={viewBuy_page}
        productOrder={productOrder}
        handleClose={show_viewBuy}
      />
      <SellSize
        productOrder={productOrder}
        product_id={state.id}
        view={viewSell_page}
        handleClose={show_viewSell}
      />
    </div>
  );
}
export default ProductDetail;
