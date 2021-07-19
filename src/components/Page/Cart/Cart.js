import { useContext } from "react";
import { StoreContext } from "../../../store/StoreProvider";
import ProductInCart from "./ProductInCart/ProductInCart";
import "./Cart.scss";
import { MdRemoveShoppingCart } from "react-icons/md";

const Cart = () => {
  const { cart, emptyCart, subtractProductFromCart } = useContext(StoreContext);
  console.log(cart.length);
  const productsInCart = cart.map((product) => (
    <ProductInCart
      key={product.id}
      product={product}
      subtractProductFromCart={subtractProductFromCart}
    />
  ));
  const toPay = cart.map((product) => product.toPay);
  const toPaySummary = toPay.reduce((a, b) => a + b, 0);

  return (
    <div className="cart">
      {cart.length > 0 ? (
        <>
          <button
            className="emptyCart"
            title="Wyczyść koszyk"
            onClick={emptyCart}
          >
            <MdRemoveShoppingCart />
          </button>
          <p className="paySummary">Cart value: {toPaySummary}zł</p>
        </>
      ) : (
        <span className="emptyCartMessage">your cart is empty</span>
      )}
      {/* <button className="emptyCart" title="empty your cart" onClick={emptyCart}>
        <MdRemoveShoppingCart />
      </button>
      <p className="paySummary">Cart value: {toPaySummary}zł</p> */}
      <div className="productsInCart">{productsInCart}</div>
    </div>
  );
};

export default Cart;
