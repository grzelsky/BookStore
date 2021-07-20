import { useContext } from "react";
import { StoreContext } from "../../../store/StoreProvider";
import CategoryProducts from "../CategoryProducts/CategoryProducts";
import GenreTitle from "../GenreTitle/GenreTitle";
const Books = () => {
  const { books, genreId, productsRender } = useContext(StoreContext);

  const renderAllBooks = books.map((book) => (
    <CategoryProducts key={book.id} product={book} products={books} />
  ));

  const filteredBooks = books.filter((book) => book.genreId === genreId);

  const renderFilteredBooks = filteredBooks.map((book) => (
    <CategoryProducts key={book.id} product={book} products={books} />
  ));

  return (
    <>
      <h1>BOOKS</h1>
      {productsRender ? (
        <div className="renderProducts">{renderAllBooks}</div>
      ) : (
        <>
          {genreId && <GenreTitle />}
          <div className="renderProducts">{renderFilteredBooks}</div>
        </>
      )}
    </>
  );
};

export default Books;
