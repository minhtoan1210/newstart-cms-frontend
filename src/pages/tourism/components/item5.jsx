import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function Item5({tourism}) {
  var ip= "http://localhost:2020";
  return(
      <>
      <div className="new__middo">
              <Link to={`/layoutstory/story/${tourism.id}`}>
                <img src={ip+tourism.Avata[0].url} alt="" srcSet />
              </Link>
              <p>
              <Link to={`/layoutstory/story/${tourism.id}`}>
                  {
                    tourism.Title
                  }
                </Link>
              </p>
            </div>
      </>
  );
}

export default Item5;