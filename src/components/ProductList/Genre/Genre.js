import { useContext } from "react";
import { StoreContext } from "../../../store/StoreProvider";
import { NavLink } from "react-router-dom";

const Genre = ({ name, id, link }) => {
  const { filterProducts } = useContext(StoreContext);

  return (
    <li>
      <NavLink to={`/${link}`} onClick={filterProducts} id={id}>
        {name}
      </NavLink>
    </li>
  );
};

export default Genre;
