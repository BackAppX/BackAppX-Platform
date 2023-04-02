import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HeaderDashbaord = () => {

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
        });
    }
  }, []);

  function disconnect() {
    window.localStorage.clear();
    window.location.href = './';
  }

  const isLoggedIn = window.localStorage.getItem('isLoggedIn');


  return (
            <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top border-0">
                    <div className="container-fluid"><button className="btn btn-link d-md-none rounded-circle me-3" id="sidebarToggleTop" type="button"><i className="fas fa-bars"></i></button>
                        <form className="d-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search">
                            <div className="input-group"><input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..." /><button className="btn py-0" type="button" style={{ background:'#00a0c4'}}><i className="fas white fa-search"style={{ color:'white'}}></i></button></div>
                        </form>
                        <ul className="navbar-nav flex-nowrap ms-auto">
                            <li className="nav-item dropdown d-sm-none no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="index.html"><i className="fas fa-search"></i></a>
                                <div className="dropdown-menu dropdown-menu-end p-3 animated--grow-in" aria-labelledby="searchDropdown">
                                    <form className="me-auto navbar-search w-100">
                                        <div className="input-group"><input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..." />
                                            <div className="input-group-append"><button className="btn btn-primary py-0" type="button"><i className="fas fa-search"></i></button></div>
                                        </div>
                                    </form>
                                </div>
                            </li>
                            <li className="nav-item dropdown no-arrow mx-1">
                                <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="index.html"><span className="badge bg-danger badge-counter">3+</span><i className="fas fa-bell fa-fw"></i></a>
                                    <div className="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
                                        <h6 className="dropdown-header">alerts center</h6><a className="dropdown-item d-flex align-items-center" href="index.html">
                                            <div className="me-3">
                                                <div className="bg-primary icon-circle"><i className="fas fa-file-alt text-white"></i></div>
                                            </div>
                                            <div><span className="small text-gray-500">December 12, 2019</span>
                                                <p>A new monthly report is ready to download!</p>
                                            </div>
                                        </a><a className="dropdown-item d-flex align-items-center" href="index.html">
                                            <div className="me-3">
                                                <div className="bg-success icon-circle"><i className="fas fa-donate text-white"></i></div>
                                            </div>
                                            <div><span className="small text-gray-500">December 7, 2019</span>
                                                <p>$290.29 has been deposited into your account!</p>
                                            </div>
                                        </a><a className="dropdown-item d-flex align-items-center" href="index.html">
                                            <div className="me-3">
                                                <div className="bg-warning icon-circle"><i className="fas fa-exclamation-triangle text-white"></i></div>
                                            </div>
                                            <div><span className="small text-gray-500">December 2, 2019</span>
                                                <p>Spending Alert: We've noticed unusually high spending for your account.</p>
                                            </div>
                                        </a><a className="dropdown-item text-center small text-gray-500" href="index.html">Show All Alerts</a>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown no-arrow mx-1">
                                <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="index.html"><span className="badge bg-danger badge-counter">7</span><i className="fas fa-envelope fa-fw"></i></a>
                                    <div className="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
                                        <h6 className="dropdown-header">alerts center</h6><a className="dropdown-item d-flex align-items-center" href="index.html">
                                            <div className="dropdown-list-image me-3"><img className="rounded-circle" src=''  alt="avatar" />
                                                <div className="bg-success status-indicator"></div>
                                            </div>
                                            <div className="fw-bold">
                                                <div className="text-truncate"><span>Hi there! I am wondering if you can help me with a problem I've been having.</span></div>
                                                <p className="small text-gray-500 mb-0">Emily Fowler - 58m</p>
                                            </div>
                                        </a><a className="dropdown-item d-flex align-items-center" href="index.html">
                                            <div className="dropdown-list-image me-3"><img className="rounded-circle" src="assetsDash/img/avatars/avatar2.jpeg" alt="avatar" />
                                                <div className="status-indicator"></div>
                                            </div>
                                            <div className="fw-bold">
                                                <div className="text-truncate"><span>I have the photos that you ordered last month!</span></div>
                                                <p className="small text-gray-500 mb-0">Jae Chun - 1d</p>
                                            </div>
                                        </a><a className="dropdown-item d-flex align-items-center" href="index.html">
                                            <div className="dropdown-list-image me-3"><img className="rounded-circle" src="assetsDash/img/avatars/avatar3.jpeg"  alt="avatar" />
                                                <div className="bg-warning status-indicator"></div>
                                            </div>
                                            <div className="fw-bold">
                                                <div className="text-truncate"><span>Last month's report looks great, I am very happy with the progress so far, keep up the good work!</span></div>
                                                <p className="small text-gray-500 mb-0">Morgan Alvarez - 2d</p>
                                            </div>
                                        </a><a className="dropdown-item d-flex align-items-center" href="index.html">
                                            <div className="dropdown-list-image me-3"><img className="rounded-circle" src="assetsDash/img/avatars/avatar5.jpeg"  alt="avatar" />
                                                <div className="bg-success status-indicator"></div>
                                            </div>
                                            <div className="fw-bold">
                                                <div className="text-truncate"><span>Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...</span></div>
                                                <p className="small text-gray-500 mb-0">Chicken the Dog · 2w</p>
                                            </div>
                                        </a><a className="dropdown-item text-center small text-gray-500" href="index.html">Show All Alerts</a>
                                    </div>
                                </div>
                                <div className="shadow dropdown-list dropdown-menu dropdown-menu-end" aria-labelledby="alertsDropdown"></div>
                            </li>
                            
                            <div className="d-none d-sm-block topbar-divider"></div>
                            <li className="nav-item dropdown no-arrow">
                                <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="index.html"><span className="d-none d-lg-inline me-2 text-gray-600 small">{userData.name}</span><img className="border rounded-circle img-profile" src={`http://localhost:9092/user/image/${userData._id}/${userData.image}`} alt="avatar" /></a>
                                    <div className="dropdown-menu shadow dropdown-menu-end animated--grow-in"><a className="dropdown-item" href="index.html"><i className="fas fa-user fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Profile</a><a className="dropdown-item" href="/"><i className="fas fa-globe fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;BackAppx</a><a className="dropdown-item" href="https://back-app-x-documentation.vercel.app"><i className="fas fa-hashtag fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Docs</a>
                                        <div className="dropdown-divider"></div><a className="dropdown-item" href="index.html"><i className="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Logout</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                      </div>
                   </nav>
                  )
            }
        
export default HeaderDashbaord;