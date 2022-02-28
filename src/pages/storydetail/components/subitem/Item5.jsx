import React from 'react';

// import { Container } from './styles';

function Subitem5({arraydetaillstory}) {
  var ip= "http://localhost:2020";
  var car = arraydetaillstory.Img5[0].url;
 var link = ip + car;
return(
    <>
      <section className="one" style={{ backgroundImage:`url(${link})`,backgroundRepeat:'no-repeat',backgroundAttachment: 'fixed',backgroundSize: 'cover'}}>
             <h1>{arraydetaillstory.Content5}</h1>
        </section>
    </>
)
}

export default Subitem5;