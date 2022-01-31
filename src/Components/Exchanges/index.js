import React, {useState, useEffect} from 'react';
import './exchange.css'
import millify from 'millify';
import { AiFillCheckCircle } from 'react-icons/ai';
import { FaExclamationTriangle } from "react-icons/fa";
import { BallTriangle } from 'react-loader-spinner';
const Exchanges = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  

  const getData = () => {
    fetch("https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/exchanges?referenceCurrencyUuid=yhjMzLPhuIDl&limit=50&offset=0&orderBy=24hVolume&orderDirection=desc", {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "coinranking1.p.rapidapi.com",
          "x-rapidapi-key": "0d3bf83147msh833889ef6e1b1b7p159116jsn726d31bf4258"
        }
      })
      .then(response => response.json().then(res => {
        setData(res.data.exchanges)
        setLoading(true)
      }))
      .catch(err => {
        console.error(err);
      });
  }

  useEffect(() => {
    getData()
  }, [])
  return (
        <div>
          {
            loading
            ?
            <div className="exchange-main">
                
                <div className="table shadow">
                <div className="exchangeTitle visible2 black">
                  <h3 className='exchanges black'>Exchanges</h3>
                  <h3 className='markets black'>Markets</h3>
                  <h3 className='priceEx black'>(BTC)Price</h3>
                  <h3 className='rec black'>Recommended</h3>
                </div>
                  {
                    data.map(item => {

                     return <a href={item.coinrankingUrl} target={'_blank'}>
                        <div className="cols black">
                        <div className="cols-title black">
                          <h4>{item.rank}.</h4>
                          <img src={item.iconUrl} alt="logo" height={30}/>
                          <h4 className='font '>{item.name}</h4>
                        </div>
                        <div className="data">
                          <h5 className='visible'>Markets: </h5>
                          <h5>{item.numberOfMarkets}</h5>
                        </div>
                        <div className="priceExchange">
                          <h5 className='visible'>(BTC)Price: </h5>
                          <h5>{millify(item.price)}</h5>
                        </div>
                        <div className="recommend">
                          <h5 className='visible'>Recommend: </h5>
                          {item.recommended ? <AiFillCheckCircle/> : <FaExclamationTriangle/>}
                        </div>
                      </div>
                      </a>
                    })
                  }
                  
                </div>
            </div>
            :
            <div className="ball">
            <BallTriangle  color='rgb(53, 162, 235)' height= '80' width='80' ariaLabel='loading'/>
            </div>
          }
        </div>
  )};

export default Exchanges;
