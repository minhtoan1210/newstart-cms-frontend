import React from 'react';

// import { Container } from './styles';

function View({id,Title,Time,Authorasd,Avata,Description,Category}) {
    var ip= "http://localhost:2020";
    var link =Avata[0].url;
      //---------------Time--------
        var date = Time.slice(0,10);
        var arraydate = date.split("-");
        var datetime =[];
        arraydate.forEach(function(x, y){
         datetime.unshift(arraydate[y]);
  })
  var Datetime = datetime.join("-");
  //------------------------------
  let url ='';
  if(Category === 'CongNghes')
  {
    url='technology';
  }
  else if(Category === 'DuLichs')
  {
    url='tourism';
  }
  else if(Category === 'HangHieus')
  {
    url='brandstuff';
  }
  else if(Category === 'SucKhoes')
  {
    url='living';
  }
  else if(Category === 'ThoiTrangs')
  {
    url='fashion';
  }
  else if(Category === 'DuLichs')
  {
    url='tourism';
  }
  else if(Category === 'Videos')
  {
    url='Video';
  }
  return(
      <>
      <div className="section-seemore__content">
        <div className="seemore-content__img">
        <a href={`/${url}/${id}`}>
              <img src={ip+link} alt="" srcSet />
            </a>
        </div>
        <div className="content-text">
          <div className="seemore__content-text">
          <a href={`/${url}/${id}`}>
              <h3>{Title}</h3>
            </a>
          </div>
          <div className="article-meta">
            <span className="article-publish">
              <span className="time">{Authorasd}</span>
              <span className="date"> {Datetime}</span>
            </span>
            <span className="article">
                 {
                    Description
                }
            </span>
          </div>
        </div>
      </div>
      </>
  )
}

export default View;