import React, { useState, useEffect } from 'react';
import '../Billing/billing.css';
import { Link } from 'react-router-dom';
import { Form, FormFeedback, Input, Label } from 'reactstrap';
import cartService from '../../services/cartService';
import orderService from '../../services/orderService';
import { message } from 'antd';

function Billing() {
  const [cartItems, setCartItems] = useState([]);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [fname, setFirstname] = useState('');
  const [lname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    cartService.getCartItems().then((response) => {
      setCartItems(response.data.data);
    });
  }, []);

  useEffect(() => {
    let subTotal = 0;
    cartItems.forEach((item) => {
      subTotal += item.product.price * item.quantity;
    });
    setCartSubTotal(subTotal);
  }, [cartItems]);

  const handleOrder = async (e) => {
    e.preventDefault();
    if (!fname || !lname || !email || !address) {
      setMessage('All fields are required');
      return;
    }
    try {
      const response = await orderService.addOrder({
        user: window.localStorage.getItem('id'),
        products: cartItems.map((item) => item.product._id),
        amount: cartSubTotal,
        quantity: cartItems.map((item) => item.quantity),
        firstName: fname,
        lastName: lname,
        email,
        address,
      });
      if (response.status === 201) {
        message.success('Order placed successfully');
      }
      cartService.clearCart().then((response) => {
        console.log(response);
      });
      setCartItems([]);
      setMessage('');
    } catch (error) {
      message.error('Error occurred while placing the order');
    }
  };

  return (
    <div className="main-billing">
      <div className="rightside-billing">
        <div className="body-right">
          <div className="container-billing">
            <h1>RECIPEVERSE</h1>
            <h2>BILLING INFORMATION</h2>

            <Form>
              <div className="input-group">
                <Label for="firstname">First Name</Label>
                <Input
                  id="fname"
                  name="fname"
                  placeholder="Enter your First Name"
                  type="text"
                  value={fname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <div className="input-group">
                <Label for="lastname">Last Name</Label>
                <Input
                  id="lname"
                  name="lname"
                  placeholder="Enter your Last Name"
                  type="text"
                  value={lname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
              <div className="input-group">
                <Label for="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="Enter your Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-group">
                <Label for="address">Address</Label>
                <Input
                  id="address"
                  name="address"
                  placeholder="Enter your Address"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              <div className="input-group">
                <div style={{ position: 'absolute', marginLeft: '5rem' }}>
                  <FormFeedback style={{ color: 'red', fontSize: '0.8rem' }}>{message}</FormFeedback>
                </div>
              </div>

              <div className="input-group-button">
                <Input
                  type="submit"
                  value="Place Order"
                  id="sbtn"
                  onClick={handleOrder}
                  style={{ margin: '2rem 10rem 4rem 3.1rem' }}
                />
              </div>
            </Form>

            {!!cartItems.length && (
              <div className="cart-footer">
                <div className="subtotal">
                  <span className="text">Total:</span>
                  <span className="text total">{cartSubTotal}</span>
                </div>
              </div>
            )}

            <div className="top-right">
              <Label for="haveanaccount">
                <Link id="link-signin" to="/cart" style={{ color: 'red', fontWeight: 'bold', marginRight: '14rem' }}>
                  Return to Cart
                </Link>
              </Label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Billing;
