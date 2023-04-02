import React, {Component} from 'react';

import FooterDashboard from '../components/FooterDashboard';
import NavLeftDashboard from '../components/NavLeftDashboard';
import HeaderDashboard from '../components/HeaderDashboard';

class Products extends Component {

    render() {
        return (
            <><script src="assetsDash/bootstrap/js/bootstrap.min.js"></script><script src="assetsDash/js/chart.min.js"></script><script src="assetsDash/js/bs-init.js"></script><script src="assetsDash/js/theme.js"></script><script src="assetsDash/js/jquery.min.js"></script><script src="assetsDash/js/bootstrap.bundle.min.js"></script><script src="assetsDash/js/script.js"></script><link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" /><link rel="stylesheet" href="assetsDash/bootstrap/css/bootstrap.min.css" /><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i&amp;display=swap" /><link rel="stylesheet" href="assetsDash/fonts/fontawesome-all.min.css" /><link rel="stylesheet" href="assetsDash/fonts/ionicons.min.css" /><link rel="stylesheet" href="assetsDash/fonts/material-icons.min.css" /><link rel="stylesheet" href="assetsDash/fonts/typicons.min.css" /><link rel="stylesheet" href="assetsDash/css/card-3-column-animation-shadows-images.css" /><link rel="stylesheet" href="assetsDash/css/animate.min.css" /><link rel="stylesheet" href="assetsDash/css/style.css" /><link rel="stylesheet" href="assetsDash/css/News-Cards.css" /><link rel="stylesheet" href="assetsDash/css/Tabbed-Panel-tabbed-panel.css" /> <div id="wrapper">
            <NavLeftDashboard />
            <div className="d-flex flex-column" id="content-wrapper">
            <div id="content">
                    <HeaderDashboard />
             <div className="container-fluid">
                <h3 className="text-dark mb-4">Products and features</h3>
                <div className="card shadow">
                    <div className="card-header py-3">
                        <p className="text-primary m-0 fw-bold" style={{ bsprimary: '#00a0c4', bsprimaryrgb: '0,160,196' }}></p>
                    </div>
                    <div className="card-body">
                        <section>
                            <div className="container">
                                <div className="row">
                                    <div className="col-auto col-sm-12 col-md-12 col-lg-4 col-xl-4" style={{ paddingtop: '15px', paddingbottom: '15px', paddingright: '15px', paddingleft: '15px' }}>
                                        <a href='/authentification' style={{ textDecoration: 'none' }}>
                                            <div className="bg-light border rounded shadow card" data-bss-hover-animate="pulse" style={{ boxshadow: '0px 0px' }}><img className="card-img-top" src="assetsDash/img/Data_security_28.jpg" alt='product' width="323" height="232" />
                                                <div className="card-body">
                                                    <h3 className="card-title" style={{ fontfamily: 'Antic, sans-serif', color: 'rgb(81,87,94)' }}>Authentification</h3>
                                                    <p className="card-text" style={{ fontfamily: 'Antic, sans-serif', color: 'rgb(81,87,94)' }}></p><p id="lorem">End-to-end user identification solution in less than 10 lines of code</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-auto col-sm-12 col-md-12 col-lg-4 col-xl-4" style={{ paddingtop: '15px', paddingbottom: '15px', paddingright: '15px', paddingleft: '15px', marginright: '0px', marginbottom: '0px' }}>
                                        <a href='/storage' style={{ textDecoration: 'none' }}>
                                            <div className="bg-light border rounded shadow card" data-bss-hover-animate="pulse"><img className="card-img-top" src="assetsDash/img/na_feb_10.jpg" width="323" height="232" alt='product' />
                                                <div className="card-body">
                                                    <h3 className="card-title" style={{ fontfamily: 'Antic, sans-serif', color: 'rgb(81,87,94)' }}>Storage</h3>
                                                    <p className="card-text" style={{ fontfamily: 'Antic, sans-serif', color: 'rgb(81,87,94)' }}></p><p id="lorem">Store and retrieve user-generated content such as images and video</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-auto col-sm-12 col-md-12 col-lg-4 col-xl-4" style={{ paddingtop: '15px', paddingbottom: '15px', paddingright: '15px', paddingleft: '15px' }}>
                                        <a href='/apigene' style={{ textDecoration: 'none' }}>
                                            <div className="bg-light border rounded shadow card" data-bss-hover-animate="pulse"><img className="card-img-top" src="assetsDash/img/7015995.jpg" width="323" height="232" alt='product' />
                                                <div className="card-body">
                                                    <h3 className="card-title" style={{ fontfamily: 'Antic, sans-serif', color: 'rgb(81,87,94)' }}>Api Generator</h3>
                                                    <p className="card-text" style={{ fontfamily: 'Antic, sans-serif', color: 'rgb(81,87,94)' }}></p><p id="lorem">API operations such as Crud , request handling, and response formatting</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-auto col-sm-12 col-md-12 col-lg-4 col-xl-4" style={{ paddingtop: '15px', paddingbottom: '15px', paddingright: '15px', paddingleft: '15px' }}>
                                        <a href='/extensions' style={{ textDecoration: 'none' }}>
                                            <div className="bg-light border rounded shadow card" data-bss-hover-animate="pulse"><img className="card-img-top" src="assetsDash/img/Puzzles-780x470.jpg" width="323" height="232" alt='product' />
                                                <div className="card-body">
                                                    <h3 className="card-title" style={{ fontfamily: 'Antic, sans-serif', color: 'rgb(81,87,94)' }}>Extensions</h3>
                                                    <p className="card-text" style={{ fontfamily: 'Antic, sans-serif', color: 'rgb(81,87,94)' }}></p><p id="lorem">Pre-installed solutions that save you time </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                </div>
                </div>

                    <FooterDashboard />

                    </div>

            </div></>
        

            )
        }
    }
export default Products;