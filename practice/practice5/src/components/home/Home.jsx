import Header from "../Header";
import FooterComponent from "../FooterComponent";
import MarbleEffect from "./MarbleEffect";
import Model from "./Environment";
import Introduction from "./Introduction";
export default function App() {
  return (
    <div className="home">
      <Header />
      <div className="visual-effect">
        <MarbleEffect />
        <Model backgroundColor={"#ff0000"} />
      </div>

      <Introduction />
      {/* <FooterComponent /> */}
      {/* <Footer /> */}
    </div>
  );
}
