import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { changeText } from "../../redux/slice";
import { Container, Textarea } from "./styles";

function EditView() {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.text.text);
  const handleChange = (e) => {
    // console.log("textarea");

    dispatch(changeText(e.target.value));

    console.log(text);
  };
  return (
    <Container>
      <h1>Edit Here</h1>
      <Textarea
        name=""
        id=""
        cols="30"
        rows="10"
        onChange={handleChange}
      ></Textarea>
    </Container>
  );
}

export default EditView;
