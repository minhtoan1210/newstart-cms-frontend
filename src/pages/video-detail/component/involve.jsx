import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// import { Container } from './styles';

function Invole({id,Title,Avata,Authorasd,Description}) {
    var ip= "http://localhost:2020";
    var link =Avata[0].url;
    
  return (
      <>
      <div className="involve-content">
              <div className="involve-content__img">
                <a href={`/video/${id}`}>
                  <img src={ip+link} alt="" srcSet />
                </a>
              </div>
              <div className="involve-content__text">
                <a href>
                  <h3>{Title}</h3>
                </a>
                <span>{Description}</span>
              </div>
            </div>
      </>
  );
}

export default Invole;