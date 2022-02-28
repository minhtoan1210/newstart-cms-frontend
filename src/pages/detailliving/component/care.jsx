import React from 'react';

// import { Container } from './styles';

function Index({id,Title,Time,Authorasd,Avata,Description,Category}) {
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
       <div className="detail-care__content">
          <div className="care-content__img">
            <a href={`/${url}/${id}`}>
              <img src={ip+link} alt="" srcSet />
            </a>
          </div>
          <div className="care-content__text">
          <a href={`/technology/${id}`}>
              <h3>{Title}</h3>
            </a>
            <p className="time">
              <span className="time-day">
                {Datetime}
              </span>
              <span className="category">
               {Authorasd}
              </span>
            </p>
            <span className="demo">
                {
                    Description
                }
            </span>
          </div>
        </div>
      </>
  );
}

export default Index;