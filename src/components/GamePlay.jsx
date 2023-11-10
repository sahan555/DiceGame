import { useState } from "react";

import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import styled from "styled-components";

const GamePlay = () => {
  const [score, SetScore] = useState(0);
  const [selectedNumber, SetSelectedNumber] = useState();
  const [currentDice, SetCurrentDice] = useState(1);
  const [error, SetError] = useState("");

  const generateRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollTheDice = () => {
    if (!selectedNumber) {
      SetError("Number select vako xaina");
      return;
    }
    const randomNumber = generateRandom(1, 7);
    SetCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      SetScore((prev) => prev + randomNumber);
    } else {
      SetScore((prev) => prev - 1);
    }
    SetSelectedNumber(undefined);
  };
  const resetScore = () => {
    SetScore(0);
  };

  return (
    <main>
      <Container>
        <Flex>
          <Score>
            <h1>{score}</h1>
            <b>Total Score</b>
          </Score>
          <Numberwrapper>
            <NumberSelector
              error={error}
              SetError={SetError}
              selectedNumber={selectedNumber}
              SetSelectedNumber={SetSelectedNumber}
            />
          </Numberwrapper>
        </Flex>
        <RollDice currentDice={currentDice} rollTheDice={rollTheDice} resetScore={resetScore} />
      </Container>
    </main>
  );
};

export default GamePlay;

const Container = styled.div`
  max-width: 1180px;
  width: 100%;
  margin: auto;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Score = styled.div``;
const Numberwrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
