import { useContext } from "react";
import { StoreContext } from "../../../store/StoreProvider";
import CategoryProducts from "../CategoryProducts/CategoryProducts";
import GenreTitle from "../GenreTitle/GenreTitle";

const EBooks = () => {
  const { eBooks, genreId, productsRender } = useContext(StoreContext);

  const renderAlleBooks = eBooks.map((eBook) => (
    <CategoryProducts key={eBook.id} product={eBook} products={eBooks} />
  ));

  const filteredeBooks = eBooks.filter((eBook) => eBook.genreId === genreId);

  const renderFilteredeBooks = filteredeBooks.map((eBook) => (
    <CategoryProducts key={eBook.id} product={eBook} products={eBooks} />
  ));
  return (
    <>
      <h1>EBOOKS</h1>
      {productsRender ? (
        <div className="renderProducts">{renderAlleBooks}</div>
      ) : (
        <>
          {genreId && <GenreTitle />}
          <div className="renderProducts">{renderFilteredeBooks}</div>
        </>
      )}
    </>
  );
};

export default EBooks;
