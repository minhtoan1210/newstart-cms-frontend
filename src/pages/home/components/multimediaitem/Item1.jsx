import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function Index({arraylogform}) {
  var ip= "http://localhost:2020";
  var img =arraylogform.Avata[0].url ;
  return (
      <>
      <div className="home-content-left">
          <Link to={`/layout/logform/${arraylogform.id}`}>
            <img src={ip + img } alt="" srcSet />
            </Link>
            <p className="title">
            <Link to={`/layout/logform/${arraylogform.id}`}> 
            <img src="img/10.png" alt="" srcSet />
               {arraylogform.Title}
              </Link>
            </p>
            <p className="sub-text">
              {arraylogform.Description}
            </p>
          </div>
          </>
  )
}

export default Index;