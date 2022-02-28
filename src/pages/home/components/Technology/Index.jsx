import React, { useEffect } from 'react';
import Item from './Item';
let $ = window.$;
// import { Container } from './styles';

function Sprot({story,arrayadvertisement}) {
  var ip="http://localhost:2020";
  useEffect(() =>{
    let slidershow = 4;
    let auto = false;
    let header = $(".headerr").height();
    let height = header + header / 3;
    let slider = $(".slider");
    let sliderwidth = slider.width();
    if (sliderwidth <= 987 && sliderwidth >= 764) {
      slidershow = 3;
      auto = true;
    } else if (sliderwidth <= 763) {
      slidershow = 1;
      auto = true;
    }
    $(".slider-content").slick({
        slidesToShow: slidershow,
        slidesToScroll: 1,
        autoplay: auto,
        centerMode: true,
        autoplaySpeed: 1000,
        infinite: true,
      });
      $(".advertisement").slick({
        slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      });
  },[])
  var arraysport =[];
  function filter(x)
  {
    x.forEach((a,b) => {
        if(a.Category === "CongNghes")
        {
          arraysport.push(a);
        }
    });
  }
  filter(story);
  return(
      <>
      <section>
  <div className="slider tablet">
    <div className="container ">
      <div className="slider-title">
        <h3>Công Nghệ</h3>
      </div>
      <div className="slider-content">
        {
            arraysport.map(x =>
                <Item key={x.id} {...x}></Item>
            )
        }
      </div>
    </div>
  </div>
  <div className="advertisement">
  {
      typeof(arrayadvertisement[0].HomeAdvertisementTechnology1IMG[0]) !== 'undefined'?
      <a href={arrayadvertisement[0].HomeAdvertisementTechnology1}>
      <img className="advertisementimg" src={ip+arrayadvertisement[0].HomeAdvertisementTechnology1IMG[0].url} alt="" />
      </a>:null
    }
    {
      typeof(arrayadvertisement[0].HomeAdvertisementTechnology2IMG[0]) !== 'undefined'?
      <a href={arrayadvertisement[0].HomeAdvertisementTechnology2}>
      <img className="advertisementimg" src={ip+arrayadvertisement[0].HomeAdvertisementTechnology2IMG[0].url} alt="" />
      </a>:null
    }
    {
      typeof(arrayadvertisement[0].HomeAdvertisementTechnology3IMG[0]) !== 'undefined'?
      <a href={arrayadvertisement[0].HomeAdvertisementTechnology3}>
      <img className="advertisementimg" src={ip+arrayadvertisement[0].HomeAdvertisementTechnology3IMG[0].url} alt="" />
      </a>:null
    }
   {
      typeof(arrayadvertisement[0].HomeAdvertisementTechnology4IMG[0]) !== 'undefined'?
      <a href={arrayadvertisement[0].HomeAdvertisementTechnology4}>
      <img className="advertisementimg" src={ip+arrayadvertisement[0].HomeAdvertisementTechnology4IMG[0].url} alt="" />
      </a>:null
    }
    {
      typeof(arrayadvertisement[0].HomeAdvertisementTechnology5IMG[0]) !== 'undefined'?
      <a href={arrayadvertisement[0].HomeAdvertisementTechnology5}>
      <img className="advertisementimg" src={ip+arrayadvertisement[0].HomeAdvertisementTechnology5IMG[0].url} alt="" />
      </a>:null
    }
</div>
</section>

      </>
  )
}

export default Sprot;
