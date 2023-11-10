// import styled from "styled-components";
import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

// const Button =styled.button`
//   background-color: blue;
//   color: white;
// `
function App() {
  const [isGameStarted,setIsGameStarted] = useState(false);

  const toggleGamePlay = () =>{
    setIsGameStarted((prev)=> !prev);
  }
  return (
  <>
  {/* <Button>Button ho hai ta</Button>   */}
  {isGameStarted ? <GamePlay/> : <StartGame toggle={toggleGamePlay}/>}

  </>
  )
}

export default App
