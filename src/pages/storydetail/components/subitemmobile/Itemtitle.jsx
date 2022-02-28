import React from 'react';

// import { Container } from './styles';

function Subitemtitle({arraydetaillstory}) {
    var ip= "http://localhost:2020";
    var car = arraydetaillstory.Avata[0].url;
   var link = ip + car;
  return(
      <>
               <h1 className='the-article-title'>{arraydetaillstory.Title}</h1>
      </>
  )
}

export default Subitemtitle;