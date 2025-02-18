import styled from "styled-components";
import IdealTypeGame from "./components/IdealTypeGame";

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(to right, #fbc2eb, #a6c1ee);
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  color: white;
  margin-bottom: 2rem;
`;

function App() {
  return (
    <AppContainer>
      <Title>이상형 월드컵 소개팅</Title>
      <IdealTypeGame />
    </AppContainer>
  );
}

export default App;
