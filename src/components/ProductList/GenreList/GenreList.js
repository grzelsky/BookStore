import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { StoreContext } from "../../../store/StoreProvider";
import Genre from "../Genre/Genre";

const GenreList = ({ link }) => {
  const { genres, changeProductsRender } = useContext(StoreContext);

  const genreList = genres.map((genre) => (
    <Genre
      key={genre.genrePl}
      name={genre.genreEng}
      link={link}
      id={genre.id}
    />
  ));

  return (
    <ul className="genreList">
      <li>
        <NavLink to={`/${link}`} onClick={() => changeProductsRender()}>
          All products
        </NavLink>
      </li>
      {genreList}
    </ul>
  );
};

export default GenreList;
