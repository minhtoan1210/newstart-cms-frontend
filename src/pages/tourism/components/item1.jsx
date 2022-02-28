import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function Item1({tourism,arrayadvertisements}) {
  var ip= "http://localhost:2020";
  return(
      <>
      <div className="page__home-content">
          <div className="left">
            <div className="left__header">
            <Link to={`/tourism/${tourism.id}`}>
                <img src={ip+tourism.Avata[0].url} alt="" srcSet />
              </Link>
              <div className="left-title">
              <Link to={`/tourism/${tourism.id}`}>{tourism.Title}</Link>
                <p>
                {
                    tourism.Description
                }
                </p>
              </div>
              <div className="left-quangcao">
                <a href={arrayadvertisements[0].TourismAdvertisementRightContent}>
                <img className="left-quangcao-img" src={ip+arrayadvertisements[0].TourismAdvertisementRight[0].url} alt="" />
                </a>
              </div>
            </div>
            <div className="left-content">
            </div>
          </div>
          <div className="right">
          </div>
        </div>
      </>
  );
}

export default Item1;