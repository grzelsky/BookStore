import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import GenreList from "../GenreList/GenreList";
import { StoreContext } from "../../../store/StoreProvider";

const LiProduct = ({ name, link }) => {
  const { changeProductsRender } = useContext(StoreContext);
  const [genresVisibile, setGenresVisible] = useState(false);

  const toggleGenreList = () => {
    setGenresVisible(!genresVisibile);
  };

  return (
    <>
      <li
        className="productOnList"
        onClick={() => {
          toggleGenreList();
          changeProductsRender();
        }}
      >
        <NavLink to={`/${link}`}>{name}</NavLink>
      </li>
      {genresVisibile && <GenreList link={link} />}
    </>
  );
};

export default LiProduct;
