import React, { useEffect, useState } from 'react';
import Item1 from './components/item1';
import Item2 from './components/item2';
import Item3 from './components/item3';
import Item4 from './components/item4';
import Item5 from './components/item5';
import Itembrandstuff from './components/itembrandstuff';
// import { Container } from './styles';
function Brandstuff() {
  let [state,setState] = useState({
    allnew:null,
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
              allnew:res1,
              logform:res2,
              story:res3,
              arrayadvertisements:res4,
              loanding:false,
          })
      })
},[])
let {allnew,logform,story,arrayadvertisements} = state;
if(!allnew && !logform && !story && !arrayadvertisements ) return 'loading...';
var arraybrandstuff =[];
var arraylogform =[];
var arraystory =[];
function filter(x)
{
  x.forEach((a,b) => {
      if(a.Category === "HangHieus")
      {
        arraybrandstuff.push(a);
      }
  });
}
filter(state.allnew);
var array = arraybrandstuff;
arraybrandstuff = array.reverse();

function filterlogform(x)
{
  x.forEach((a,b) => {
      if(a.Category === "HangHieus")
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
      if(a.Category === "HangHieus")
      {
        arraystory.push(a);
      }
  });
}
filterstory(state.story);
var arrraystory = arraystory.reverse();
  return(
      <>
          <main>
  <div className="container">
    <div className="page__home">
      <div className="page__home-header">
        <h1><a href>H??ng Hi???u</a></h1>
        <ul>
          <li><a href>TIN T???C XU???T B???N</a></li>
          <li><a href>SA??CH HAY </a></li>
          <li><a href>TA??C GIA??</a></li>
        </ul>
      </div>
      <Item1 brandstuff={arraybrandstuff[0]} arrayadvertisements={arrayadvertisements}></Item1>
      <div className="page__home-listnew">
        <div className="right__left">
          <Item2 brandstuff={arrraylogform[0]}></Item2>
          <Item3 brandstuff={arrraystory[0]}></Item3>
        </div>
        <div className="right__right">
          <Item4 brandstuff={arrraylogform[1]}></Item4>
          <Item5 brandstuff={arrraystory[1]}></Item5>
        </div>
      </div>
    </div>
  </div>
</main>
<div className="new">
  <div className="container">
    <div className="new-title">
      <h3>Tin M???i</h3>
    </div>
    <div className="new-content">
      <div className="new-content-left">
      {
          arraybrandstuff.map((x,y)=>
            <Itembrandstuff key={x._id} {...x}></Itembrandstuff>
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

export default Brandstuff;