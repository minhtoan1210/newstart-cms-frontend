import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function Item5({arraylogform}) {
  var ip= "http://localhost:2020";
  var img =arraylogform.Avata[0].url ;

  return(
      <>
      <div className="right-item2-right">
         <Link to={`/layout/logform/${arraylogform.id}`}>
                <img src={ip + img } alt="" srcSet />
            </Link>
                <p className="item2-right-title">
                <Link to={`/layout/logform/${arraylogform.id}`}> 
                 <img src="img/10.png" alt="" srcSet />
                   {arraylogform.Title}
                  </Link>
                </p>
              </div>
      </>
  )
}

export default Item5;