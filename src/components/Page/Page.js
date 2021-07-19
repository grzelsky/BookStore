import { Route, Switch } from "react-router-dom";
import Books from "./Books/Books";
import EBooks from "./EBooks/EBooks";
import AudioBooks from "./AudioBooks/AudioBooks";
import Cart from "./Cart/Cart";

const Page = () => {
  return (
    <>
      <Switch>
        <Route path="/books" exact component={Books} />
        <Route path="/ebooks" exact component={EBooks} />
        <Route path="/audiobooks" exact component={AudioBooks} />
        <Route path="/cart" exact component={Cart} />
      </Switch>
    </>
  );
};

export default Page;
