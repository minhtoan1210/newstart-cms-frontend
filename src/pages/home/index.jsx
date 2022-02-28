import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import Item1 from './components/item1';
import Item2 from './components/item2';
import Item3 from './components/item3';
import Item4 from './components/item4';
import Item5 from './components/item5';
import Multimedia from './components/multimedia';
import Fashion from './components/Fashion/Index';
import Technology from './components/Technology/Index';
import News from './components/News/Index';
import Living from './components/Living/Index';
import Tourism from './components/Tourism/Index';
import Brandstuff from './components/Brandstuff/Index';
// import { Container } from './styles';
function Home() {
  let [state,setState] = useState({
    home:[],
    story:[],
    advertisement:[],
    loanding:true
  }
)
useEffect(() =>{
  Promise.all([
      fetch(`http://localhost:2020/homes/`).then(res =>res.json()),
      fetch(`http://localhost:2020/stories/`).then(res =>res.json()),
      fetch(`http://localhost:2020/advertisements/`).then(res =>res.json()),
  ])
      .then(([res1,res2,res3]) =>{
          setState({
              home:res1,
              story:res2,
              advertisement:res3,
              loanding:false,
          })
      })
},[])

if(state.loanding)
{
  return 'Loangding';
}
var arrayadvertisement = state.advertisement;
var arrayhomehotnews =[];
var arrayhome =[];
var array = state.home;
arrayhome = array.reverse();
function filter(x)
{
  x.forEach((a,b) => {
      if(a.Hotnews === true)
      {
        arrayhomehotnews.push(a);
      }
  });
}
filter(state.home);
  return (
      <>
  <main>
    <div className="container">
    <div className="page__home">
      <div className="page__home-header">
        <h1><a href>Tin Nổi Bật</a></h1>
        <ul>
          <li><a href>TIN TỨC XUẤT BẢN</a></li>
          <li><a href>SÁCH HAY </a></li>
          <li><a href>TÁC GIẢ</a></li>
        </ul>
      </div>
      <Item1 home={arrayhomehotnews[0]} arrayadvertisement={arrayadvertisement}> </Item1>
      <div className="page__home-listnew">
        <div className="right__left">
          <Item2 home={arrayhomehotnews[1]} ></Item2>
          <Item3 home={arrayhomehotnews[2]} ></Item3> 
        </div>
        <div className="right__right">
          <Item4  home={arrayhomehotnews[3]} ></Item4>
          <Item5 home={arrayhomehotnews[4]} ></Item5>
        </div>
      </div>
    </div>
     <Multimedia home={arrayhome} ></Multimedia>
    </div>
  </main>
  <Fashion story={state.story} arrayadvertisement={arrayadvertisement}></Fashion>
  <Technology story={state.story} arrayadvertisement={arrayadvertisement}></Technology>
  <News story={state.story} arrayadvertisement={arrayadvertisement}></News>
  <Living story={state.story} arrayadvertisement={arrayadvertisement}></Living>
  <Tourism story={state.story} arrayadvertisement={arrayadvertisement}></Tourism>
  <Brandstuff story={state.story} arrayadvertisement={arrayadvertisement}></Brandstuff>
      </>
  );
}

export default Home;