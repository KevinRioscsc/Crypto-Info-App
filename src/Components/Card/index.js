
import './Card.css'
import { Link } from 'react-router-dom';

const Card = ({index, name, price, market, daily, img, color, uid}) => {
    
  return (
    <div>
        <Link to = {`/Crypto/${uid}`} >
        <div className="card">
            <div className="cardTitle">
                <h1>{`${index + 1}: ${name}`}</h1>
                <img src={img} alt="" height={40} />
            </div>
            <div className="cardInfo">
                <div className="price black">
                    <p className='black'>{`Price: ${price}`}</p>
                </div>
                <div className="MarketCap black">
                    <p className='black'>{`Market Cap: ${market}`}</p>
                </div>
                <div className="Daily black">
                    <p className='black'> {`Daily Change: ${daily}%`}</p>
                </div>
            </div>
            
        </div>
        </Link>
    </div>
  )};

export default Card;
