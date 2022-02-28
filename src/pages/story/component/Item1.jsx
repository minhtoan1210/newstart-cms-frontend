import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function Item1({arraystory}) {
    var ip= "http://localhost:2020";
    var link =arraystory.Avata[0].url;
    // var date = arraystory.Time.slice(0,10);
    // var arraydate = date.split("-");
    // var datetime =[];
    // arraydate.forEach(function(x, y){
    //   datetime.unshift(arraydate[y]);
    // })
    // var Datetime = datetime.join("-");
    // //------------------------------
  return(
      <>
          <div className="section-content">
        <div className="section-content__img">
        <Link to={`/layoutstory/story/${arraystory.id}`}>
                <img src={ip+link} alt="" srcSet />
          </Link>
        </div>
        <div className="section-content__text">
          <div className="content-title">
          <Link to={`/layoutstory/story/${arraystory.id}`}>
              <span>
               {arraystory.Title}
              </span>
            </Link>
          </div>
          <div className="content-time">
          {/* <span className="date">{Datetime}</span>
            <span className="time" style={{marginLeft:5}}>{arraystory.Authorasd}</span> */}
          </div>
          <div className="content-description">
            <span>
                {
                    arraystory.Description
                }
            </span>
          </div>
        </div>
      </div>
      </>
  )
}

export default Item1;