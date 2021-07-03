import Header from "../Header";
import Footer from "../Footer";
import MarbleEffect from "./MarbleEffect";
import Model from "./Environment";
export default function App() {
  return (
    <>
      <Header />
      <MarbleEffect />
      Home
      {/* <Footer /> */}
      <Model backgroundColor={"#ff0000"} />
    </>
  );
}
