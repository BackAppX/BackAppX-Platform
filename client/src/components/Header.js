/* import React, {Component} from 'react';
import {BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import {useTranslation} from "react-i18next";
import { NavLink } from "react-router-dom";


class Header extends Component{
  constructor(props){
    super(props);
    this.state = {
      token:"",
      userData:"",
      imageUrl:""
    }
  }
  componentDidMount(){
    const isLoggedIn=window.localStorage.getItem("isLoggedIn");
    if (isLoggedIn=="true"){
      fetch("http://127.0.0.1:9092/user/userData",{
        method:"POST",
        crossDomain:true,
        headers:{
          "Content-Type":"application/json",
          Accept:"application/json",
          "Access-Control-Allow-Origin":"*",
        },
        body: JSON.stringify({
          token:window.localStorage.getItem("token")
        }),
      })
      .then((res) => res.json())
      .then((data) => {
          
          this.setState({token:window.localStorage.getItem("token"),userData:data?.data,imageUrl:data?.data.image.url});
          console.log(this.state)
        })
    }
    
    }
    
    disconnect(){
      window.localStorage.clear();
      window.location.href="./";
    }
    
    render() {
      const { token,userData,imageUrl } = this.state; 
      const isLoggedIn = window.localStorage.getItem("isLoggedIn");
      return (
        <div id="navigation-block">
          <nav className="navbar navbar-light navbar-expand-md border-secondary border-4 shadow-sm" style={{height: '62.8px'}}>
            <div className="container"><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-2"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
              <div className="collapse navbar-collapse" id="navcol-2">
                <ul className="navbar-nav me-auto">
{/*                 <li className="nav-item">
                <NavLink className="nav-link"
                    to="pricing"
                    style={({ isActive }) => ({
                      color: isActive ? '#fff' : '#545e6f',
                      background: isActive ? '#7600dc' : '#f0f0f0',
                    })}
                  > test</NavLink> </li> *//*}
                  <li className="nav-item"><a className="nav-link active" href="/">Home</a></li>
                  <li className="nav-item"><a className="nav-link" href="services">Services</a></li>
                  <li className="nav-item"><a className="nav-link" href="pricing">Pricing</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">Docs</a></li>
                </ul>
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item"><a className="navbar-brand" style={{fontFamily: 'Bungee, cursive', paddingTop: '-0.6px'}} href="/"><img className="img-fluid" src="assets/img/logo.png" style={{width: '150px'}} /></a></li>
                </ul>
                { isLoggedIn == "true" ? (
                      <ul className="navbar-nav ms-auto">
                      <div className="dropdown show">
                              <a className="dropdown-toggle"  style={{textDecoration:'none',color:'#000000E6'}}href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span>{userData.name}</span><img src={imageUrl} style={{width:"30px",height:"30px",borderRadius: "50%",marginLeft:"10px"}} />
                              </a>
                              <div className="dropdown-menu w-100" aria-labelledby="dropdownMenuLink">
                              <a className="dropdown-item" href="project">Mes projets</a>
                                <a className="dropdown-item" href="edit-profile">Modifier mon profil</a>
                                <a className="dropdown-item" onClick={this.disconnect} href="#">Se deconnecter</a>
                              </div>
                            </div>  
                            </ul>

                ) :(
                  <ul className="navbar-nav ms-auto">
                  <li className="nav-item"><a className="nav-link active" href="login"><button className="btn btn-outline-primary link-primary border rounded-pill border-0" type="button">Sign in</button></a></li>
                  <li className="nav-item"><a className="nav-link" href="signup"><button className="btn btn-primary border rounded-pill border-0" type="button" style={{background: '#F15C57'}}>Sign Up</button></a></li>
                  </ul>
                  )}
                <ul className="navbar-nav" style={{marginLeft:"10px"}}>
                  <button className='btn btn-outline-primary' style={{width:"60px",borderWidth:"1px",borderColor:"#f05b57"}}>En</button>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      );
    }
  };
  export default Header; */

  import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [token, setToken] = useState('');
  const [userData, setUserData] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const isLoggedIn = window.localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      fetch('http://127.0.0.1:9092/user/userData', {
        method: 'POST',
        crossDomain: true,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
          token: window.localStorage.getItem('token'),
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setToken(window.localStorage.getItem('token'));
          setUserData(data?.data);
          setImageUrl(data?.data.image);
        });
    }
  }, []);

  function disconnect() {
    window.localStorage.clear();
    window.location.href = './';
  }

  const [t , i18n] = useTranslation();

  const isLoggedIn = window.localStorage.getItem('isLoggedIn');

  return (
    <div id="navigation-block">
    <nav className="navbar navbar-light navbar-expand-md border-secondary border-4 shadow-sm" style={{height: '62.8px'}}>
      <div className="container"><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-2"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
        <div className="collapse navbar-collapse" id="navcol-2">
          <ul className="navbar-nav me-auto">
{/*                 <li className="nav-item">
          <NavLink className="nav-link"
              to="pricing"
              style={({ isActive }) => ({
                color: isActive ? '#fff' : '#545e6f',
                background: isActive ? '#7600dc' : '#f0f0f0',
              })}
            > test</NavLink> </li> */}
            <li className="nav-item"><a className="nav-link active" href="/">{t('menu1')}</a></li>
            <li className="nav-item"><a className="nav-link" href="services">{t('menu2')}</a></li>
            <li className="nav-item"><a className="nav-link" href="pricing">{t('menu3')}</a></li>
            <li className="nav-item"><a className="nav-link" href="https://back-app-x-documentation.vercel.app">{t('menu4')}</a></li>
          </ul>
          <ul className="navbar-nav mx-auto">
            <li className="nav-item"><a className="navbar-brand" style={{fontFamily: 'Bungee, cursive', paddingTop: '-0.6px'}} href="/"><img className="img-fluid" src="assets/img/logo.png" style={{width: '150px'}} /></a></li>
          </ul>
          { isLoggedIn == "true" ? (
                <ul className="navbar-nav ms-auto">
                <div className="dropdown show">
                        <a className="dropdown-toggle"  style={{textDecoration:'none',color:'#000000E6'}}href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <span>{userData.name}</span>{ userData.image === "avatar.png" ? <img src={`http://localhost:9092/user/image/avatar/avatar.png`} style={{width:"30px",height:"30px",borderRadius: "50%",marginLeft:"10px"}}/>  : <img src={`http://localhost:9092/user/image/${userData._id}/${userData.image}`} style={{width:"30px",height:"30px",borderRadius: "50%",marginLeft:"10px"}}  /> }
                        </a>
                        <div className="dropdown-menu w-100" aria-labelledby="dropdownMenuLink">
                        <a className="dropdown-item" href="project">{t('menuDrop1')}</a>
                          <a className="dropdown-item" href="edit-profile">{t('menuDrop2')}</a>
                          <a className="dropdown-item" onClick={disconnect} href="#">{t('menuDrop3')}</a>
                        </div>
                      </div>  
                      </ul>

          ) :(
            <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link active" href="login"><button className="btn btn-outline-primary link-primary border rounded-pill border-0" type="button">Sign in</button></a></li>
            <li className="nav-item"><a className="nav-link" href="signup"><button className="btn btn-primary border rounded-pill border-0" type="button" style={{background: '#F15C57'}}>Sign Up</button></a></li>
            </ul>
            )}
          <ul className="navbar-nav" style={{marginLeft:"10px"}}>

            {i18n.language=="en" ?(
            <button onClick={()=>{
              i18n.changeLanguage('fr');}}
            className='btn btn-outline-primary' style={{width:"60px",borderWidth:"1px",borderColor:"#f05b57"}}>Fr</button>
            ):(
              <button onClick={()=>{
                i18n.changeLanguage('en');}}
              className='btn btn-outline-primary' style={{width:"60px",borderWidth:"1px",borderColor:"#f05b57"}}>En</button>
            )

            }

            

        
          </ul>
        </div>
      </div>
    </nav>
  </div>
  );
          }
export default Header ;