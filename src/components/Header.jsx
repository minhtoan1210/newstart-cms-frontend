import React from 'react';
import {NavLink} from 'react-router-dom';
// import { Container } from './styles';

function Header() {
  return(
      <>
      <header className="home-headerr">
  <div className="headerr">
    <div className="container">
      <div className="header">
        <div className="header__logo">
          <a  href="/">
            <img src="/img/star_logo.dffe8010.png" alt="" srcSet />
          </a>
        </div>
        <div className="header__menu">
          <ul>
            <li><NavLink to="/news">Tin Mới</NavLink></li>
            <li><NavLink to="/technology">Công Nghệ</NavLink></li>
            <li><NavLink to="/living">Sống Khỏe</NavLink></li>
            <li><NavLink to="/video">Video</NavLink></li>
            <li><NavLink to="/fashion">Thời Trang</NavLink></li>
            <li><NavLink to="/tourism">Du Lịch</NavLink></li>
            <li><NavLink to="/brandstuff">Hàng Hiệu</NavLink></li>
            <li className="dots">
              <span />
            </li>
          </ul>
        </div>
        <div className="header__login">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 30 30" width="30px" height="30px">
            <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 30 30" width="30px" height="30px">
            <path d="M18,19v-2c0.45-0.223,1.737-1.755,1.872-2.952c0.354-0.027,0.91-0.352,1.074-1.635c0.088-0.689-0.262-1.076-0.474-1.198 c0,0,0.528-1.003,0.528-2.214c0-2.428-0.953-4.5-3-4.5c0,0-0.711-1.5-3-1.5c-4.242,0-6,2.721-6,6c0,1.104,0.528,2.214,0.528,2.214 c-0.212,0.122-0.562,0.51-0.474,1.198c0.164,1.283,0.72,1.608,1.074,1.635C10.263,15.245,11.55,16.777,12,17v2c-1,3-9,1-9,8h24 C27,20,19,22,18,19z" />
          </svg>
        </div>
      </div>
    </div>
    <div className="header-sub-menu">
      <div className="headerr__popup">
        <div className="container">
          <ul className="headerr__popup-menu">
            <li className="parent thoi-su">
              <NavLink className="headerr__popup-link" to="" title="Thời sự">Tin Mới</NavLink>
              <div className="subcate">
                <ul className="subcate-ul">
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Công Nghệ</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Sống Khỏe</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Video</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Thời Trang</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Du Lịch</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Hàng Hiệu</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="parent thoi-su">
            <NavLink className="headerr__popup-link" to="" title="Thời sự">Tin Mới</NavLink>
              <div className="subcate">
                <ul className="subcate-ul">
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Công Nghệ</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Sống Khỏe</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Video</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Thời Trang</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Du Lịch</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Hàng Hiệu</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="parent thoi-su">
              <NavLink className="headerr__popup-link" to="" title="Thời sự">Tin Mới</NavLink>
              <div className="subcate">
                <ul className="subcate-ul">
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Công Nghệ</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Sống Khỏe</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Video</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Thời Trang</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Du Lịch</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Hàng Hiệu</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="parent thoi-su">
              <NavLink className="headerr__popup-link" to="" title="Thời sự">Tin Mới</NavLink>
              <div className="subcate">
                <ul className="subcate-ul">
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Công Nghệ</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Sống Khỏe</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Video</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Thời Trang</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Du Lịch</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Hàng Hiệu</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="parent thoi-su">
              <NavLink className="headerr__popup-link" to="" title="Thời sự">Tin Mới</NavLink>
              <div className="subcate">
                <ul className="subcate-ul">
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Công Nghệ</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Sống Khỏe</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Video</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Thời Trang</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Du Lịch</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Hàng Hiệu</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="parent thoi-su">
              <NavLink className="headerr__popup-link" to="" title="Thời sự">Tin Mới</NavLink>
              <div className="subcate">
                <ul className="subcate-ul">
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Công Nghệ</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Sống Khỏe</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Video</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Thời Trang</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Du Lịch</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Hàng Hiệu</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="parent thoi-su">
              <NavLink className="headerr__popup-link" to="" title="Thời sự">Tin Mới</NavLink>
              <div className="subcate">
                <ul className="subcate-ul">
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Công Nghệ</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Sống Khỏe</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Video</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Thời Trang</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Du Lịch</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Hàng Hiệu</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="parent thoi-su">
              <NavLink className="headerr__popup-link" to="" title="Thời sự">Tin Mới</NavLink>
              <div className="subcate">
                <ul className="subcate-ul">
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Công Nghệ</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Sống Khỏe</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Video</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Thời Trang</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Du Lịch</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Hàng Hiệu</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="parent thoi-su">
              <NavLink className="headerr__popup-link" to="" title="Thời sự">Tin Mới</NavLink>
              <div className="subcate">
                <ul className="subcate-ul">
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Công Nghệ</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Sống Khỏe</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Video</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Thời Trang</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Du Lịch</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Hàng Hiệu</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="parent thoi-su">
              <NavLink className="headerr__popup-link" to="" title="Thời sự">Tin Mới</NavLink>
              <div className="subcate">
                <ul className="subcate-ul">
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Công Nghệ</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Sống Khỏe</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Video</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Thời Trang</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Du Lịch</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Hàng Hiệu</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="parent thoi-su">
              <NavLink className="headerr__popup-link" to="" title="Thời sự">Tin Mới</NavLink>
              <div className="subcate">
                <ul className="subcate-ul">
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Công Nghệ</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Sống Khỏe</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Video</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Thời Trang</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Du Lịch</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Hàng Hiệu</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="parent thoi-su">
              <NavLink className="headerr__popup-link" to="" title="Thời sự">Tin Mới</NavLink>
              <div className="subcate">
                <ul className="subcate-ul">
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Công Nghệ</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Sống Khỏe</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Video</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Thời Trang</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Du Lịch</NavLink>
                  </li>
                  <li className="subcate-ul-li">
                    <NavLink className="subcate-ul-a" to="">Hàng Hiệu</NavLink>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="headerr-channels-menu">
        <div className="container">
          <ul className="channels-menu-ul">
            <li><NavLink to="http://">
              </NavLink></li>
            <li><NavLink to="http://">
              </NavLink></li>
            <li><NavLink to="http://">
              </NavLink></li>
            <li><NavLink to="http://">
              </NavLink></li>
            <li><NavLink to="http://">
              </NavLink></li>
            <li><NavLink to="http://">
              </NavLink></li>
            <li><NavLink to="http://">
              </NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
    </header>

      </>
  )
}

export default Header;