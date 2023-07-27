import styled from "styled-components";
import Button from "./Button.jsx";

const StyledCart = styled.div`
  display: flex;
  flex-direction: column;
  & .header {
    height: 30%;
  }

  & .content {
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

// if the cartOpen then show the cart

// if the cart is empty, show empty cart message
export default function Cart(props) {
  const { cart, cartOpen, onClearCart } = props;
  return (
    <>
      {cartOpen && (
        <StyledCart>
          <div className="header">
            <h2>Cart</h2>
          </div>

          <div className="content">
            {/* if cart is empty, show empty cart message */}
            {cart.length === 0 && <p>Your cart is empty</p>}
            {cart.length !== 0 && (
              //  map over the car and render each item
              <ul>
                {cart.map((item) => (
                  <li key={item.product.id}>
                    {/* product image */}
                    <div className="product-text">
                      <p className="title">{item.product.title}</p>
                      <br />
                      {/* is either percent off or not */}
                      <span>
                        {item.product.percentOff !== 0
                          ? item.product.retailPrice
                          : item.product.originalPrice}
                        x {item.quantity} =
                        {item.product.percentOff !== 0
                          ? item.product.retailPrice * item.quantity
                          : item.product.originalPrice * item.quantity}
                      </span>
                    </div>
                    <Button onClick={onClearCart}>Checkout</Button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </StyledCart>
      )}
    </>
  );
}
