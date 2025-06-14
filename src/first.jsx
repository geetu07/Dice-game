import './first.css';
import { Link } from 'react-router-dom';
import dice1 from './assets/dice_1.png';


function First(){
    return(
        <div className="content">
        <img alt='dice' src={dice1} />
        <div className='x' >
        <h1>DICE GAME</h1>
        <Link to="/second"><button className='bt' >Play now</button></Link>
        </div>
        </div>
    );
}

export default First