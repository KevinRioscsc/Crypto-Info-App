import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import './CryptoDetail.css'
import millify from 'millify';
import HTMLReactParser from 'html-react-parser';
import { AiOutlineMoneyCollect, AiOutlineDollarCircle, AiOutlineFundProjectionScreen,AiOutlineExclamationCircle, AiOutlineNumber,AiOutlineFund, AiOutlineTrophy, AiOutlineCheckCircle,AiTwotoneWarning } from 'react-icons/ai';
import LineChart from '../LineChart';
import { useGetCryptoHistoryQuery } from '../../services/cryptoApi';
import { BallTriangle } from 'react-loader-spinner';


const CryptoDetails = () => {
    const {coinId} = useParams();
    const [data, setData] = useState()
    const [timePeriod, setTimePeriod] = useState('7d')
    const [loading, setLoading] = useState(false)
    const {data: coinHistory, isFetching} = useGetCryptoHistoryQuery({coinId, timePeriod})


    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y','5y']
   

    const getData = () => {
        fetch(`https://coinranking1.p.rapidapi.com/coin/${coinId}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "coinranking1.p.rapidapi.com",
                "x-rapidapi-key": "0d3bf83147msh833889ef6e1b1b7p159116jsn726d31bf4258"
            }
        })
        .then(response => response.json().then(res => {
            console.log(res.data.coin)
            setData(res.data.coin)
            setLoading(true)
        }))
        .catch(err => {
            console.error(err);
        });
    }

    useEffect(() => {
        getData()
        
    if(isFetching ){
        return 'loading'
    }
    }, [])
   
  return (
  <div>
      {loading
      ?
      <div className='main-crypto'>
        <h1 className='CryptoInfo black'>{data.name} ({data.symbol}) Price</h1>
        <p className='info black'>{data.name} live price in US dollars. View value statistics, market cap, and supply</p>
        <div className="margin">
        <select defaultValue='7d' name="" id="" className='time-period' placeholder='Select Time Period' onChange={(value) =>setTimePeriod(value.target.value) }>
        {time.map((item, index) => {
            return <option key={item} value={item}>{item}</option>
        })}
        </select>
        <LineChart coinHistory = {coinHistory} currentPrice = {millify(data.price)} coinName = {data.name}/>
        <div className="stats-section">
        
        <div className="stats">
            <div className="stats-title">
                <h1 className='CryptoInfo black other' >{data.name} Value Stats</h1>
                <p className='info black other'>An overview showing the stats of {data.name}</p>
            </div>
            <div className="card-info">
                <div className="width">
                    <div className="card-div">
                        <div className="stats-title2">
                            <AiOutlineDollarCircle/>
                            <p className='black'> Price to USD</p>
                        </div>
                        <h1 className='smaller'>$ {millify(data.price)}</h1>
                    </div>
                    <div className="card-div">
                        <div className="stats-title2">
                            <AiOutlineNumber/>
                            <p className='black'>Rank</p>
                        </div>
                        <h1 className='smaller'>{data.rank}</h1>
                    </div>
                    <div className="card-div">
                        <div className="stats-title2">
                            <AiOutlineDollarCircle/>
                            <p className='black'>Listed At</p>
                        </div>
                        <h1 className='smaller'>$ {millify(data.listedAt)}</h1>
                    </div>
                    
                    <div className="card-div">
                        <div className="stats-title2">
                            <AiOutlineDollarCircle/>
                            <p className='black'>Market Cap</p>
                        </div >
                        <h1 className='smaller'>$ {millify(data.marketCap)}</h1>
                    </div>
                    <div className="card-div">
                        <div className="stats-title2">
                            <AiOutlineTrophy/>
                            <p className='black'>All-time-high(daily avg.)</p>
                        </div>
                        <h1 className='smaller'> $ {millify(data.allTimeHigh.price)}</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="stats">
            <div className="stats-title">
                <h1 className='CryptoInfo black other'>Other Statistics</h1>
                <p className='info other black'>An overview showing the stats of all cryptocurrencies</p>
            </div>
            <div className="card-info">
                <div className="width">
                    <div className="card-div">
                        <div className="stats-title2">
                            <AiOutlineFundProjectionScreen/>
                            <p className='black'>Number Of Markets</p>
                        </div>
                        <h1 className='smaller'>{millify(data.numberOfMarkets)}</h1>
                    </div>
                    <div className="card-div">
                        <div className="stats-title2">
                            <AiOutlineFund/>
                            <p className='black'>Number of Exchanges</p>
                        </div>
                        <h1 className='smaller'>{millify(data.numberOfExchanges)}</h1>
                    </div>
                    <div className="card-div">
                        <div className="stats-title2">
                            <AiOutlineExclamationCircle/>
                            <p className='black'>Approved Supply</p>
                        </div>
                        <h1 className='smaller'>{data.supply.confirmed ? <AiOutlineCheckCircle/> : <AiTwotoneWarning/> }</h1>
                    </div>
                    
                    <div className="card-div">
                        <div className="stats-title2">
                            <AiOutlineExclamationCircle/>
                            <p className='black'>Total Supply</p>
                        </div >
                        <h1 className='smaller'>$ {millify(data.supply.total)}</h1>
                    </div>
                    <div className="card-div">
                        <div className="stats-title2">
                            <AiOutlineExclamationCircle/>
                            <p className='black'>Circulating Supply</p>
                        </div>
                        <h1 className='smaller'> $ {millify(data.supply.circulating)}</h1>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        <div className="second-main">
        <div className="cryptoinfo">
            <h1 className='blue'>What is {data.name}?</h1>
            <div className='black'>
                {HTMLReactParser(data.description)}
            </div>
        </div>
        <div className="cryptoLinks">
            <div className="link-title">
                <h1 className='blue'>{data.name} Links</h1>
            </div>
            <div className="linksCard">
            {data.links.map((item, index) => {
                 return <div className="linksdiv" key={item.name}>
                     <h3 className='black'>{item.type}</h3>
                     <a className='hover black' href={item.url} target='_blank'>{item.name}</a>
                 </div>
            })}
               
            </div>
        </div>
        </div>
      </div>
      :
      <div className="ball">
          <BallTriangle  color='rgb(53, 162, 235)' height= '80' width='80' ariaLabel='loading'/>
        </div>

    }
    
    
  </div>
  )};

export default CryptoDetails;
