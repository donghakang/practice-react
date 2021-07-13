import styled from "styled-components";
import Button from "./components/Button";
import { Wrapper } from "./style";
import Theme from "./Theme";

const Title = styled.h1`
  color: red;
  font-size: 10rem;
`;

const Section = styled.section`
  padding: 2rem;
  margin: 2rem;
  background-color: skyblue;
`;

function App() {
  return (
    <>
      {/* <Section>
        <Title>Title</Title>
        <Wrapper>
          <Button primary>Submit</Button>
          <Button>Cancel</Button>
        </Wrapper>
      </Section> */}
      <Theme />
    </>
  );
}

export default App;
