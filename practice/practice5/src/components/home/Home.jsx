import Header from "../Header";
import FooterComponent from "../FooterComponent";
import MarbleEffect from "./MarbleEffect";
import Model from "./Environment";
import Introduction from "./Introduction";
export default function App() {
  return (
    <div
      style={{
        overflowY: "hidden",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Header />
      <MarbleEffect />
      <Introduction />
      <FooterComponent />
      {/* <Footer /> */}
      <Model backgroundColor={"#ff0000"} />
    </div>
  );
}
