import React, { useEffect, useState } from 'react';
import Background from './component/background';
import Item from './component/Item';
import Item1 from './component/Item1'
// import { Container } from './styles';

function Index() {
  let [state,setState] = useState({
    logform:[],
    loanding:true
  }
)
  useEffect(() =>{
    fetch(`http://localhost:2020/log-forms/`)
    .then(res=>res.json())
    .then((res) => {
      setState({
        logform:[...res],
        loanding:false
      })
    })
},[])
if(state.loanding)
{
  return 'Loangding';
}
var array =state.logform.reverse() ;
var arraylogform =array;
  return(
      <>
      <main className="page-logform">
    <Background arraylogform={arraylogform[0]}></Background>
  <div className="topic-section__content">
    <div className="container">
     <Item1 arraylogform={arraylogform[0]}></Item1>
    </div>
  </div>
  <div className="topic-news news-mobile">
    <div className="container">
      <div className="list-news">
        {
          arraylogform.map((x,y) => 
            y>0 ?<Item key={x.id} {...x}></Item>:null
          )
        }
      </div>
    </div>
  </div>
      </main>
      </>
  )
}

export default Index;