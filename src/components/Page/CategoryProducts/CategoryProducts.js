import { useContext } from "react";
import { StoreContext } from "../../../store/StoreProvider";
import { FaCartArrowDown } from "react-icons/fa";
import "./CategoryProducts.scss";

const CategoryProducts = ({ product, products }) => {
  const {
    adminLogged,
    deleteProductFromStore,
    handleBuyQuantity,
    handleAddProductToCart,
  } = useContext(StoreContext);
  const { avaibleProducts, id, price, title, buyQuantity, image } = product;
  return (
    <div className="product">
      <div className="image">
        <img src={image} alt="bookIcon" />
      </div>
      <div className="productInfo" id={id}>
        <p className="title">title: {title}</p>
        <p className="price">price: {price} zł</p>
        {!adminLogged && (
          <button
            className="buyButton"
            onClick={() => handleAddProductToCart(product, products, id)}
            disabled={buyQuantity === 0 || avaibleProducts === 0 ? true : false}
          >
            <FaCartArrowDown />
          </button>
        )}
        {!adminLogged && (
          <button
            className="addButton"
            onClick={(e) => handleBuyQuantity(id, e, products, product)}
            disabled={buyQuantity >= avaibleProducts ? true : false}
          >
            +
          </button>
        )}
        {!adminLogged && (
          <button
            className="subtractButton"
            onClick={(e) => handleBuyQuantity(id, e, products, product)}
            disabled={buyQuantity ? false : true}
          >
            -
          </button>
        )}
        {adminLogged && (
          <button
            className="deleteButton"
            onClick={() => deleteProductFromStore(product)}
            title="delete"
          >
            &times;
          </button>
        )}
        <p className="quantity">Quantity: {buyQuantity}</p>
        <p className="value">Value:{buyQuantity * price}</p>
      </div>
    </div>
  );
};

export default CategoryProducts;
