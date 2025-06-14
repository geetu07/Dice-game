import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./Rolldice";
import styled from "styled-components";
import { useState } from 'react';
import Rules from "./rules";

function Second(){
    const [score,setScore]=useState(0);
    const [selectedNumber,setSelectedNumber]=useState();
    const [currentDice, setCurrentDice]=useState(1);
    const [showRules,setShowRules]=useState(false);
    const [error,setError]=useState("");

    const generateRandomNumber= (min,max)=>{
        return Math.floor(Math.random()*(max-min)+min);
    }


    const Rolldice=()=>{
        if(!selectedNumber){
            setError("You have not selected a number.");
            return;
        }

        const randomNumber=generateRandomNumber(1,7);
        setCurrentDice((prev)=>randomNumber);

        if(!selectedNumber)return;

        if(selectedNumber===randomNumber){
            setScore(s=>s+randomNumber);
        }
        else{
            setScore(s=>s-2);
        }
        setSelectedNumber(undefined);

    } 

    const reset=()=>{
        setScore(0);
    }

    return (
        <MainContainer>
            <div className="top_section">
                <TotalScore sc={score}/>
                <NumberSelector selectedNumber={selectedNumber}
                setSelectedNumber={setSelectedNumber} error={error} setError={setError}/>
            </div>
            <RollDice currentDice={currentDice} Rolldice={Rolldice} />

            <div className="btns">
                <button className="c" onClick={reset} >Reset Score</button>
                <button className="co" onClick={()=>setShowRules(prev=>!prev)} >{showRules? "Hide":"Show"} Rules</button>
            </div>
           {showRules && <Rules />} 

        </MainContainer>
    );
}

export default Second;

const MainContainer=styled.main`
    .top_section{
        display: flex;
        justify-content: space-around;
        align-items: end;
    }
    .btns{
        display: flex;
        flex-direction: column;
        justify-content: center;
   
        align-items: center;
        gap: 10px;
    }
    .c{
        height: 44px;
        width: 220px;
        background-color: black;
        color: white;
        transition: 0.4s background ease-in;
    }
    .c:hover{
        background-color: white;
        color: black;
        transition: 0.3s background ease-in;
    }
    .co{
        height: 44px;
        width: 220px;
        background-color: white;
        color: black;
        transition: 0.4s background ease-in;
    }
    .co:hover{
        background-color: black;
        color: white;
        transition: 0.3s background ease-in;
    }
`;