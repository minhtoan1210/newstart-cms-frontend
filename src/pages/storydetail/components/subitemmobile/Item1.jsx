import React from 'react';

// import { Container } from './styles';

function Subitem1({arraydetaillstory}) {
    var ip= "http://localhost:2020";
    var car = arraydetaillstory.Img1[0].url;
   var link = ip + car;
  return(
      <>
               <img src={link}></img>
               <h1 className='caption'>{arraydetaillstory.Content1}</h1>
             
      </>
  )
}

export default Subitem1;