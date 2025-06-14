import './first.css';
const TotalScore=(props)=>{
    return(
        
        <div className='score' >
                <h1>{props.sc}</h1>
                <p>Total Score</p>
            </div>
    );
}
export default TotalScore