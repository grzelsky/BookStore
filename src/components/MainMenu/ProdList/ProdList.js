import { NavLink } from "react-router-dom";

const ProdList = ({ name, link }) => {
  return (
    <li className="mainMenuProd">
      <NavLink to={`/${link}`}>{name}</NavLink>
    </li>
  );
};

export default ProdList;
