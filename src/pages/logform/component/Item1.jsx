import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function Item1({arraylogform}) {
    var ip= "http://localhost:2020";
    var link =arraylogform.Avata[0].url;
    var date = arraylogform.Time.slice(0,10);
    var arraydate = date.split("-");
    var datetime =[];
    arraydate.forEach(function(x, y){
      datetime.unshift(arraydate[y]);
    })
    var Datetime = datetime.join("-");
    //------------------------------
  return(
      <>
          <div className="section-content">
        <div className="section-content__img">
        <Link to={`/layout/logform/${arraylogform.id}`}>
                <img src={ip+link} alt="" srcSet />
          </Link>
        </div>
        <div className="section-content__text">
          <div className="content-title">
          <Link to={`/layout/logform/${arraylogform.id}`}>
              <span>
               {arraylogform.Title}
              </span>
            </Link>
          </div>
          <div className="content-time">
          <span className="date">{Datetime}</span>
            <span className="time" style={{marginLeft:5}}>{arraylogform.Authorasd}</span>
          </div>
          <div className="content-description">
            <span>
                {
                    arraylogform.Description
                }
            </span>
          </div>
        </div>
      </div>
      </>
  )
}

export default Item1;