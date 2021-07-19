import { useContext } from "react";
import { StoreContext } from "../../store/StoreProvider";
import LiProduct from "./LiProduct/LiProduct";
import "./ProductList.scss";

const ProductList = () => {
  const { categories } = useContext(StoreContext);

  const prodCategories = categories.map((category) => (
    <LiProduct
      key={category.engName}
      name={category.engName}
      link={category.engName}
      id={category.id}
    />
  ));

  return <ul className="productList"> {prodCategories}</ul>;
};

export default ProductList;
