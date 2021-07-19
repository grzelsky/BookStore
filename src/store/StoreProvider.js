import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext();
let index = 0;
const StoreProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [genres, setGenres] = useState([]);
  const [books, setBooks] = useState([]);
  const [eBooks, setEBooks] = useState([]);
  const [audioBooks, setAudioBooks] = useState([]);
  const [users, setUsers] = useState([]);
  const [genreId, setGenreId] = useState([]);
  const [productsRender, setProductsRender] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [adminLogged, setAdminLogged] = useState(false);
  const [cart, setCart] = useState([]);

  const categoriesAPI = "http://localhost:3001/categories";
  const genreAPI = "http://localhost:3001/genres";
  const booksAPI = "http://localhost:3001/books";
  const eBooksAPI = "http://localhost:3001/eBooks";
  const audioBooksAPI = "http://localhost:3001/audioBooks";
  const usersAPI = "http://localhost:3001/usersData";
  const mainAPI = "http://localhost:3001";

  const fetchDataCategories = async () => {
    const response = await fetch(categoriesAPI);
    const data = await response.json();
    setCategories(data);
    // console.log(data);
  };
  const fetchDataGenres = async () => {
    const response = await fetch(genreAPI);
    const data = await response.json();
    setGenres(data);
  };
  const fetchDataBooks = async () => {
    const response = await fetch(booksAPI);
    const data = await response.json();
    setBooks(data);
  };
  const fetchDataEBooks = async () => {
    const response = await fetch(eBooksAPI);
    const data = await response.json();
    setEBooks(data);
  };
  const fetchDataAudioBooks = async () => {
    const response = await fetch(audioBooksAPI);
    const data = await response.json();
    setAudioBooks(data);
  };
  const fetchDataUsers = async () => {
    const response = await fetch(usersAPI);
    const data = await response.json();
    setUsers(data);
  };
  const modalOn = () => setShowModal((prevValue) => !prevValue);
  const handleAdminLogged = () => setAdminLogged((prevValue) => !prevValue);
  const filterProducts = (e) => {
    const index = parseInt(e.target.id);
    setGenreId(index);
    setProductsRender(!true);
  };
  const changeProductsRender = () => setProductsRender(true);
  const addProductToStore = async (data) => {
    await fetch(`${mainAPI}/${data.category}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    fetchDataBooks();
    fetchDataEBooks();
    fetchDataAudioBooks();
  };
  const deleteProductFromStore = async (data) => {
    await fetch(`${mainAPI}/${data.category}/${data.id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    fetchDataBooks();
    fetchDataEBooks();
    fetchDataAudioBooks();
  };

  const handleBuyQuantity = (id, e, products, product) => {
    if (e.target.className === "addButton") {
      let updatedProducts = products.map((product) =>
        product.id === id
          ? { ...product, buyQuantity: product.buyQuantity + 1 }
          : product
      );
      if (product.category === "books") {
        setBooks(updatedProducts);
      } else if (product.category === "eBooks") {
        setEBooks(updatedProducts);
      } else if (product.category === "audioBooks") {
        setAudioBooks(updatedProducts);
      }
    } else if (e.target.className === "subtractButton") {
      let updatedProducts = products.map((product) =>
        product.id === id
          ? { ...product, buyQuantity: product.buyQuantity - 1 }
          : product
      );
      if (product.category === "books") {
        setBooks(updatedProducts);
      } else if (product.category === "eBooks") {
        setEBooks(updatedProducts);
      } else if (product.category === "audioBooks") {
        setAudioBooks(updatedProducts);
      }
    }
  };

  const handleAddProductToCart = (product, products, id) => {
    const productInCart = {
      id: index++,
      name: product.title,
      toPay: product.buyQuantity * product.price,
      quantity: product.buyQuantity,
      category: product.category,
    };
    let updatedProducts = products.map((product) =>
      product.id === id
        ? {
            ...product,
            avaibleProducts: product.avaibleProducts - product.buyQuantity,
          }
        : product
    );
    if (product.category === "books") {
      setBooks(updatedProducts);
    } else if (product.category === "eBooks") {
      setEBooks(updatedProducts);
    } else if (product.category === "audioBooks") {
      setAudioBooks(updatedProducts);
    }

    setCart((prevValue) => [...prevValue, productInCart]);
  };
  const subtractProductFromCart = (id, product) => {
    const newCart = cart.filter((cart) => cart.id !== id);
    setCart(newCart);

    if (product.category === "books") {
      let updatedProducts = books.map((book) =>
        book.title === product.name
          ? {
              ...book,
              avaibleProducts: book.avaibleProducts + product.quantity,
            }
          : book
      );
      setBooks(updatedProducts);
    } else if (product.category === "eBooks") {
      let updatedProducts = eBooks.map((eBook) =>
        eBook.title === product.name
          ? {
              ...eBook,
              avaibleProducts: eBook.avaibleProducts + product.quantity,
            }
          : eBook
      );
      setEBooks(updatedProducts);
    } else if (product.category === "audioBooks") {
      let updatedProducts = audioBooks.map((audioBook) =>
        audioBook.title === product.name
          ? {
              ...audioBook,
              avaibleProducts: audioBook.avaibleProducts + product.quantity,
            }
          : audioBook
      );
      setAudioBooks(updatedProducts);
    }
  };
  const emptyCart = () => setCart([]);
  useEffect(() => {
    fetchDataCategories();
    fetchDataGenres();
    fetchDataBooks();
    fetchDataEBooks();
    fetchDataAudioBooks();
    fetchDataUsers();
  }, []);

  return (
    <StoreContext.Provider
      value={{
        categories,
        setCategories,
        genres,
        setGenres,
        books,
        setBooks,
        eBooks,
        setEBooks,
        audioBooks,
        setAudioBooks,
        users,
        filterProducts,
        genreId,
        productsRender,
        changeProductsRender,
        modalOn,
        showModal,
        adminLogged,
        handleAdminLogged,
        addProductToStore,
        deleteProductFromStore,
        handleBuyQuantity,
        handleAddProductToCart,
        cart,
        subtractProductFromCart,
        emptyCart,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
