import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function Item1({home,arrayadvertisement}) {
  var ip= "http://localhost:2020";
  let url ='';
  if(home.Category === 'CongNghes')
  {
    url='technology';
  }
  else if(home.Category === 'DuLichs')
  {
    url='tourism';
  }
  else if(home.Category === 'HangHieus')
  {
    url='brandstuff';
  }
  else if(home.Category === 'SucKhoes')
  {
    url='living';
  }
  else if(home.Category === 'ThoiTrangs')
  {
    url='fashion';
  }
  else if(home.Category === 'DuLichs')
  {
    url='tourism';
  }
  else if(home.Category === 'Videos')
  {
    url='Video';
  }
  console.log(arrayadvertisement[0].HomeAdvertisementRightIMG[0]);


  return(
      <>
      <div className="page__home-content">
          <div className="left">
            <div className="left__header">
            <Link to={`/${url}/${home.id}`}>
                <img src={ip+home.Avata[0].url} alt=""  />
              </Link>
              <div className="left-title">
              <Link to={`/${url}/${home.id}`}>{home.Title}</Link>
                <p>
                  {
                    home.Description
                  }
                </p>
              </div>
              <div className="left-quangcao">
                <img className="left-quangcao-img" src={ip+arrayadvertisement[0].HomeAdvertisementRightIMG[0].url} alt="" />
              </div>
            </div>
            <div className="left-content">
            </div>
          </div>
          <div className="right">
          </div>
        </div>
      </>
  );
}

export default Item1;