import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function Item5({brandstuff}) {
  var ip= "http://localhost:2020";
  return(
      <>
      <div className="new__middo">
             <Link to={`/layoutstory/story/${brandstuff.id}`}>
                <img src={ip+brandstuff.Avata[0].url} alt="" srcSet />
              </Link>
              <p>
              <Link to={`/layoutstory/story/${brandstuff.id}`}>
                  {
                    brandstuff.Title
                  }
                </Link>
              </p>
            </div>
      </>
  );
}

export default Item5;