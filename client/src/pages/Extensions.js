import React, {Component} from 'react';

import FooterDashboard from '../components/FooterDashboard';
import NavLeftDashboard from '../components/NavLeftDashboard';
import HeaderDashboard from '../components/HeaderDashboard';

class Extensions extends Component {

    render() {
        return (
            <><script src="assetsDash/bootstrap/js/bootstrap.min.js"></script><script src="assetsDash/js/chart.min.js"></script><script src="assetsDash/js/bs-init.js"></script><script src="assetsDash/js/theme.js"></script><script src="assetsDash/js/jquery.min.js"></script><script src="assetsDash/js/bootstrap.bundle.min.js"></script><script src="assetsDash/js/script.js"></script><link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" /><link rel="stylesheet" href="assetsDash/bootstrap/css/bootstrap.min.css" /><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i&amp;display=swap" /><link rel="stylesheet" href="assetsDash/fonts/fontawesome-all.min.css" /><link rel="stylesheet" href="assetsDash/fonts/ionicons.min.css" /><link rel="stylesheet" href="assetsDash/fonts/material-icons.min.css" /><link rel="stylesheet" href="assetsDash/fonts/typicons.min.css" /><link rel="stylesheet" href="assetsDash/css/card-3-column-animation-shadows-images.css" /><link rel="stylesheet" href="assetsDash/css/animate.min.css" /><link rel="stylesheet" href="assetsDash/css/style.css" /><link rel="stylesheet" href="assetsDash/css/News-Cards.css" /><link rel="stylesheet" href="assetsDash/css/Tabbed-Panel-tabbed-panel.css" /> <div id="wrapper">
            <NavLeftDashboard />
            <div className="d-flex flex-column" id="content-wrapper">
            <div id="content">
                    <HeaderDashboard />
             <div className="container-fluid">
                <h3 className="text-dark mb-4">Extensions</h3>
                <div className="card shadow">
                    <div className="card-header py-3">
                        <p className="text-primary m-0 fw-bold" style={{ bsprimary: '#00a0c4', bsprimaryrgb: '0,160,196' }}><span style={{ fontweight: 'normal !important', color: 'rgba(var(--bs-dark-rgb), var(--bs-text-opacity))' }}>Extensions</span></p>
                    </div>
                    <div className="card-body">
                        <div id="cardEntrada-2" className="p-4 text-center shadow-lg m-5 rounded-5" style={{ background: 'linear-gradient(171deg, #00a0c4 0%, var(--bs-indigo) 100%), var(--bs-purple)', width: '280px' }}><img className="pt-2 w-50" src="assetsDash/img/584856ade0bb315b0f7675ab.png" width="116" height="125" alt='email' />
                            <h3 className="text-white text-center pt-2">Trigger Email</h3>
                            <p className="fw-bold pt-1 text-white p-0 m-0"><span style={{ fontweight: 'normal !important' }}>Made by</span> BackAppX</p>
                            <p className="fw-light text-white m-0">Composes and sends an email base on the contents of a document written to a specified cloud Firestore...&nbsp;</p>
                            <hr className="text-white" />
                            <div className="text-start col-12"><button className="btn" type="button" style={{ color:'white', background:'rgb(241, 92, 87)'}}>Install</button><button className="btn" type="button" style={{ marginleft: '34px', paddingleft: '24px' }} data-bs-target="#modalRecibirCadaber" data-bs-toggle="modal"><span className="text-start text-light">View details</span></button></div>
                        </div>
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
export default Extensions;