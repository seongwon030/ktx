import styled from "styled-components";
const ResultContainer = styled.div`
  text-align: center;
`;

const ResultTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1rem;
`;

const WinnerCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: inline-block;
`;

const WinnerName = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  padding: 1rem;
`;

function ResultPage({ winner }) {
  return (
    <ResultContainer>
      <ResultTitle>최종 우승자</ResultTitle>
      <WinnerCard>
        <img
          src={winner.image || "/placeholder.svg"}
          alt={winner.name}
          width={400}
          height={400}
          layout="responsive"
        />
        <WinnerName>{winner.name}</WinnerName>
      </WinnerCard>
    </ResultContainer>
  );
}

export default ResultPage;
