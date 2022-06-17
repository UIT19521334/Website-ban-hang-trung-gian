import React, { useContext, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import sizeDATA from "../../assets/json/size.json";
import { UserContext } from "../../UserContext";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "../../redux/authSelector";
import { createOrder } from "../../slices/orderSlice";
function BuySize(props) {
  // const {user} = useContext(UserContext);
  const { user } = useSelector(authSelector);
  const [price, setPrice] = React.useState();
  // Check popup
  const [isBuy, setIsBuy] = React.useState(false);
  const [isUser, setIsUser] = React.useState(true);
  const [isMore, setIsMore] = React.useState(false);
  const [isLocation, setIsLocation] = React.useState(false);
  const [size, setSize] = useState(1);

  const [bid, SetBid] = React.useState();
  const setbidData = (e) => {
    SetBid(e.target.value);
  };

  const handleProductOrder = () => {
    return props.productOrder.reduce((prev, curItem) => {
      if (curItem.order_type === "buy") return prev;
      if (curItem.asker_id === user._id) return prev;
      if (prev[curItem.size]) {
        if (prev[curItem.size] > curItem.price) {
          prev[curItem.size] = curItem.price;
          return prev;
        } else {
          return prev;
        }
      }
      return { ...prev, [curItem.size]: curItem.price };
    }, {});
  };

  const handleChangePrice = (e) => {
    setPrice(handleProductOrder()[e.target.value] || "");
    setSize(e.target.value);
  };
  // Checking
  const closeCheck = () => {
    setIsUser(true);
  };
  const CheckMore = () => {
    setIsMore(!isMore);
  };
  const CloseLocation = () => {
    setIsLocation(!isLocation);
  };
  const CloseLocation2 = () => {
    setIsLocation(!isLocation);
    alert("Buying sucess");
  };

  const dispatch = useDispatch();
  const handleNext = () => {
    if (user) {
      if (isBuy) {
        if (!price) {
          alert("Hiện chưa có người bán size này");
          return;
        }
        CloseLocation();
      } else {
        if (bid > price) {
          CheckMore();
        } else {
          if (bid > 0) {
            const data = {
              product_id: props.product_id,
              asker_id: user._id,
              size,
              price: bid,
              order_type: "buy",
              active: true,
              sold: false,
            };
            dispatch(createOrder(data));
            props.handleClose();
            alert("Your bid have save");
          }
        }
      }
    } else {
      setIsUser(false);
    }
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
              Lowest ask: {price} ${" "}
            </Form.Label>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Buy</Form.Label>
            <Form.Group>
              <Button variant="info" onClick={() => setIsBuy(false)}>
                Place Bid
              </Button>
              <Button
                style={{ marginLeft: 20 }}
                variant="success"
                onClick={() => setIsBuy(true)}
              >
                Buy now
              </Button>
            </Form.Group>
            {isBuy ? (
              <Form.Label style={{ fontSize: 28, marginTop: 20 }}>
                {" "}
                {price} $
              </Form.Label>
            ) : (
              <Form.Control
                value={bid}
                onChange={setbidData}
                style={{ marginTop: 20 }}
                rows={1}
                placeholder="Enter Bid"
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
      <Modal show={isMore} onHide={CheckMore}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "red" }}>Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your bid is more than price</Modal.Body>
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
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Your address</Form.Label>
              <Form.Control as="textarea" rows={6} />
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
export default BuySize;
