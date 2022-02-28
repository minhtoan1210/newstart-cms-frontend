import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function Item1({fashion,arrayadvertisements}) {
  var ip= "http://localhost:2020";
  return(
      <>
      <div className="page__home-content" >
          <div className="left" >
            <div className="left__header">
            <Link to={`/fashion/${fashion.id}`}>
                <img src={ip+fashion.Avata[0].url} alt="" srcSet />
              </Link>
              <div className="left-title">
              <Link to={`/fashion/${fashion.id}`}>{fashion.Title}</Link>
                <p>
                  {
                    fashion.Description
                  }
                </p>
              </div>
              <div className="left-quangcao">
                <a href={arrayadvertisements[0].FashionAdvertisementRightContent}>
                <img className="left-quangcao-img" src={ip+arrayadvertisements[0].FashionAdvertisementRight[0].url} alt="" />
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