import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function Item1({video,arrayadvertisements}) {
  var ip= "http://localhost:2020";
  return(
      <>
      <div className="page__home-content">
          <div className="left">
            <div className="left__header">
            <Link to={`/video/${video.id}`}>
                  <img src={ip+video.Avata[0].url} />
              </Link>
              <div className="left-title">
                  <Link to={`/video/${video.id}`}>
                   {video.Title}
                </Link>
                <p>{
                    video.Description
                }</p>
              </div>
              <div className="left-quangcao">
                <a href={arrayadvertisements[0].VideoAdvertisementRightContent}>
                <img className="left-quangcao-img" src={ip+arrayadvertisements[0].VideoAdvertisementRight[0].url} alt="" />
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