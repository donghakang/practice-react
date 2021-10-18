import styled from "styled-components";
import EditView from "./components/edit";
import MarkdownView from "./components/markdown";

const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
`;

function App() {
  return (
    <Container>
      <EditView />
      <MarkdownView />
    </Container>
  );
}

export default App;
