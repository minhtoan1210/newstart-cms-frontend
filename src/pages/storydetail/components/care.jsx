import React from 'react';

// import { Container } from './styles';

function Care({Avata,Time,Title,id}) {
    var ip= "http://localhost:2020";
    var link =Avata[0].url;
         //---------------Time--------
//          var date = Time.slice(0,10);
//          var arraydate = date.split("-");
//          var datetime =[];
//          arraydate.forEach(function(x, y){
//           datetime.unshift(arraydate[y]);
//    })
//    var Datetime = datetime.join("-");
   //------------------------------
  return(
      <>
          <div className="care-content__item">
          <div className="content-item__img">
          <a href={`/layoutstory/story/${id}`}>
                 <img src={ip+link} alt="" srcSet />
            </a>
          </div>
          <div className="content-item__content">
            <div className="item-content__title">
            <a href={`/layoutstory/story/${id}`}>
                <h2>{Title}</h2>
              </a>
            </div>
            <div className="item-content__time">
              <span className="article-publish">
                {/* <span className="time">{Authorasd}</span> */}
                {/* <span className="upload">{Datetime}</span> */}
              </span>
            </div>
          </div>
        </div>

      </>
  )
}

export default Care;