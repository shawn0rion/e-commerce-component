import { useState } from "react";
import data from "./Data.js";
import Product from "./components/Product.jsx";
import Counter from "./components/Counter.jsx";
import Button from "./components/Button.jsx";
import Header from "./components/Header.jsx";
import Cart from "./components/Cart.jsx";

function App() {
  // set state for counter, product, cart
  const [counter, setCounter] = useState(0);
  const [product, setProduct] = useState(data);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarOpen = () => {
    setSidebarOpen(true);
  };

  const handleCartToggle = () => {
    setCartOpen(!cartOpen);
  };
  // function to increment counter
  const increment = () => {
    setCounter(counter + 1);
  };

  // function to decrement counter
  const decrement = () => {
    if (counter <= 0) return;

    setCounter(counter - 1);
  };

  const clearCart = () => {
    setCart([]);
  };

  // function to handle add to cart
  const addToCart = (product) => {
    let tempCart = [];

    // check if this product in the cart already
    if (cart.some((item) => item.product.id === product.id)) {
      // now increment the quanity of that item by counter
      tempCart = cart.map((item) => {
        if (item.product.id === product.id) {
          item.quantity += counter;
        }
        return item;
      });
    } else {
      // push item into Cart with quantity of counter
      tempCart = [...cart, { product: product, quantity: counter }];
    }
    setCart(tempCart);
    // reset counter
    setCounter(0);
  };

  return (
    <>
      <Header
        onCartClick={handleCartToggle}
        onSidebarClick={handleSidebarOpen}
      />
      <Cart cart={cart} cartOpen={cartOpen} onClearCart={clearCart} />
      <section className="product-content">
        <Product
          seller={product.seller}
          title={product.title}
          description={product.description}
          originalPrice={product.originalPrice}
          retailPrice={product.retailPrice}
          percentOff={product.percentOff}
        />
        <Counter
          counter={counter}
          onIncrement={increment}
          onDecrement={decrement}
        />
        <Button onClick={() => addToCart(product)}>Add to Cart</Button>
      </section>
    </>
  );
}

export default App;
