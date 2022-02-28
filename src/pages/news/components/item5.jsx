import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function Item5({news}) {
  var ip= "http://localhost:2020";
  return(
      <>
      <div className="new__middo">
      <Link to={`/layoutstory/story/${news.id}`}>
                <img src={ip+news.Avata[0].url} alt="" srcSet />
              </Link>
              <p>
              <Link to={`/layoutstory/story/${news.id}`}>
                  {
                    news.Title
                  }
                </Link>
              </p>
            </div>
      </>
  );
}

export default Item5;