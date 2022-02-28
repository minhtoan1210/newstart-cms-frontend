import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function Item({Avata,Title,id}) {
    var ip = 'http://localhost:2020';
  return(
      <>
      <div className="card padding">
          <div className="slider-content-img">
            <img className="slider-img-img" src={ip + Avata[0].url} alt="" />
            <div className="slider-content-ovelay">
            <Link to={`/layoutstory/story/${id}`} className="content-slider">
                <div className="content-ovelay">
                </div>
              </Link>
            </div>
            <div className="content-img-story">
              <span>story</span>
            </div>
            <div className="content-img-title">
              <div className="content-title-img">
                <p>{Title}</p>
              </div>
            </div>
            <div className="content-img-camera">
              <div className="img-camera">
                <img className="camera" src="img/11.png" alt="" srcSet />
              </div>
            </div>
          </div>
        </div>
      </>
  )
}

export default Item;