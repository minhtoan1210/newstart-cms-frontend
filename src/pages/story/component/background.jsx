import React from 'react';

// import { Container } from './styles';

function Background({arraystory}) {
    var ip= "http://localhost:2020";
    var car = arraystory.Avata[0].url;
   var link = ip + car;
  return(
      <>
         <div className="topic-content" style={{ backgroundImage:`url(${link})`}}>
             <div className="container">
      <div className="topic-logo">
        
      </div>
      <div className="topic-description">
        <span>
          Story là thể loại kể chuyện nhập vai từ góc nhìn thứ nhất. Độc giả có thể tìm thấy các chuyến
          hành trình, nhật ký một ngày hay trải nghiệm các sản phẩm, dịch vụ từ các nhân vật đặc biệt.
        </span>
      </div>
    </div>
  </div>
      </>
  )
}

export default Background;