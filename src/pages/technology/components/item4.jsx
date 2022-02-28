import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function Item4({technology}) {
  var ip= "http://localhost:2020";
  return(
      <>
       <div className="new__left">
              <Link to={`/layout/logform/${technology.id}`}>
                <img src={ip+technology.Avata[0].url} alt="" srcSet />
              </Link>
              <p>
              <Link to={`/layout/logform/${technology.id}`}>
                {
                    technology.Title
                }
                </Link>
              </p>
            </div>
      </>
  );
}

export default Item4;