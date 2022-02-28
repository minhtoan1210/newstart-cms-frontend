import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function Item5({technology}) {
  var ip= "http://localhost:2020";
  return(
      <>
      <div className="new__middo">
      <Link to={`/layoutstory/story/${technology.id}`}>
                <img src={ip+technology.Avata[0].url} alt="" srcSet />
              </Link>
              <p>
              <Link to={`/layoutstory/story/${technology.id}`}>
                {
                    technology.Title
                }
                </Link>
              </p>
            </div>
      </>
  );
}

export default Item5;