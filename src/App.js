import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "./App.scss";

import StoreProvider from "./store/StoreProvider";

function App() {
  return (
    <StoreProvider>
      <Router>
        <div className="wrap">
          <div className="App">
            <Header />
            <Main />
          </div>
        </div>
      </Router>
    </StoreProvider>
  );
}

export default App;
