import React, { useEffect, useState } from 'react';
import Item1 from './components/item1';
import Item2 from './components/item2';
import Item3 from './components/item3';
import Item4 from './components/item4';
import Item5 from './components/item5';
import Itemnews from './components/itemnews';
// import { Container } from './styles';

function News() {
  let [state,setState] = useState({
    news:null,
    logform:null,
    story:null,
    arrayadvertisements:null,
  }
)
useEffect(() =>{
  Promise.all([
      fetch(`http://localhost:2020/homes/`).then(res =>res.json()),
      fetch(`http://localhost:2020/log-forms/`).then(res =>res.json()),
      fetch(`http://localhost:2020/stories/`).then(res =>res.json()),
      fetch(`http://localhost:2020/advertisements/`).then(res =>res.json()),
  ])
      .then(([res1,res2,res3,res4]) =>{
          setState({
               news:res1,
              logform:res2,
              story:res3,
              arrayadvertisements:res4,
          })
      })
},[])
let {news,logform,story,arrayadvertisements} = state;
if(!news && !logform && !story && !arrayadvertisements ) return 'loading...';
var arraynews =[];
var arraylogform =[];
var arraystory =[];
function filter(x)
{
  x.forEach((a,b) => {
      if(a.Category === "TinMois")
      {
        arraynews.push(a);
      }
  });
}
filter(state.news);
var array = arraynews;
var arraynews = array.reverse();


function filterlogform(x)
{
  x.forEach((a,b) => {
      if(a.Category === "TinMois")
      {
        arraylogform.push(a);
      }
  });
}
filterlogform(state.logform);
var arrraylogform = logform.reverse();

function filterstory(x)
{
  x.forEach((a,b) => {
      if(a.Category === "TinMois")
      {
        arraystory.push(a);
      }
  });
}
filterstory(state.story);
var arrraystory = arraystory.reverse();
  return (
      <>
 <main>
  <div className="container">
    <div className="page__home">
      <div className="page__home-header">
        <h1><a href>Tin Mới</a></h1>
        <ul>
          <li><a href>TIN TỨC XUẤT BẢN</a></li>
          <li><a href>SÁCH HAY </a></li>
          <li><a href>TÁC GIẢ</a></li>
        </ul>
      </div>
      <Item1 news={state.news[0]} arrayadvertisements={arrayadvertisements}></Item1>
      <div className="page__home-listnew">
        <div className="right__left">
          <Item2 news={arrraylogform[0]} ></Item2>
          <Item3 news={arrraystory[0]}></Item3>
        </div>
        <div className="right__right">
          <Item4 news={arrraylogform[1]} ></Item4>
          <Item5 news={arrraystory[1]} ></Item5>
        </div>
      </div>
    </div>
  </div>
</main>
<div className="new">
  <div className="container">
    <div className="new-title">
      <h3>Tin Mới</h3>
    </div>
    <div className="new-content">
      <div className="new-content-left">
      {
          arraynews.map((x,y)=>
            <Itemnews key={x._id} {...x}></Itemnews>
          )
        }
      </div>
      <div className="new-content-advertisement">
      </div>
    </div>
  </div>
</div>
      </>
  );
}

export default News;