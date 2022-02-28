import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function Item4({video}) {
  var ip= "http://localhost:2020";
  return(
      <>
       <div className="new__left">
               <Link to={`/video/${video.id}`}>
                <img src={ip+video.Avata[0].url} alt="" srcSet />
              </Link>
              <p>
              <Link to={`/video/${video.id}`}>
                  {
                    video.Title
                  }
                </Link>
              </p>
            </div>
      </>
  );
}

export default Item4;