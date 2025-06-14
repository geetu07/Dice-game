import './first.css';
import { Link } from 'react-router-dom';

function First(){
    return(
        <div className="content">
        <img alt='dice' src='/src/assets/dices1.png' />
        <div className='x' >
        <h1>DICE GAME</h1>
        <Link to="/second"><button className='bt' >Play now</button></Link>
        </div>
        </div>
    );
}

export default First