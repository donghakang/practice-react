import React from "react";
import ReactDOM from "react-dom";
import Button from "../button";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom"

import renderer from 'react-test-renderer'


afterEach(cleanup);
it ('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Button></Button>, div)
})

it("renders button correctly 1", () => {
    const { getByTestId } = render(<Button label="click me please"></Button>);
    // if I get test id button, it should have "click me please"
    expect(getByTestId('button')).toHaveTextContent("click me please")
})

it("renders button correctly 2", () => {
    const { getByTestId } = render(<Button label="click me now"></Button>);
    // if I get test id button, it should have "click me please"
    expect(getByTestId('button')).toHaveTextContent("click me now")
})

// snapshot testing --> saves snapshot
// when changes ... it will give a fail since it will compare with snapshot.
it ("matches snapshot", () => {
    const tree = renderer.create(<Button label="save"></Button>).toJSON();
    expect(tree).toMatchSnapshot();
});