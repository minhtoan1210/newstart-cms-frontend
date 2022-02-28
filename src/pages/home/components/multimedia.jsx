import React, { useEffect, useState } from 'react';
import Item1 from './multimediaitem/Item1';
import Item2 from './multimediaitem/Item2';
import Item3 from './multimediaitem/Item3';
import Item4 from './multimediaitem/Item4';
import Item5 from './multimediaitem/Item5';
// import { Container } from './styles';

function Multimedia({home}) {
  var ip= "http://localhost:2020";
  let url ='';
  let [state,setState] = useState({
    logform:[],
    loanding:true
  }
)
useEffect(() =>{
fetch(`http://localhost:2020/log-forms/`)
.then(res=>res.json())
.then((res) => {
  setState({
    logform:[...res], 
    loanding:false
  })
})
},[])
if(state.loanding)
{
  return 'Loangding';
}
var arraylogform =[];
var array = state.logform;
arraylogform = array.reverse();

  return(
      <>
       <div className="home-multimedia">
        <div className="home-multimedia-title">
          <div className="multimedia__title">
            <img src="./img/40.png" alt="" srcSet />
          </div>
          <div className="multimedia__menu">
            <ul>
              <li>
                <a href="http://">video</a>
              </li>
              <li>
                <a href="longform.html">longform</a>
              </li>
              <li>
                <a href="http://">voices</a>
              </li>
              <li>
                <a href="http://">lens</a>
              </li>
              <li>
                <a href="./story.html">story</a>
              </li>
              <li>
                <a href="http://">quizz</a>
              </li>
            </ul>
          </div>
          <div className="multimedia__menumobile">
            <span className="dropdown__selected">Danh Mục</span>
            <ul className="dropdown__list">
              <li className="dropdown__item">
                <a href="http://">
                  VIDEO
                </a>
              </li>
              <li className="dropdown__item">
                <a href="./longform.html">
                  LONGFORM
                </a>
              </li>
              <li className="dropdown__item">
                <a href="http://">
                  VOICES
                </a>
              </li>
              <li className="dropdown__item">
                <a href="http://">
                  LENS
                </a>
              </li>
              <li className="dropdown__item">
                <a href="./story.html">
                  STORY
                </a>
              </li>
              <li className="dropdown__item">
                <a href="http://">
                  QUIZZ
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="home-content">
          <Item1 arraylogform={arraylogform[0]}></Item1>
          <div className="home-content-right">
            <div className="content-right-item1">
              <Item2 arraylogform={arraylogform[1]}></Item2>
              <Item3 arraylogform={arraylogform[2]}></Item3>
            </div>
            <div className="content-right-item2">
              <Item4 arraylogform={arraylogform[3]}> </Item4>
              <Item5 arraylogform={arraylogform[4]}></Item5>
            </div>
          </div>
        </div>
      </div>
      </>
  );
}

export default Multimedia;