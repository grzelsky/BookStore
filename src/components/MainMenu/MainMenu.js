import { useContext } from "react";
import { StoreContext } from "../../store/StoreProvider";
import ProdList from "./ProdList/ProdList";
import "./MainMenu.scss";

const MainMenu = () => {
  const { categories } = useContext(StoreContext);

  const mainListProdCategories = categories.map((category) => (
    <ProdList
      key={category.engName}
      name={category.engName}
      link={category.engName}
      id={category.id}
    />
  ));

  return <ul className="mainList"> {mainListProdCategories}</ul>;
};

export default MainMenu;
