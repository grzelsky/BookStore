import "./ProductInCart.scss";

const ProductInCart = ({ product, subtractProductFromCart }) => {
  const { id, name, toPay, quantity } = product;

  return (
    <div className="productInCart">
      <div className="productInfo">
        <p>{name}</p> <p>quantity: {quantity}</p> <p>value: {toPay}zł</p>
      </div>
      <button
        className="subtractFromCart"
        onClick={() => subtractProductFromCart(id, product)}
      >
        -
      </button>
    </div>
  );
};

export default ProductInCart;
