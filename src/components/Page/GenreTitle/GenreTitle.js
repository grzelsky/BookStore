import { useContext } from "react";
import { StoreContext } from "../../../store/StoreProvider";

const GenreTitle = () => {
  const { genreId } = useContext(StoreContext);
  return (
    <>
      {(genreId === 1 && <h2> Adventure </h2>) ||
        (genreId === 2 && <h2> Fantasy </h2>) ||
        (genreId === 3 && <h2> Historic </h2>) ||
        (genreId === 4 && <h2> Cooking </h2>)}
    </>
  );
};

export default GenreTitle;
