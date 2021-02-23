import React from "react";
import MenuItem from "./MenuItem.js";
function App() {
    return (
        <div className="App">
            <MenuItem link="https://www.github.com" name="GitHub" />
            <MenuItem link="https://www.naver.com" name="Naver"/>
            <MenuItem link="https://www.facebook.com" name="Facebook"/>
            <MenuItem link="https://www.instagram.com" name="Instagram"/>
        </div>
    );
}

export default App;
