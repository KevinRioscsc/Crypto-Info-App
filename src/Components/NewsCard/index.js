import React from 'react';
import './news.css'
import moment from 'moment';

const NewsCard = ({articleName, date, description, url, articleImg, orgName, orgImg }) => {
  return (
    <div >
        <div className="card2">
            <div className="cardTitle2">
                <h1 className='small black'>{articleName}</h1>
                <img src={articleImg} alt="" height={100} />
            </div>
            <div className="cardInfo2">
                <div className="price">
                    <p className='black'>{description}</p>
                </div>
            </div>
            <div className="cardComp">
                <div className="org">
                    <img src={orgImg} alt="" height={40}/>
                    <p className='black'>{orgName}</p>
                </div>
                <p className='black'>{moment(date).startOf('ss').fromNow()}</p>
            </div>
        </div>
    </div>
  )};

export default NewsCard;
