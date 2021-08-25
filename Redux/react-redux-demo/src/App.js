import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainerHook from "./components/CakeContainerHook";
import IceCreamContainer from "./components/IceCreamContainer";
import IceCreamContainerHook from "./components/IceCreamContainerHook";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer />
        <ItemContainer cake />

        <CakeContainer />
        <CakeContainerHook />
        <NewCakeContainer />
        <IceCreamContainer />
        <IceCreamContainerHook />
      </div>
    </Provider>
  );
}

export default App;
