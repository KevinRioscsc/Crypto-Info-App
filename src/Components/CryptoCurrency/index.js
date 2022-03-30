import React, {useEffect, useState} from 'react';
import { NavBar } from '..';
import Card from '../Card';
import millify from 'millify';
import { BallTriangle } from 'react-loader-spinner';
import './Crypto.css'

const CryptoCurrency = ({simplified}) => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const count = simplified ? 10 : 50


    const getData = () => {
        fetch(`https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers=1&orderBy=marketCap&orderDirection=desc&limit=${count}&offset=0`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "coinranking1.p.rapidapi.com",
                "x-rapidapi-key": "0d3bf83147msh833889ef6e1b1b7p159116jsn726d31bf4258"
            }
        })
        .then(response => response.json().then(data => {
            setData(data.data.coins)
            setLoading(true)
           
        }))
        .catch(err => {
            console.error("this is errror", err);
        });
    }

    useEffect(() => {
        getData()
    }, [])

    
    const runData =  data.map((item, index) => {
      return <Card uid = {item.uuid} index = {index} name = {item.name} img = {item.iconUrl} price={millify(item.price)} market={millify(item.marketCap)} daily={millify(item.change)} color={item.color} />
    })
  return (
    <div className="som">
      { loading
      ?
      <div>
        {
          !simplified && (
            <div className="saerchUp">
              <input type="text" placeholder='Search Crypto' className='input' onChange={(e) => setSearch(e.target.value)}/>
            </div>
          )
        }
        
        <div className='flex'>
          <div className="space3">
          
            {
              runData.filter((item, index) => {
                return item.props.name.toLowerCase().includes(search)
              })
            }
            </div>
        </div>
      </div>
      :
      <div>
      {!simplified && (
        <div className="ball">
          <BallTriangle  color='rgb(53, 162, 235)' height= '80' width='80' ariaLabel='loading'/>
        </div>
      )}
    </div>     
      } 
    </div>
  )};

export default CryptoCurrency;
