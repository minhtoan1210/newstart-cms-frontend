import React from 'react';

// import { Container } from './styles';

function Subitem7({arraydetaillstory}) {
  var ip= "http://localhost:2020";
  var car = arraydetaillstory.Img7[0].url;
  var link = ip + car;
return(
    <>
      <section className="one" style={{ backgroundImage:`url(${link})`,backgroundRepeat:'no-repeat',backgroundAttachment: 'fixed',backgroundSize: 'cover'}}>
             <h1>{arraydetaillstory.Content7}</h1>
        </section>
    </>
)
}

export default Subitem7;