import React, { useEffect } from 'react';
import Subitem1 from './subitemmobile/Item1';
import Subitem2 from './subitemmobile/Item2';
import Subitem3 from './subitemmobile/Item3';
import Subitem4 from './subitemmobile/Item4';
import Subitem5 from './subitemmobile/Item5';
import Subitem6 from './subitemmobile/Item6';
import Subitem7 from './subitemmobile/Item7';
import Subitemtitle from './subitemmobile/Itemtitle';
let $ =window.$;
// import { Container } from './styles';

function Mobile({arraydetaillstory}) {
    useEffect(() =>{
        let slider = $("#root");
        let sliderwidth = slider.width();
        if(sliderwidth <= 767)
        {
           $('.containera').addClass('active');
           $('.storymobile').addClass('active1');
        }
        else if(sliderwidth >= 767)
        {
           $('.containera').removeClass('active');
           $('.storymobile').removeClass('active1');
        }
    },[])
  return (
      <>
       {
        typeof(arraydetaillstory.Title) !== 'undefined'?
        <Subitemtitle arraydetaillstory={arraydetaillstory}></Subitemtitle>:null
      }
      {
        typeof(arraydetaillstory.Content1)!== 'undefined'?
        <Subitem1 arraydetaillstory={arraydetaillstory}></Subitem1>:null
      }
       {
        typeof(arraydetaillstory.Content2)!== 'undefined'?
        <Subitem2  arraydetaillstory={arraydetaillstory}></Subitem2>:null
      }
       {
        typeof(arraydetaillstory.Content3)!== 'undefined'?
        <Subitem3  arraydetaillstory={arraydetaillstory}></Subitem3>:null
      }
       {
        typeof(arraydetaillstory.Content4)!== 'undefined'?
        <Subitem4  arraydetaillstory={arraydetaillstory}></Subitem4>:null
      }
       {
        typeof(arraydetaillstory.Content5)!== 'undefined'?
        <Subitem5  arraydetaillstory={arraydetaillstory}></Subitem5>:null
      }
       {
        typeof(arraydetaillstory.Content6)!== 'undefined'?
        <Subitem6  arraydetaillstory={arraydetaillstory}></Subitem6>:null
      }
       {
        typeof(arraydetaillstory.Content7)!== 'undefined'?
        <Subitem7  arraydetaillstory={arraydetaillstory}></Subitem7>:null
      }
      </>
  )
}

export default Mobile;