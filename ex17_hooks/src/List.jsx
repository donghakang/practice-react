import React from "react";

export default function List(props) {
  let todoList = <div>Loading...</div>;
  if (!props.loading) todoList = props.language.map((item) => <li key={item}>{item}</li>);
  return <ol>{todoList}</ol>;
}
