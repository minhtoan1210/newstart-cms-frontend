import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function Item({Avata,id,Title}) {
    var ip= "http://localhost:2020";
    var link =Avata[0].url;
  return(
      <>
      <div className="list-news__itme">
      <Link to={`/layoutstory/story/${id}`}>
                <img src={ip+link} alt="" srcSet />
          </Link>
          <div className="news-itme__content">
          <Link to={`/layoutstory/story/${id}`}>
              <span>
               {Title}
              </span>
            </Link>
          </div>
        </div>
      </>
  )
}

export default Item;