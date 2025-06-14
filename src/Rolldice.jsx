import { useState } from "react";
import styled from "styled-components";

function Rolldice({Rolldice,currentDice}){
    return (
        <DiceContainer>
        <div className="dice" onClick={Rolldice} >
            <img src={`/src/assets/dice_${currentDice}.png`} alt="dice" />
            <p>Click on Dice to roll</p>
        </div>
        </DiceContainer>
    );
}

export default Rolldice;

const DiceContainer= styled.div`
   display :flex ;
   align-items: center;
   justify-content: center;
   margin-top: 10px;
   flex-direction: column;
    p{
        font-size: 24px;
        text-align: center;
    }
    .dice{
        cursor: pointer;
    }
`