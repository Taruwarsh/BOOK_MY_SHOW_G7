import React from "react";
import {
  BsSearch,
  BsFillCaretDownFill,
  BsFillCaretRightFill,
} from "react-icons/bs";
import { BiMenu } from "react-icons/bi";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addCity } from '../Reducers/city/action'
import { addToken } from '../Reducers/tokenkey/action'
import axios from "axios";

function NavLg() {
  const navigate = useNavigate()
  const [collectdata, collectingdata] = useState({
    email: "",
    password: ""
  })
  const getting = (e) => {
    e.preventDefault()
    const { id, value } = e.target;
    collectingdata({
      ...collectdata,
      [id]: value,
    })

  };

  const dispatch = useDispatch()
  const takecity = (city) => {
    dispatch(addCity(city))
  }
  const cities = useSelector((store) =>
    store.city.city
  )
  const tokens = useSelector((store) =>
    store.token.token
  )
 
  const [menu, menudiv] = useState(false)
  const signtoggle = () => {
    navigate('/authform')
  }
  const menutoggle = () => {
    menudiv(!menu)
  }

  const linkStyle = {
    margin: "0.75rem",
    textDecoration: "none",
    color: '#bac5c8',
    'font-size': '14px',
  };
  const linksecond = {
    margin: "0.75rem",
    textDecoration: "none",
    color: 'white',
    'font-size': '13px',

  };
  const linkNew = {
    color: 'red',
  };
  const purchase = () => {
    tokens ? navigate('/') : alert("Sign in first")
  }
  return (
    <nav className="nav">
      {
        menu ? <div className="menu">
          <div className="menuinside">
            <div className="menuheader">
              <h1>Hey!</h1>
              <h1 onClick={menutoggle}>x</h1>
            </div>
            <div className="menufooter">
              <div><span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="1 0 22 22"><path fill="#666" fill-rule="evenodd" d="M13.977 5.094l.002.002-.005-.002v.001l-.021-.005.206.045A5.002 5.002 0 0 1 18 10v6.974L20 19h-2l-3.55-.001a2.5 2.5 0 1 1-4.9 0L7.027 19v.004h-3L6 17.003V10a5.002 5.002 0 0 1 4.048-4.91l-.049.01L10 4a2 2 0 1 1 4 0l.001 1.1-.008-.002-.035-.008.018.004zm-.563 13.905h-2.829a1.5 1.5 0 1 0 2.83 0zM13 6h-2a4 4 0 0 0-4 4v6.978L7.014 18H17v-8a4 4 0 0 0-4-4zm.983-.904l.003.001.007.001-.008-.001-.002-.001zm-.002 0h.002l-.005-.002.003.002zm-.28-.047l.112.017.018.002-.13-.019zm-3.388-.003l-.057.009.036-.005.02-.004zm.267-.029l-.172.018.148-.016.024-.002zm2.928.008l.082.01a5.014 5.014 0 0 0-.082-.01zm-2.803-.016l-.125.008h.015l.11-.008zm2.538-.003h.013l.05.003-.063-.003zM12 3a1 1 0 0 0-1 1v1h2V4a1 1 0 0 0-1-1z"></path></svg></span><span>Notifications</span><span></span></div>
              <div><span><img src="https://assets-in.bmscdn.com/members/common/icons/purchasehistory.png" class="sc-gRnDUn gMMdZt" /></span><span><p onClick={purchase}>Purchase History <br />  View all your bookings & purchases</p></span><span></span></div>
              <div><span><img src="https://assets-in.bmscdn.com/members/common/icons/streamlibrary.png" class="sc-gRnDUn gMMdZt" /></span><span><p>Stream Library<br />Rented & Purchased Movies</p></span><span></span></div>
              <div><span><img src="https://assets-in.bmscdn.com/members/common/icons/helpandsupport.png" class="sc-gRnDUn gMMdZt" /></span><span><p>Help & Support<br />View commonly asked queries and Chat</p></span><span></span></div>
              <div><span><img src="https://assets-in.bmscdn.com/members/common/icons/accountandsettings.png" class="sc-gRnDUn gMMdZt" /></span><span><p>Accounts & Settings<br />Location, Payments, Addresses & More</p></span><span></span></div>
              <div><span><img src="https://assets-in.bmscdn.com/members/common/icons/rewards.png" class="sc-gRnDUn gMMdZt" /></span><span><p>Rewards<br />View your rewards & unlock new ones</p></span><span></span></div>
              <div><span><img src="https://assets-in.bmscdn.com/members/common/icons/bookasmile.png" class="sc-gRnDUn gMMdZt" /></span><span>BookASmile</span><span></span></div>
              {tokens ? <button onClick={() => {
                dispatch(addToken(null))
              }} style={{ 'padding': '14px', width: '300px', marginTop: '100px', color: "#f84464", fontSize: '20px', backgroundColor: 'transparent', borderColor: '#f84464' }}>Signout</button> : ""}
            </div>
          </div>
        </div> : ""
      }{!cities ?
        <div className="city">
          <div className="cityinside">
            <span>Popular Cities</span>
            <div className="citiesdiv">
              <span onClick={() => takecity("Mumbai")} className="pointer"><img src="//in.bmscdn.com/m6/images/common-modules/regions/mumbai.png" alt="MUMBAI" class="sc-bqjOQT aUKrX" /><p>Mumbai</p></span>
              <span onClick={() => takecity("NCR")} className="pointer"><img src="//in.bmscdn.com/m6/images/common-modules/regions/ncr.png" alt="NCR" class="sc-bqjOQT aUKrX" /><p>NCR</p></span>
              <span onClick={() => takecity("Bengaluru")} className="pointer"><img src="//in.bmscdn.com/m6/images/common-modules/regions/bang.png" alt="BANG" class="sc-bqjOQT aUKrX" /><p>Bengaluru</p></span>
              <span onClick={() => takecity("Hyderabad")} className="pointer"><img src="//in.bmscdn.com/m6/images/common-modules/regions/hyd.png" alt="HYD" class="sc-bqjOQT aUKrX" /><p>Hyderabad</p></span>
              <span onClick={() => takecity("Ahmedabad")} className="pointer"><img src="//in.bmscdn.com/m6/images/common-modules/regions/ahd.png" alt="AHD" class="sc-bqjOQT aUKrX" /><p>Ahmedabad</p></span>
              <span onClick={() => takecity("Chandigarh")} className="pointer"><img src="//in.bmscdn.com/m6/images/common-modules/regions/chd.png" alt="CHD" class="sc-bqjOQT aUKrX" /><p>Chandigarh</p></span>
              <span onClick={() => takecity("Chennai")} className="pointer"><img src="//in.bmscdn.com/m6/images/common-modules/regions/chen.png" alt="CHEN" class="sc-bqjOQT aUKrX" /><p>Chennai</p></span>
              <span onClick={() => takecity("Pune")} className="pointer"><img src="//in.bmscdn.com/m6/images/common-modules/regions/pune.png" alt="PUNE" class="sc-bqjOQT aUKrX" /><p>Pune</p></span>
              <span onClick={() => takecity("Kolkata")} className="pointer"><img src="//in.bmscdn.com/m6/images/common-modules/regions/kolk.png" alt="KOLK" class="sc-bqjOQT aUKrX" /><p>Kolkata</p></span>
              <span onClick={() => takecity("Kochi")} className="pointer"><img src="//in.bmscdn.com/m6/images/common-modules/regions/koch.png" alt="KOCH" class="sc-bqjOQT aUKrX" /><p>Kochi</p></span>

            </div>
            <span>View All Cities</span>
          </div>
        </div>
        : ""
      }
      <div className="navfirst">
        <div className="navinside" >
          <Link to="/">
            <svg className="navlogo" viewBox="0 0 88 26" height="33.9" width="115" xmlns="http://www.w3.org/2000/svg"><title>BookMyShow</title><g fill="none"><path d="M55.433 7.383l-1.444-2.43-2.583 1.213-1.444-2.43L47.38 4.95l-1.445-2.43-2.582 1.215-1.445-2.43-2.582 1.212L37.88.087 35.3 1.3l-5.476 17.591 6.643 2.005a3.516 3.516 0 0 1 3.363-2.45c1.944 0 3.52 1.557 3.52 3.478l-.001.07c.016.315-.021.634-.118.946l6.756 2.042 5.446-17.6" fill="#C4242B"></path><path d="M35.52 17.438a.705.705 0 0 1-.591-.705V8.122a.715.715 0 0 1 .724-.717h6.297c.164 0 .329.016.489.043a2.798 2.798 0 0 1 2.336 2.749v6.536a.705.705 0 0 1-.217.51.73.73 0 0 1-.641.195.704.704 0 0 1-.59-.705v-6.536a1.363 1.363 0 0 0-1.377-1.358h-1.372v7.894a.723.723 0 0 1-.86.705.705.705 0 0 1-.59-.705V8.838h-2.75v7.895a.704.704 0 0 1-.216.51.728.728 0 0 1-.642.195M45.99 21.19a.704.704 0 0 1-.592-.706c0-.195.074-.377.209-.51a.73.73 0 0 1 .516-.206c.61 0 1.14-.39 1.315-.97l.748-2.462-2.448-8.083a.722.722 0 0 1 .483-.904.742.742 0 0 1 .896.473l1.82 6.03 1.839-6.026c.091-.34.46-.556.839-.49l.051.011c.392.121.608.528.489.907l-2.52 8.295-.796 2.655c-.206.61-.56 1.106-1.022 1.44-.5.365-1.086.557-1.694.557a.708.708 0 0 1-.133-.012M1.614 15.87h1.428c.788 0 1.43-.633 1.43-1.413v-4.141c0-.687-.498-1.272-1.183-1.391a1.501 1.501 0 0 0-.247-.022l-1.43.001.002 6.965zM.72 17.347a.732.732 0 0 1-.616-.734V3.758c0-.203.077-.391.218-.53a.751.751 0 0 1 .666-.203c.362.062.624.37.624.734v3.656h1.43a2.91 2.91 0 0 1 2.938 2.901l-.001 4.141c0 1.601-1.318 2.902-2.938 2.902H.86a.676.676 0 0 1-.14-.011zM11.096 8.839a1.478 1.478 0 0 0-.246-.02c-.801 0-1.43.62-1.43 1.412v4.313a1.413 1.413 0 0 0 1.43 1.412c.788 0 1.429-.632 1.43-1.412l-.001-4.313c0-.688-.498-1.272-1.183-1.392m-.763 8.564a2.905 2.905 0 0 1-2.42-2.86V10.23c0-.778.304-1.507.858-2.054a2.94 2.94 0 0 1 2.079-.847 2.91 2.91 0 0 1 2.938 2.902l-.001 4.313c0 .775-.308 1.504-.867 2.055a2.94 2.94 0 0 1-2.07.847 2.948 2.948 0 0 1-.517-.043M18.902 8.839a1.47 1.47 0 0 0-.245-.02c-.802 0-1.428.62-1.428 1.412v4.313a1.412 1.412 0 0 0 1.428 1.412c.378 0 .733-.146 1.005-.41.273-.268.424-.624.424-1.002V10.23c0-.687-.498-1.27-1.184-1.391m-.762 8.564a2.907 2.907 0 0 1-2.42-2.859v-4.313c0-1.601 1.317-2.903 2.937-2.903.17 0 .34.014.506.043a2.91 2.91 0 0 1 2.431 2.86v4.313c0 .777-.308 1.504-.867 2.055a2.94 2.94 0 0 1-2.07.847c-.174 0-.348-.014-.517-.043M24.142 17.434a.733.733 0 0 1-.614-.733V3.758a.735.735 0 0 1 .753-.745.746.746 0 0 1 .754.745v7.66l3.474-3.843a.766.766 0 0 1 .697-.228c.139.024.27.085.379.175.309.28.33.75.052 1.048l-2.615 2.88 2.717 4.902a.705.705 0 0 1 .066.553.732.732 0 0 1-.37.443.755.755 0 0 1-.5.082.749.749 0 0 1-.526-.356l-2.444-4.433-.93 1.013v3.047c0 .202-.08.39-.225.532a.758.758 0 0 1-.668.201M57.41 17.426a2.782 2.782 0 0 1-1.96-1.355.75.75 0 0 1-.068-.569.739.739 0 0 1 .346-.45c.15-.084.33-.114.505-.084a.75.75 0 0 1 .525.358c.199.335.509.546.895.614.42.066.803-.048 1.116-.316.29-.267.442-.648.404-1.016a1.22 1.22 0 0 0-.548-.964l-2.031-1.425a2.708 2.708 0 0 1-1.155-2.013 2.642 2.642 0 0 1 .884-2.152 2.754 2.754 0 0 1 2.24-.694h.001c.856.15 1.555.63 1.95 1.323a.746.746 0 0 1 .07.563.747.747 0 0 1-.348.454.757.757 0 0 1-.504.083.747.747 0 0 1-.526-.357c-.172-.3-.482-.51-.856-.575a1.189 1.189 0 0 0-1.021.296c-.26.238-.403.596-.382.96.019.351.22.694.523.894l2.032 1.404a2.729 2.729 0 0 1 1.177 2.101 2.651 2.651 0 0 1-.906 2.214 2.84 2.84 0 0 1-2.307.714l-.055-.008M63.246 17.447a.75.75 0 0 1-.625-.735V3.77c0-.202.08-.39.226-.533a.762.762 0 0 1 .667-.2.733.733 0 0 1 .615.733v3.655h1.43c.174 0 .348.015.516.045a2.902 2.902 0 0 1 2.42 2.857l.001 6.385a.741.741 0 0 1-.883.734.747.747 0 0 1-.625-.735v-6.384a1.41 1.41 0 0 0-1.43-1.412h-1.429v7.797a.742.742 0 0 1-.754.746.781.781 0 0 1-.13-.01M73.609 8.85a1.429 1.429 0 0 0-1.26.39c-.268.265-.416.62-.416 1v4.316c0 .686.494 1.27 1.173 1.388a1.43 1.43 0 0 0 1.261-.388c.274-.268.424-.622.424-1.001V10.24c0-.687-.497-1.272-1.182-1.391m-.763 8.563a2.903 2.903 0 0 1-2.42-2.857V10.24c-.001-1.6 1.317-2.902 2.937-2.902.169 0 .34.013.506.043a2.91 2.91 0 0 1 2.43 2.859v4.315a2.856 2.856 0 0 1-.867 2.054 2.938 2.938 0 0 1-2.586.803M87.892 8.254a.712.712 0 0 0-.077-.545.781.781 0 0 0-.49-.342.747.747 0 0 0-.864.546 920.42 920.42 0 0 1-1.452 5.726l-.014.056-.013-.056c-.62-2.458-1.447-5.69-1.456-5.724a.706.706 0 0 0-.58-.55.75.75 0 0 0-.85.548c-.01.03-.819 3.268-1.454 5.726l-.014.056-.014-.056c-.618-2.458-1.447-5.695-1.455-5.726a.74.74 0 0 0-.889-.536.73.73 0 0 0-.542.877l2.185 8.632a.754.754 0 0 0 .714.556.708.708 0 0 0 .715-.557c.008-.033.837-3.27 1.456-5.73l.013-.054.016.054c.64 2.483 1.451 5.73 1.452 5.732a.754.754 0 0 0 .715.556.71.71 0 0 0 .714-.559l2.184-8.63" fill="#FFF"></path></g></svg>
          </Link>
          <span>

            <img src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png" alt="search" />
            <input type="text" placeholder="Search for Movies, Events, Plays, Sports and Activities" />
          </span>
        </div>

        <div class="sc-eInJlc fIvCmI"><span onClick={() => takecity(null)} className="selectcity">{cities} <span className="arrow-down "></span> </span><div class="sc-jKVCRD hmbjRr">{tokens ? "" : <div onClick={signtoggle} class="sc-chbbiW bQENkS">Sign in</div>}{tokens ? <h4 style={{ color: "white", "display": "flex", "alignItems": "center" }} onClick={menutoggle}><img style={{ width: "30px", height: "30px", "margin-right": "10px" }} src="//in.bmscdn.com/m6/images/my-profile/bms-user.png" alt="Profile" class="sc-kxynE fLWHdD" />Hi,User</h4> : <div class="sc-hzNEM hGOWBG"><svg onClick={menutoggle} width="22px" height="14px" xmlns="http://www.w3.org/2000/svg"><title>Hamburger Menu</title><g fill-rule="nonzero" stroke="#FFF" stroke-width="1.5" fill="none" stroke-linecap="round"><path d="M1.611 1h20.614M1.611 7h20.614M1.611 13h20.614"></path></g></svg></div>} </div></div>
      </div>
      <div className="navsecond">
        <span className="span1">
          <Link to="/" style={linkStyle}>Movies</Link>
          <Link to="/" style={linkStyle}><p style={linkNew} >NEW</p>Stream </Link>
          <Link to="/" style={linkStyle}>Events</Link>
          <Link to="/" style={linkStyle}>Plays</Link>
          <Link to="/" style={linkStyle}>Sports</Link>
          <Link to="/" style={linkStyle}>Activities</Link>
          <Link to="/" style={linkStyle}>Buzz</Link>
        </span>
        <span className="span2">
          <Link to="/" style={linksecond}><p style={linkNew} >NEW</p>ListYourShow</Link>
          <Link to="/" style={linksecond}>Corporates </Link>
          <Link to="/offers" style={linksecond}>Offers</Link>
          <Link to="/offers" style={linksecond}>Gift Cards</Link>
        </span>
      </div>

    </nav>
  )
}

function NavMd() {
  return (
    <div>
      <div className="flex  h-20 bg-darkBackground-700   ">
        <div className="flex text-white ml-5 mt-5 font-semibold cursor-pointer text-xl">
          <h2>book</h2>
          <img
            className="object-fill h-8 w-8"
            src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
            alt="logo"
          />
          <h2>show</h2>
        </div>
        <div className=" h-1/2 w-1/2 mr-5 bg-white mt-4 rounded flex items-center gap-3 ml-5 ">
          <BsSearch className="text-slate-600 ml-3" />
          <input
            className="w-full focus:outline-none h-1/2 "
            type="search"
            placeholder="Search for Movies,Events,Plays,Sports and Activies"
          />
        </div>
        <div className="flex   mt-5">
          <div className="flex cursor-pointer text-white">
            <h2>Kolkata</h2>
            <BsFillCaretDownFill className="ml-2 mt-1" />
          </div>
          <div className="flex  ml-5 mr-8 ">
            <button className="bg-red-500 hover:bg-red-600 h-8  w-20 text-white rounded">
              Sign in
            </button>
            <BiMenu className="text-white cursor-pointer ml-2  text-3xl" />
          </div>
        </div>
      </div>
      <div></div>
      <div className=" flex gap-x-2 justify-between bg-darkBackground-800 text-sm h-10">
        <div className="flex gap-6 ml-5 mt-2 cursor-pointer text-slate-300 ">
          <p className="hover:text-white">Movies</p>
          <p className="hover:text-white">Stream</p>
          <p className="hover:text-white">Events</p>
          <p className="hover:text-white">Plays</p>
          <p className="hover:text-white">Sports</p>
          <p className="hover:text-white">Activities</p>
          <p className="hover:text-white">Buzz</p>
        </div>

        <div className="flex gap-5 mr-4 mt-2 cursor-pointer text-slate-300">
          <p className="hover:text-white">ListYourShow</p>
          <p className="hover:text-white">Corporates</p>
          <p className="hover:text-white">Offers</p>
          <p className="hover:text-white">Gift Cards</p>
        </div>
      </div>
    </div>
  );
}

function NavSm() {
  return (
    <div className="flex justify-between  h-20 bg-darkBackground-700  ">
      <div className=" text-white w-40 ml-4 mt-4 cursor-pointer ">
        <h2 className="font-semibold text-xl">It all Starts here</h2>
        <div className="flex">
          <p>Kolkata</p>
          <BsFillCaretRightFill className="mt-1 ml-1" />
        </div>
      </div>

      <div className="flex   mt-5">
        <div className="flex  ml-5 mr-8 ">
          <button className="bg-red-500 hover:bg-red-600 h-8  w-20 text-white rounded-md">
            Use App
          </button>
          <BsSearch className="text-white cursor-pointer ml-4 mt-1  text-xl" />
        </div>
      </div>
    </div>
  );
}

const NavBar = () => {
  return (
    <>
      <nav className="hidden md:hidden lg:block">
        <NavLg />
      </nav>

      <nav className="hidden lg:hidden md:block">
        <NavMd />
      </nav>

      <nav className="md:hidden lg:hidden">
        <NavSm />
      </nav>
    </>
  );
};

export default NavBar;
