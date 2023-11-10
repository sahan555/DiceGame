import styled from "styled-components";
import { Button } from "../styled/Button";



const StartGame = ({toggle}) => {
  return (
    <Dice_front>
      <figure>
        <img src="dices.png" alt=""/>
      </figure>
      <div className="f_content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Start Game</Button>
      </div>
    </Dice_front>
  )
}

export default StartGame

const Dice_front = styled.div`
    width: 100%;
    max-width: 1180px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

