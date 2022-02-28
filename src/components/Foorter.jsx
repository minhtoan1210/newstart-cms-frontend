import React from 'react';
import {NavLink} from 'react-router-dom';
// import { Container } from './styles';

function Foorter() {
  return (
      <>
      <footer>
            <div className="container">
    <div className="footer">
      <div className="footer-left">
        <NavLink exact to="/">
          <img src="/img/star_logo.dffe8010.png" alt="" />
        </NavLink>
        <p>Giấy phép thiết lập : TTTĐT số 42/GP-STTTT</p>
        <p className="footer-left-p-content">Chịu trách nhiệm nội dung : NGUYỄN TẤN HÙNG ANH</p>
        <p className="footer-left-p-banquyen">PHAP LUAT SAO MULTIMEDIA MEDIA JOINT STOCK COMPANY - © newstartv
          2021</p>
        <p>Địa chỉ: 22 Đường 30b, khu phố 2, Phường Bình An, Quận 2, Thành phố Hồ Chí Minh, Việt Nam</p>
      </div>
      <div className="footer-right">
        <div className="footer-right-title">
          <p>Liên hệ</p>
        </div>
        <div className="footer-right-icon">
          <NavLink exact to="/"><img src="/img/black-mail-icon-4.png" alt="" />
            <span>info@nstartv.vn</span></NavLink>
          <NavLink exact to="/">
            <img src="/img/13.png" alt="" />
            <span>Quảng cáo</span></NavLink>
        </div>
        <div className="footer-right-phone">
          <span>Đường dây nóng</span>
          <p>0868330791</p>
        </div>
        <div className="footer-right-follow">
          <div className="footer-right-follow-title">
            <span>Theo dõi Newstar trên</span>
          </div>
          <div className="footer-right-follow-icon">
            <NavLink to="http://"><img src="/img/facebook-logo-3.png" alt="" /></NavLink>
            <NavLink to="http://"> <img src="/img/twitter-icon-download-18.png" alt="" srcSet /></NavLink>
            <NavLink to="http://"> <img src="/img/youtube-dark-icon-16.png" alt="" srcSet /></NavLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

      </>
  )
  
}

export default Foorter;