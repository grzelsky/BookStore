import { useContext, useState } from "react";
import { StoreContext } from "../../../store/StoreProvider";
import "./AddProductToStoreForm.scss";
const AddProductToStoreForm = () => {
  const { addProductToStore, categories, genres, modalOn } =
    useContext(StoreContext);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [avaibleProducts, setAvaibleProducts] = useState(0);
  const [productCategory, setProductCategory] = useState("");
  const [genreId, setGenreId] = useState(0);
  const [categoryId, setCategoryId] = useState(0);

  const handleTitle = (e) => setTitle(e.target.value);
  const handlePrice = (e) => setPrice(Number(e.target.value).toFixed(2));
  const handleAvaibleProducts = (e) =>
    setAvaibleProducts(Number(e.target.value));
  const handleProductCategory = (e) => setProductCategory(e.target.value);
  const handleGenreId = (e) => {
    setGenreId(e.target.value);
  };
  const handleCategoryId = (e) => setCategoryId(e.target.id);

  const categoriesForm = categories.map((category) => (
    <option
      value={category.engName}
      id={category.id}
      key={category.id}
      onClick={handleCategoryId}
    >
      {category.engName}
    </option>
  ));
  const genresForm = genres.map((genre) => (
    <option value={genre.id} key={genre.id}>
      {genre.genreEng}
    </option>
  ));

  const submitProductForm = (e) => {
    e.preventDefault();

    const product = {
      id: `${productCategory}_${title}`,
      title: title,
      price: Number(price),
      avaibleProducts: Number(avaibleProducts),
      buyQuantity: 0,
      category: productCategory,
      genreId: Number(genreId),
      categoryId: Number(categoryId),
      image: `/icons/${productCategory}.png`,
    };
    console.log(product);
    addProductToStore(product);
    modalOn();
  };

  return (
    <form className="addProductForm" onSubmit={submitProductForm}>
      <label>
        Category
        <select value={productCategory} onChange={handleProductCategory}>
          <option>select</option>
          {categoriesForm}
        </select>
      </label>
      <label>
        Genre
        <select value={genreId} onChange={handleGenreId}>
          <option>select</option>
          {genresForm}
        </select>
      </label>
      <label>
        Title
        <input type="text" value={title} name="title" onChange={handleTitle} />
      </label>
      <label>
        Price
        <input
          type="number"
          value={price}
          min="0.05"
          step="0.05"
          onChange={handlePrice}
        />
      </label>
      <label>
        Quantity
        <input
          type="number"
          value={avaibleProducts}
          onChange={handleAvaibleProducts}
          min="1"
        />
      </label>
      <button
        disabled={
          productCategory === "" ||
          genreId === 0 ||
          title.length < 3 ||
          price === 0 ||
          avaibleProducts === 0
            ? true
            : false
        }
      >
        Add
      </button>
    </form>
  );
};

export default AddProductToStoreForm;
