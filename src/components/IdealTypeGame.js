"use client";

import { useState, useEffect } from "react";
import styled from "styled-components";
import ImageCard from "./ImageCard";
import ResultPage from "./ResultPage";

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RoundTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  color: white;
  margin-bottom: 1rem;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const initialCandidates = [
  { id: 1, name: "후보 1", image: "../1.jpeg?height=200&width=200" },
  { id: 2, name: "후보 2", image: "../2.jpeg??height=300&width=300" },
  { id: 3, name: "후보 3", image: "../3.jpeg??height=300&width=300" },
  { id: 4, name: "후보 4", image: "../4.jpeg??height=300&width=300" },
  { id: 5, name: "후보 5", image: "../5.jpeg??height=300&width=300" },
  { id: 6, name: "후보 6", image: "../6.jpeg?height=300&width=300" },
  { id: 7, name: "후보 7", image: "../7.jpeg??height=300&width=300" },
  { id: 8, name: "후보 8", image: "../8.jpeg?height=300&width=300" },
];

function IdealTypeGame() {
  const [candidates, setCandidates] = useState(initialCandidates);
  const [currentRound, setCurrentRound] = useState(1);
  const [currentPair, setCurrentPair] = useState([]);
  const [winner, setWinner] = useState(null);
  const [roundWinners, setRoundWinners] = useState([]);

  useEffect(() => {
    if (candidates.length > 1) {
      setCurrentPair([candidates[0], candidates[1]]);
    }
  }, [candidates]);

  const handleSelection = (selected) => {
    if (currentRound === 3) {
      // 결승전
      setWinner(selected);
    } else {
      setRoundWinners([...roundWinners, selected]);

      if (candidates.length > 2) {
        setCandidates(candidates.slice(2));
      } else {
        setCurrentRound(currentRound + 1);
        setCandidates(roundWinners.concat(selected));
        setRoundWinners([]);
      }
    }
  };

  if (winner) {
    return <ResultPage winner={winner} />;
  }

  return (
    <GameContainer>
      <RoundTitle>
        {currentRound === 1 ? "8강" : currentRound === 2 ? "4강" : "결승"}
      </RoundTitle>
      <CardContainer>
        {currentPair.map((candidate) => (
          <ImageCard
            key={candidate.id}
            candidate={candidate}
            onSelect={() => handleSelection(candidate)}
          />
        ))}
      </CardContainer>
    </GameContainer>
  );
}

export default IdealTypeGame;
