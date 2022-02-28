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
        if(a.Category === "HangHieus")
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
        <h3>Hàng Hiệu</h3>
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
      typeof(arrayadvertisement[0].HomeAdvertisementBrandstuff1IMG[0]) !== 'undefined'?
      <a href={arrayadvertisement[0].HomeAdvertisementBrandstuff1}>
      <img className="advertisementimg" src={ip+arrayadvertisement[0].HomeAdvertisementBrandstuff1IMG[0].url} alt="" />
      </a>:null
    }
    {
      typeof(arrayadvertisement[0].HomeAdvertisementBrandstuff2IMG[0]) !== 'undefined'?
      <a href={arrayadvertisement[0].HomeAdvertisementBrandstuff2}>
      <img className="advertisementimg" src={ip+arrayadvertisement[0].HomeAdvertisementBrandstuff2IMG[0].url} alt="" />
      </a>:null
    }
    {
      typeof(arrayadvertisement[0].HomeAdvertisementBrandstuff3IMG[0]) !== 'undefined'?
      <a href={arrayadvertisement[0].HomeAdvertisementBrandstuff3}>
      <img className="advertisementimg" src={ip+arrayadvertisement[0].HomeAdvertisementBrandstuff3IMG[0].url} alt="" />
      </a>:null
    }
   {
      typeof(arrayadvertisement[0].HomeAdvertisementBrandstuff4IMG[0]) !== 'undefined'?
      <a href={arrayadvertisement[0].HomeAdvertisementBrandstuff4}>
      <img className="advertisementimg" src={ip+arrayadvertisement[0].HomeAdvertisementBrandstuff4IMG[0].url} alt="" />
      </a>:null
    }
    {
      typeof(arrayadvertisement[0].HomeAdvertisementBrandstuff5IMG[0]) !== 'undefined'?
      <a href={arrayadvertisement[0].HomeAdvertisementBrandstuff5}>
      <img className="advertisementimg" src={ip+arrayadvertisement[0].HomeAdvertisementBrandstuff5IMG[0].url} alt="" />
      </a>:null
    }
</div>

</section>

      </>
  )
}

export default Index;
