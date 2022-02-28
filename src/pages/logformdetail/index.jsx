import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Care from './components/care';
import View from './components/view';

// import { Container } from './styles';

function Index() {
    var ip= "http://localhost:2020";
    let {slug} = useRouteMatch().params;
    const [state,setState] = useState({
        listnew:null,
        logform:null,
        allnew:null,
    })
    useEffect(() =>{
        Promise.all([
            fetch(`http://localhost:2020/log-forms/${slug}`).then(res =>res.json()),
            fetch(`http://localhost:2020/log-forms/`).then(res =>res.json()),
            fetch(`http://localhost:2020/homes/`).then(res =>res.json()),
        ])
            .then(([res1,res2,res3]) =>{
                setState({
                    listnew:res1,
                    logform:res2,
                    allnew:res3,
                })
            })
    },[slug])
    let {listnew,logform,allnew} = state;
    if(!listnew && !logform && !allnew ) return 'loading...';
    setTimeout(images, 100);
    function images()
    {
        var detailimg = document.querySelectorAll('img');
        detailimg.forEach(function (x, y) {
      if(x.getAttribute("src").lastIndexOf("uploads") > 0)
      {
        if(x.getAttribute("src").lastIndexOf("http://localhost:2020")<0)
        {
            x.setAttribute("src","http://localhost:2020"+x.getAttribute("src"));
        }
      }
        });
    }
    var date = state.listnew.Time.slice(0,10);
    var arraydate = date.split("-");
    var datetime =[];
    arraydate.forEach(function(x, y){
      datetime.unshift(arraydate[y]);
    })
    var Datetime = datetime.join("-");
    let arrayallnew = state.allnew.reverse();
    var arraydetaillogform =state.listnew;
    var arrayogform =state.logform.reverse();
    //----------------------------------------
  return (
      <>
      <main className="page-detaillogform">
    <div className="detaillogform-img">
      <img src={ip + arraydetaillogform.ImgTitle[0].url}  alt="" srcSet />
    </div>
    <div className="detaillogform-content">
      <div className="container">
        <div className="detaillogform-content__title">
          <h2>
            {arraydetaillogform.Title};
          </h2>
        </div>
        <div className="detaillogform-content__content">
        <ReactMarkdown>{arraydetaillogform.Content}</ReactMarkdown>
        </div>
        {/* <div className="detaillogform-content__img">
          <img src="/img/32.jpg" alt="" srcSet className="detaillogform-img__item1" />
          <img src="/img/32.jpg" alt="" srcSet className="detaillogform-img__item2" />
        </div> */}
      </div>
    </div>
  </main>
  <div className="section-care">
    <div className="container">
      <div className="section-care__title">
        <h2>
          <a href>
            BẠN CÓ THỂ QUAN TÂM
          </a>
        </h2>
      </div>
      <div className="section-care__content">
                {
                arrayogform.map((x,y)=>
                    y<=5?<Care key={x.id} {...x}></Care>:null
                )
              }
      </div>
    </div>
  </div>
  <div className="section-seemore">
    <div className="container">
      <div className="section-seemore__title">
        <h2>
          Xem Nhiều
        </h2>
      </div>
             {
                arrayallnew.map((x,y)=>
                y<=30?<View key={x.id} {...x}></View>:null
                )
              }
    </div>
  </div>
      </>
  )
}

export default Index;