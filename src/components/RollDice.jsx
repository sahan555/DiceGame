import styled from "styled-components";
import { Button, OutLineButton } from "../styled/Button";
import Rules from "./Rules";
import { useState } from "react";
const RollDice = ({ resetScore, currentDice, rollTheDice }) => {
  const [rules, SetRules] = useState(false);

  return (
    <Flex>
      <img
        onClick={rollTheDice}
        src={`./dice/dice_${currentDice}.png`}
        alt=""
      />
      <p>Click on Dice to Roll</p>
      <Button onClick={resetScore}>Reset Score</Button>
      <OutLineButton onClick={()=> SetRules(prev => !prev)}>{rules ? "Hide":"Show"} Rules</OutLineButton>
      {rules && <Rules />}
    </Flex>
  );
};

export default RollDice;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    cursor: pointer;
  }
`;
