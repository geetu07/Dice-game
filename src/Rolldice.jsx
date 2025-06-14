import { useState } from "react";
import styled from "styled-components";
import dice1 from './assets/dice_1.png';
import dice2 from './assets/dice_2.png';
import dice3 from './assets/dice_3.png';
import dice4 from './assets/dice_4.png';
import dice5 from './assets/dice_5.png';
import dice6 from './assets/dice_6.png';
const diceImages = [null, dice1, dice2, dice3, dice4, dice5, dice6];


function Rolldice({Rolldice,currentDice}){
    return (
        <DiceContainer>
        <div className="dice" onClick={Rolldice} >
            <img src={diceImages[currentDice]}  alt="dice" />
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