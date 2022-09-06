import React from "react";
import './home.scss';
import '../../img/fontawesome-free-6.2.0-web/css/all.css'
import logo from '../../img/logoNCC 1.png'
import icon1 from '../../img/css-icon 1.png'
import icon2 from '../../img/html-icon 1.png'
import icon3 from '../../img/url-icon 1.png'
const Home = () => {
    return (
        <div className="home">
            <div className="home-container">
                <div className="header">
                    <div className="header-container">
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">News</a></li>
                            <li><a href="">Blogs</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="home-main">
                    <div className="logo-container">
                        <img src={logo}></img>
                    </div>
                    <div className="descript">
                        <div className="descript-container">
                            <h5>Lorem ipsum dolor sit asmet?</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.</p>
                        </div>
                    </div>
                    <div className="descript_list">
                        <div className="descript_list-container">
                            <div className="descript_list-item">
                                <h5>Lorem ipsum dolor sit amet</h5>
                                <p><img src={icon1}></img>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.</p>
                            </div>
                            <div className="descript_list-item">
                                <h5>Lorem ipsum dolor sit amet</h5>
                                <p><img src={icon2}></img>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.</p>
                            </div>
                            <div className="descript_list-item">
                                <h5>Lorem ipsum dolor sit amet</h5>
                                <p><img src={icon3}></img>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <div className="footer-container">
                            <span>Copyright © 2021</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home