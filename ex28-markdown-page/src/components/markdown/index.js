import React from "react";
import { useSelector } from "react-redux";
import { Container } from "./styles";

function markdownText(text) {
  console.log(text.split("\n"));
  // textArr = text.split('\n');
  return text.replace('\n', '<br/>')
}

function MarkdownView() {
  const text = useSelector((state) => state.text.text);
  return (
    <Container>
      <h1>Markdown View</h1>
      <div dangerouslySetInnerHTML={{ __html: markdownText(text) }} />
    </Container>
  );
}

export default MarkdownView;
