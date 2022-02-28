import React, { useEffect, useState,  } from 'react';
import { useRouteMatch } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Care from './components/care';
import View from './components/view';
import Item from './components/Item';
import Mobile from './components/Mobile';
// import { Container } from './styles';
 const Loading = () =>(
        <span>Loading.....</span>
  )
function Index() {
    var ip= "http://localhost:2020";
    let {slug} = useRouteMatch().params;
    const [state,setState] = useState({
        listnew:null,
        story:null,
        allnew:null,
    })
    useEffect(() =>{

        Promise.all([
            fetch(`http://localhost:2020/stories/${slug}`).then(res =>res.json()),
            fetch(`http://localhost:2020/stories/`).then(res =>res.json()),
            fetch(`http://localhost:2020/homes/`).then(res =>res.json()),
        ])
            .then(([res1,res2,res3]) =>{
                setState({
                    listnew:res1,
                    story:res2,
                    allnew:res3,
                })
            })
    },[slug])
    let {listnew,story,allnew} = state;
    if(!listnew && !story && !allnew ) return 'loading...';
    let arrayallnew = state.allnew.reverse();
    var arraydetaillstory =state.listnew;
    var arraystory=state.story.reverse();
    //----------------------------------------
  return (
      <>
        <div className="containera">
          <Item arraydetaillstory={arraydetaillstory}></Item>
        </div>
        <div className="storymobile">
          <div className="container">
          <Mobile arraydetaillstory={arraydetaillstory}></Mobile>
          </div>
        </div>
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
                         arraystory.map((x,y)=>
                          y<6?<Care key={x.id} {...x}></Care>:null
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