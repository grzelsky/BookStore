import { useContext } from "react";
import { StoreContext } from "../../store/StoreProvider";
import { Route, Switch } from "react-router-dom";
import MainMenu from "../MainMenu/MainMenu";
import ShopPanel from "../ShopPanel/ShopPanel";
import Modal from "../Modal/Modal";
import LoginForm from "../Modal/LoginForm/LoginForm";
import AddProductToStoreForm from "../Modal/AddProductToStoreForm/AddProductToStoreForm";

import "./Main.scss";
const Main = () => {
  const { adminLogged, showModal } = useContext(StoreContext);

  return (
    <main>
      <Switch>
        <Route path="/" exact component={MainMenu} />
        <Route path="/books" exact component={ShopPanel} />
        <Route path="/ebooks" exact component={ShopPanel} />
        <Route path="/audiobooks" exact component={ShopPanel} />
        <Route path="/cart" exact component={ShopPanel} />
      </Switch>
      {showModal && (
        <Modal>{adminLogged ? <AddProductToStoreForm /> : <LoginForm />}</Modal>
      )}
    </main>
  );
};

export default Main;
