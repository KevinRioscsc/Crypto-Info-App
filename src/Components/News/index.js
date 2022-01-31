import React, {useEffect, useState} from 'react';
import NewsCard from '../NewsCard';
import { useGetCryptosQuery } from '../../services/cryptoApi';
import './News.css'
import { BallTriangle } from 'react-loader-spinner';

const News = ({simplified}) => {
  const count = simplified ? 8 : 12
  const [dataNews, setDataNews] = useState([])
  const [catagory, setCatagory] = useState('CryptoCurrency')
  const [loading, setLoading] = useState(false)
  const [coins, setCoins] = useState([])
  const {data} = useGetCryptosQuery(50)
  
  const getData = () => {
    fetch(`https://bing-news-search1.p.rapidapi.com/news/search?q=${catagory}&count=${count}&freshness=Day&textFormat=Raw&safeSearch=Off`, {
        "method": "GET",
        "headers": {
          "accept": "Crypto",
          "x-bingapis-sdk": "true",
          "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
          "x-rapidapi-key": "0d3bf83147msh833889ef6e1b1b7p159116jsn726d31bf4258"
        }
      })
      .then(response => {
        response.json().then(res => {
          console.log(res.value)
          setDataNews(res.value)
          setLoading(true)
        });
      })
      .catch(err => {
        console.error(err);
      });
  }  

  useEffect(() => {
   
    getData()

    return () => {
      setLoading(false)
    }
  }, [catagory])

  const cards = dataNews.map((item) => {
      return <a target='_blank' href={item?.url}><NewsCard articleName={item?.name} date={item?.datePublished} description={item?.description} url={item?.url} articleImg={item?.image?.thumbnail?.contentUrl} orgName={item?.provider[0]?.name} orgImg={item?.provider[0]?.image?.thumbnail?.contentUrl}/></a> 
  })
  return (
    <div className='NewsMain'>
      {
        loading ?
        (
          <div className='margin'>
            
            {!simplified && (
              <div className="select-items">
              <select name="Crypto" id="Crypto" onChange={(e) => {
                setCatagory(e.target.value)
                }}>
                  <option value="" disabled selected>Select A Crypto</option>
                  <option value="CryptoCurrency" >CryptoCurrency</option>
                  {data?.data?.coins.map((item, index) => {
                    return <option value={item.name}>{item.name}</option>
                  })}
              </select>
            </div>

            )}
            
            <div className='flex2'>
              {cards}
            </div>
          </div>)
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

export default News;
