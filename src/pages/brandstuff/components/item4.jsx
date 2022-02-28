import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function Item4({brandstuff}) {
  var ip= "http://localhost:2020";
  return(
      <>
       <div className="new__left">
       <Link to={`/layout/logform/${brandstuff.id}`}>
                <img src={ip+brandstuff.Avata[0].url} alt="" srcSet />
              </Link>
              <p>
              <Link to={`/layout/logform/${brandstuff.id}`}>
                  {
                    brandstuff.Title
                  }
                </Link>
              </p>
            </div>
      </>
  );
}

export default Item4;