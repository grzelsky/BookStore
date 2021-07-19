import { useContext } from "react";
import { StoreContext } from "../../../store/StoreProvider";
import CategoryProducts from "../CategoryProducts/CategoryProducts";
import GenreTitle from "../GenreTitle/GenreTitle";

const AudioBooks = () => {
  const { audioBooks, genreId, productsRender } = useContext(StoreContext);

  const renderAllAudioBooks = audioBooks.map((audioBook) => (
    <CategoryProducts
      key={audioBook.id}
      product={audioBook}
      products={audioBooks}
    />
  ));

  const filteredAudioBooks = audioBooks.filter(
    (audioBook) => audioBook.genreId === genreId
  );
  const renderFilteredAudioBooks = filteredAudioBooks.map((audioBook) => (
    <CategoryProducts
      key={audioBook.id}
      product={audioBook}
      products={audioBooks}
    />
  ));
  return (
    <>
      <h1>AUDIOBOOKS</h1>
      {productsRender ? (
        <div className="renderProducts">{renderAllAudioBooks}</div>
      ) : (
        <>
          {genreId && <GenreTitle />}
          <div className="renderProducts">{renderFilteredAudioBooks}</div>
        </>
      )}
    </>
  );
};

export default AudioBooks;
