import React, { useContext, useRef, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import sizeDATA from "../../assets/json/size.json";
import { UserContext } from "../../UserContext";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "../../redux/authSelector";
import { createOrder, updateActive } from "../../slices/orderSlice";
import { createSale } from "../../slices/saleSlice";
import { toast } from "react-toastify";
function SellSize(props) {
  // const {user} = useContext(UserContext);
  const { user } = useSelector(authSelector);
  const [price, setPrice] = React.useState();
  // Check popup
  const [isSell, setIsSell] = React.useState(false);
  const [isUser, setIsUser] = React.useState(true);
  const [isLeft, setIsLeft] = React.useState(false);
  const [isLocation, setIsLocation] = React.useState(false);
  const [size, setSize] = useState(1);

  const [contactNum, setContactNum] = useState("");
  const [address, setAddress] = useState("");

  const [ask, setAsk] = React.useState();
  const setAskData = (e) => {
    setAsk(e.target.value);
  };

  const hightestBidOrder = useRef();
  const handleProductOrder = () => {
    return props.productOrder.reduce((prev, curItem) => {
      if (curItem.order_type === "sell") return prev;
      if (curItem.asker_id === user._id) return prev;
      if (prev[curItem.size]) {
        if (prev[curItem.size] < curItem.price) {
          hightestBidOrder.current = curItem;
          prev[curItem.size] = curItem.price;
          return prev;
        } else {
          return prev;
        }
      }
      return { ...prev, [curItem.size]: curItem.price };
    }, {});
  };
  console.log(handleProductOrder());
  const handleChangePrice = (e) => {
    setPrice(handleProductOrder()[e.target.value] || "");
    setSize(e.target.value);
  };
  // Checking
  const closeCheck = () => {
    setIsUser(true);
  };
  const CheckMore = () => {
    setIsLeft(!isLeft);
  };
  const CloseLocation = () => {
    setIsLocation(!isLocation);
  };
  const CloseLocation2 = () => {
    setIsLocation(!isLocation);
    if (isSell) {
      handleSale();
    } else {
      const data = {
        product_id: props.product_id,
        asker_id: user._id,
        size,
        price: ask,
        order_type: "sell",
        active: true,
        sold: false,
        address,
        contactNum,
      };
      dispatch(createOrder(data));
      props.handleClose();
      toast("Ask successfully");
    }
  };
  const dispatch = useDispatch();
  const handleNext = () => {
    if (user) {
      if (isSell) {
        if (!price) {
          alert("Hiện chưa có người mua size này");
          return;
        }
        CloseLocation();
      } else {
        if (ask < price) {
          CheckMore();
        } else {
          if (ask > 0) {
            CloseLocation();
          } else {
            alert("Input your ask");
          }
        }
      }
    } else {
      setIsUser(false);
    }
  };
  const handleSale = () => {
    const data = {
      product_id: props.product_id,
      order_id: hightestBidOrder.current._id,
      userTaken: user._id,
      size,
      price: hightestBidOrder.current?.price,
      address,
      contactNum,
    };
    dispatch(createSale(data));
    dispatch(updateActive(hightestBidOrder.current._id));
    props.handleClose();
    toast("Sell successfully");
  };
  return (
    <Modal size="lg" show={props.view} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Select Size</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Choose your shoes size</Form.Label>
            <Form.Select
              style={{ width: 200 }}
              onChange={handleChangePrice}
              aria-label="Default select example"
            >
              {sizeDATA.map((item, index) => (
                <option value={item.size}>{item.size}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label style={{ fontSize: 20 }}>
              Highest bid: {price} ${" "}
            </Form.Label>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Sell</Form.Label>
            <Form.Group>
              <Button variant="info" onClick={() => setIsSell(false)}>
                Place Ask
              </Button>
              <Button
                style={{ marginLeft: 20 }}
                variant="success"
                onClick={() => setIsSell(true)}
              >
                Sell now
              </Button>
            </Form.Group>
            {isSell ? (
              <Form.Label style={{ fontSize: 28, marginTop: 20 }}>
                {" "}
                {price} $
              </Form.Label>
            ) : (
              <Form.Control
                value={ask}
                onChange={setAskData}
                style={{ marginTop: 20 }}
                rows={1}
                placeholder="Enter Ask"
                type="number"
              />
            )}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleNext}>
          Next
        </Button>
      </Modal.Footer>
      <Modal show={!isUser} onHide={closeCheck}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "red" }}>
            Please login to continute
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeCheck}>
            Close
          </Button>
          <Link to="/login">
            <Button variant="primary" onClick={closeCheck}>
              Go to login
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
      <Modal show={isLeft} onHide={CheckMore}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "red" }}>Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your ask is less than price</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={CheckMore}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal size="lg" show={isLocation} onHide={CloseLocation}>
        <Modal.Header closeButton>
          <Modal.Title>Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                type="number"
                placeholder="example: 0915017711"
                autoFocus
                onChange={(e) => setContactNum(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Your address</Form.Label>
              <Form.Control
                as="textarea"
                rows={6}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={CloseLocation}>
            Close
          </Button>
          <Button variant="primary" onClick={CloseLocation2}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </Modal>
  );
}
export default SellSize;
