import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function Item5({home}) {
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
  return(
      <>
      <div className="new__middo">
      <Link to={`/${url}/${home.id}`}>
                <img src={ip+home.Avata[0].url} alt=""  />
              </Link>
              <p>
              <Link to={`/${url}/${home.id}`}>
                  {
                    home.Title
                  }
                </Link>
              </p>
            </div>
      </>
  );
}

export default Item5;