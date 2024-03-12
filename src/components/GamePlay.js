import React from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDice from "./RollDice";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

function GamePlay() {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1)
  const [score, setScore] = useState(0)
  const [error, setError] = useState()
  const [showRules, setShowRules] = useState(false)

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if(selectedNumber){
    

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    
    setSelectedNumber(undefined);
    
  }else{
    setError("You have not selected any number")
  }
  };

  return (
    <MainContainer>
      <div className="top_content">
        <TotalScore score={score}/>
        <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} error={error} setError={setError}/>
      </div>
      <RollDice currentDice={currentDice} roleDice={roleDice}/>
      <div className="btns">
      <OutlineButton onClick={()=>setScore(0)}>Reset Score</OutlineButton>
      <Button onClick={()=>setShowRules((prev)=> !prev)}>{showRules ? "Hide" : "Show"} Rules</Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
}

export default GamePlay;

const MainContainer = styled.main`
.top_content{
    display: flex;
    align-items: end;
    justify-content: space-between;
}

.btns {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  margin-top: 20px;
}

margin: 15px;
height: calc(100vh-135px);
`;
