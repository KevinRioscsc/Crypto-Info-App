import React, {useEffect, useState}  from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
import {CryptoCurrency,News} from './index'
import millify from 'millify';
import { BallTriangle } from 'react-loader-spinner';





const Home = () => {
   // const {data, isFetching} = useGetCryptosQuery()
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)
    

    const getData = () => {
       fetch("https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "coinranking1.p.rapidapi.com",
                "x-rapidapi-key": "0d3bf83147msh833889ef6e1b1b7p159116jsn726d31bf4258"
            }
        }).then(response => response.json().then(data => {
            
            console.log(response)
            setData(data?.data?.stats)
            setLoading(true)
           
        }))
        .catch(err => {
            console.error("this is errror", err);
        });
        
    }

    

    useEffect(() => {
        getData()
        

    }, [])
    
  return (
        <div className='Home'>
           
            {loading 
                ?
                (
                <div className='space2'>
                 <div className="grid">
                    <h2 className='title'>Global Crypto Stats</h2>
                        <div className="heading">
                            <p className='total'>Total Cryptocurrencies</p>
                            <h2 className='white'>{data.totalCoins}</h2>
                        </div>
                        <div className="heading2">
                            <p className='total'>Total Exchanges</p>
                            <h2  className='white'> {millify(data.totalExchanges)}</h2>
                        </div>
                        <div className="heading3">
                            <p className='total'>Total Market Cap</p>
                            <h2  className='white'>{millify(data.totalMarketCap)}</h2>
                        </div>
                        <div className="heading4">
                            <p className='total'>Total 24h Volume</p>
                            <h2  className='white'> {millify(data.total24hVolume)}</h2>
                        </div>
                        <div className="heading5">
                            <p className='total'>Total Markets</p>
                            <h2  className='white'>{millify(data.totalMarkets)}</h2>
                        </div>
                        
                        
                </div>
                <div className="CryptoTitle">
                    <h2 className='title2'>Top 10 Crypto</h2>
                    <Link className='link' to={'/Crypto'}>Show More</Link>
                </div>
                
                <CryptoCurrency simplified/>
                <div className="CryptoTitle">
                    <h2 className='title2'>Latest News</h2>
                    <Link className='link'to={'/News'}>Show More</Link>
                </div>
                <News simplified/>
            </div>
            )
        :
        <div className="ball">
            <BallTriangle  color='rgb(53, 162, 235)' height= '80' width='80' ariaLabel='loading'/>
        </div>}
           
        </div>
  )}

export default Home;
