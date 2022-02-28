import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function Item2({fashion}) {
  var ip= "http://localhost:2020";
  return(
      <>
        <div className="new__left">
              <Link to={`/layout/logform/${fashion.id}`}>
                <img src={ip+fashion.Avata[0].url} alt="" srcSet />
              </Link>
              <p>
              <Link to={`/layout/logform/${fashion.id}`}>
                  {
                    fashion.Title
                  }
                </Link>
              </p>
            </div>
      </>
  );
}

export default Item2;