import React from 'react';

// import { Container } from './styles';

function Subitem3({arraydetaillstory}) {
  var ip= "http://localhost:2020";
  var car = arraydetaillstory.Img3[0].url;
 var link = ip + car;
return(
    <>
            <img src={link}></img>
             <h1 className='caption'>{arraydetaillstory.Conten3}</h1>
             
    </>
)
}

export default Subitem3;