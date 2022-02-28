import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function Item3({fashion}) {
  var ip= "http://localhost:2020";
  return(
      <>
       <div className="new__middo">
       <Link to={`/layoutstory/story/${fashion.id}`}>
                <img src={ip+fashion.Avata[0].url} alt="" srcSet />
        </Link>
              <p>
              <Link to={`/layoutstory/story/${fashion.id}`}>
              {
                fashion.Title
              }
                </Link>
              </p>
            </div>
      </>
  );
}

export default Item3;