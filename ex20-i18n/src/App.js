import logo from "./logo.svg";

import "./App.css";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            background: "gray",
          }}
        >
          <button onClick={() => handleClick("en")}>English</button>
          <button onClick={() => handleClick("ko")}>Korean</button>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>{t("Title.1")}</p>
      </header>
    </div>
  );
}

export default App;
