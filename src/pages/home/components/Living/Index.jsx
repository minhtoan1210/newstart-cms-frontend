import React, { useEffect } from 'react';
import Item from './Item';
let $ = window.$;
// import { Container } from './styles';

function Index({story,arrayadvertisement}) {
  var ip="http://localhost:2020";
  var arrayeconomy =[];
  function filter(x)
  {
    x.forEach((a,b) => {
        if(a.Category === "SucKhoes")
        {
          arrayeconomy.push(a);
        }
    });
  }
  filter(story);
  return(
      <>
      <section>
  <div className="slider tablet">
    <div className="container">
      <div className="slider-title">
        <h3>Sức Khỏe</h3>
      </div>
      <div className="slider-content">
        {
            arrayeconomy.map(x =>
                <Item key={x.id} {...x}></Item>
            )
        }
      </div>
    </div>
  </div>
  <div className="advertisement">
  {
      typeof(arrayadvertisement[0].HomeAdvertisementLiving1IMG[0]) !== 'undefined'?
      <a href={arrayadvertisement[0].HomeAdvertisementLiving1}>
      <img className="advertisementimg" src={ip+arrayadvertisement[0].HomeAdvertisementLiving1IMG[0].url} alt="" />
      </a>:null
    }
    {
      typeof(arrayadvertisement[0].HomeAdvertisementLiving2IMG[0]) !== 'undefined'?
      <a href={arrayadvertisement[0].HomeAdvertisementLiving2}>
      <img className="advertisementimg" src={ip+arrayadvertisement[0].HomeAdvertisementLiving2IMG[0].url} alt="" />
      </a>:null
    }
    {
      typeof(arrayadvertisement[0].HomeAdvertisementLiving3IMG[0]) !== 'undefined'?
      <a href={arrayadvertisement[0].HomeAdvertisementLiving3}>
      <img className="advertisementimg" src={ip+arrayadvertisement[0].HomeAdvertisementLiving3IMG[0].url} alt="" />
      </a>:null
    }
   {
      typeof(arrayadvertisement[0].HomeAdvertisementLiving4IMG[0]) !== 'undefined'?
      <a href={arrayadvertisement[0].HomeAdvertisementLiving4}>
      <img className="advertisementimg" src={ip+arrayadvertisement[0].HomeAdvertisementLiving4IMG[0].url} alt="" />
      </a>:null
    }
    {
      typeof(arrayadvertisement[0].HomeAdvertisementLiving5IMG[0]) !== 'undefined'?
      <a href={arrayadvertisement[0].HomeAdvertisementLiving5}>
      <img className="advertisementimg" src={ip+arrayadvertisement[0].HomeAdvertisementLiving5IMG[0].url} alt="" />
      </a>:null
    }
</div>
</section>

      </>
  )
}

export default Index;
