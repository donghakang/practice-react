import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import MyInfo from "./MyInfo";

// function을 또한 만들 수 있다.
function MyApp() {
    return (
        <div>
            <Header />
            <MyInfo />
            <Footer />
        </div>
    );
}

export default MyApp;
