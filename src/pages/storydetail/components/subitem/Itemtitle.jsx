import React from 'react';

// import { Container } from './styles';

function Subitemtitle({arraydetaillstory}) {
    var ip= "http://localhost:2020";
    var car = arraydetaillstory.Avata[0].url;
   var link = ip + car;
  return(
      <>
        <section className="one" style={{ backgroundImage:`url(${link})`,backgroundRepeat:'no-repeat',backgroundAttachment: 'fixed',backgroundSize: 'cover'}}>
               <h1>{arraydetaillstory.Title}</h1>
          </section>
      </>
  )
}

export default Subitemtitle;