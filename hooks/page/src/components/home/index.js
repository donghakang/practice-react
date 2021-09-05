import React from "react";
import Header from "../header";
import Description from "./Description";
import { Button } from "@material-ui/core";
import { Link, animateScroll as scroll } from "react-scroll";
function Home() {
  return (
    <>
      <div style={{ height: "100vh", backgroundColor: "pink" }} id="section1">
        <Header home />
        Home
        <Description>
          <code>React Hooks</code> is a React feature that allows users to avoid
          class components
        </Description>
        <Link
          activeClass="active"
          to="section2"
          spy={true}
          smooth={true}
          //   offset={-70}s
          duration={500}
        >
          Find out
        </Link>
      </div>
      <div
        style={{ height: "100vh", backgroundColor: "yellowgreen" }}
        id="section2"
      >
        <Header home />
        <h1>The Benefit of React hooks</h1>
        <Description>
          <ul>
            <li>
              Hooks allow user to reuse stateful logic without changing
              component hierarchy
            </li>
            {/* <li>
              Better with redux, remember that you had to use{" "}
              <code>connect</code> <code>mapStateToProps</code>,{" "}
              <code>mapDispatchToProps</code>? You do not need that anymore
            </li> */}
            <li>
              Hooks allow users to split single component to smaller functions
              based on relationship.
              <code>componentDidMount</code> <code>componentDidUpdate</code>...{" "}
            </li>
            <li>Hooks allow users to avoid complicated classes structure</li>
          </ul>
        </Description>
        <Link
          activeClass="active"
          to="section1"
          spy={true}
          smooth={true}
          //   offset={-70}
          duration={500}
        >
          Hello
        </Link>
      </div>
    </>
  );
}

export default Home;
