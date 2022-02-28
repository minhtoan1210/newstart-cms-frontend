import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function Item2({living}) {
  var ip= "http://localhost:2020";
  return(
      <>
        <div className="new__left">
              <Link to={`/layout/logform/${living.id}`}>
                <img src={ip+living.Avata[0].url} alt="" srcSet />
              </Link>
              <p>
                <Link to={`/layout/logform/${living.id}`}>
                {
                    living.Title
                  }
                </Link>
              </p>
            </div>
      </>
  );
}

export default Item2;