import React, {Component} from 'react';

// import { Doughnut, Line, Pie, Bar } from 'react-chartjs-2';

import FooterDashboard from '../components/FooterDashboard';
import NavLeftDashboard from '../components/NavLeftDashboard';
import HeaderDashboard from '../components/HeaderDashboard';
import Chart from "react-apexcharts";
import RadialBarChart from '../components/RadialBarChart';



const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const date = new Date();
    const lineState = {
        labels: months,
        datasets: [
            {
                label: `Sales in ${date.getFullYear() - 2}`,
                borderColor: '#00a0c4',
                backgroundColor: '#00a0c4',
                data: months.map((m, i) => { if (i === 0) {
                    return 0.5;
                  } else if (i === 1) {
                    return 0;
                  } else if (i === 2) {
                    return 0;
                  } else if (i === 3) {
                    return 0;
                  } else if (i === 4) {
                    return 0;
                  } else if (i === 5) {
                    return 0;
                  } else if (i === 6) {
                    return 0.2;
                  } else if (i === 7) {
                    return 0;
                  } else if (i === 8) {
                    return ;
                  } else if (i === 9) {
                    return 0;
                  } else if (i === 10) {
                    return 0.5;
                  } else if (i === 11) {
                    return 0;
                  } else if (i === 12) {
                    return 0;
                  } 
                }),
            },
            {
                label: `Sales in ${date.getFullYear() - 1}`,
                borderColor: 'rgb(241, 92, 87)',
                backgroundColor: 'rgb(241, 92, 87)',
                data: months.map((m, i) => { if (i === 0) {
                    return 0;
                  } else if (i === 1) {
                    return 0;
                  } else if (i === 2) {
                    return 0.5;
                  } else if (i === 3) {
                    return 0;
                  } else if (i === 4) {
                    return 0.3;
                  } else if (i === 5) {
                    return 0;
                  } else if (i === 6) {
                    return 0;
                  } else if (i === 7) {
                    return 0.6;
                  } else if (i === 8) {
                    return 0;
                  } else if (i === 9) {
                    return 1.6;
                  } else if (i === 10) {
                    return 1.9;
                  } else if (i === 11) {
                    return 3;
                  } else if (i === 12) {
                    return 0;
                  } 
                }),
            },
            {
                label: `Sales in ${date.getFullYear()}`,
                borderColor: '#4ade80',
                backgroundColor: '#4ade80',
                data: months.map((m, i) => { if (i === 0) {
                    return 2.5;
                  } else if (i === 1) {
                    return 5;
                  } else {
                    return 0;
                  } 
                }),
            },
        ],
    };

    

    const doughnutState = {
        labels: ['Out of Stock', 'In Stock'],
        datasets: [
            {
                backgroundColor: ['#00a0c4', 'rgb(241, 92, 87)'],
                hoverBackgroundColor: ['#00a0c4', 'rgb(241, 92, 87)'],
                data: [5, 10 - 0],
            },
        ],
    };

    const labels = ['Label 1', 'Label 2', 'Label 3', 'Label 4'];
  const colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560'];
  const series = [44, 55, 67, 83];
  const totalLabel = 'Total';


class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999,2000,2001]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  }
    
    render() {
        return (
            <div id="wrapper">
                <NavLeftDashboard />
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content">
                        <HeaderDashboard />

                        <div className="container-fluid">
                            <div className="d-sm-flex justify-content-between align-items-center mb-4">
                                <h3 className="text-dark mb-0">Dashboard</h3>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-xl-3 mb-4">
                                    <div className="card shadow border-start-primary py-2">
                                        <div className="card-body">
                                            <div className="row align-items-center no-gutters">
                                                <div className="col me-2">
                                                    <div className="text-uppercase text-primary fw-bold text-xs mb-1"><span>Active Users</span></div>
                                                    <div className="text-dark fw-bold h5 mb-0"><span>0</span></div>
                                                </div>
                                                <div className="col-auto"><i className="fas fa-user fa-2x text-gray-300"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-3 mb-4">
                                    <div className="card shadow border-start-success py-2">
                                        <div className="card-body">
                                            <div className="row align-items-center no-gutters">
                                                <div className="col me-2">
                                                    <div className="text-uppercase text-success fw-bold text-xs mb-1"><span>Number of sessions</span></div>
                                                    <div className="text-dark fw-bold h5 mb-0"><span>0</span></div>
                                                </div>
                                                <div className="col-auto"><i className="fas fa-user fa-2x text-gray-300"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-3 mb-4">
                                    <div className="card shadow border-start-info py-2">
                                        <div className="card-body">
                                            <div className="row align-items-center no-gutters">
                                                <div className="col me-2">
                                                    <div className="text-uppercase text-info fw-bold text-xs mb-1"><span>Daily active users</span></div>
                                                    <div className="row g-0 align-items-center">
                                                        <div className="col-auto">
                                                            <div className="text-dark fw-bold h5 mb-0 me-3"><span>0</span></div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="col-auto"><i className="fas fa-clipboard-list fa-2x text-gray-300"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-3 mb-4">
                                    <div className="card shadow border-start-warning py-2">
                                        <div className="card-body">
                                            <div className="row align-items-center no-gutters">
                                                <div className="col me-2">
                                                    <div className="text-uppercase text-warning fw-bold text-xs mb-1"><span>Revenue</span></div>
                                                    <div className="text-dark fw-bold h5 mb-0"><span>0</span></div>
                                                </div>
                                                <div className="col-auto"><i className="fas fa-dollar-sign fa-2x text-gray-300"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
        <div className="col-lg-7 col-xl-8">
          <div className="card shadow mb-4">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h6 className="text-primary fw-bold m-0">Earnings Overview</h6>
              <div className="dropdown no-arrow"><button className="btn btn-link btn-sm dropdown-toggle" aria-expanded="false" data-bs-toggle="dropdown" type="button"><i className="fas fa-ellipsis-v text-gray-400" /></button>
                <div className="dropdown-menu shadow dropdown-menu-end animated--fade-in">
                  <p className="text-center dropdown-header">dropdown header:</p><a className="dropdown-item" href="#">&nbsp;Action</a><a className="dropdown-item" href="#">&nbsp;Another action</a>
                  <div className="dropdown-divider" /><a className="dropdown-item" href="#">&nbsp;Something else here</a>
                </div>
              </div>
            </div>
            <div className="card-body">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="750"
              height={350}
            />
                    {/* <Line data={lineState} /> */}
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-xl-4">
          <div className="card shadow mb-4">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h6 className="text-primary fw-bold m-0">Revenue Sources</h6>
              <div className="dropdown no-arrow"><button className="btn btn-link btn-sm dropdown-toggle" aria-expanded="false" data-bs-toggle="dropdown" type="button"><i className="fas fa-ellipsis-v text-gray-400" /></button>
                <div className="dropdown-menu shadow dropdown-menu-end animated--fade-in">
                  <p className="text-center dropdown-header">dropdown header:</p><a className="dropdown-item" href="#">&nbsp;Action</a><a className="dropdown-item" href="#">&nbsp;Another action</a>
                  <div className="dropdown-divider" /><a className="dropdown-item" href="#">&nbsp;Something else here</a>
                </div>
              </div>
            </div>
            <div className="card-body">
                    {/* <Doughnut data={doughnutState} /> */}
                    <div className="app">
      <RadialBarChart labels={labels} colors={colors} series={series} totalLabel={totalLabel} />
    </div>
                </div>
          </div>
        </div>
      </div>
                            {/* <div className="row">
                                <div className="col-lg-6 mb-4">
                                    <div className="card shadow mb-4">
                                        <div className="card-header py-3">
                                            <h6 className="text-primary fw-bold m-0">User engagement metrics</h6>
                                        </div>
                                        <div className="card-body">
                                            <h4 className="small fw-bold">Retention rate<span className="float-end">20%</span></h4>
                                            <div className="progress mb-4">
                                                <div className="progress-bar bg-success" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{ width: '20%' }}><span className="visually-hidden">20%</span></div>
                                            </div>
                                            <h4 className="small fw-bold">Churn rate<span className="float-end">40%</span></h4>
                                            <div className="progress mb-4">
                                                <div className="progress-bar bg-danger" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{ width: '40%' }}><span className="visually-hidden">40%</span></div>
                                            </div>
                                            <h4 className="small fw-bold">Time spent in app<span className="float-end">60%</span></h4>
                                            <div className="progress mb-4">
                                                <div className="progress-bar bg-primary" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: '60%' }}><span className="visually-hidden">60%</span></div>
                                            </div>
                                            <h4 className="small fw-bold">User feedback<span className="float-end">80%</span></h4>
                                            <div className="progress mb-4">
                                                <div className="progress-bar bg-info" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }}><span className="visually-hidden">80%</span></div>
                                            </div>
                                            <h4 className="small fw-bold">Conversion rate<span className="float-end">Complete!</span></h4>
                                            <div className="progress mb-4">
                                                <div className="progress-bar bg-warning" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: '100' }}><span className="visually-hidden">100%</span></div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col">
                                    <div className="card shadow mb-4">
                                        <div className="card-header py-3">
                                            <h6 className="text-primary fw-bold m-0">Logs</h6>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">
                                                <div className="row align-items-center no-gutters">
                                                    <div className="col me-2">
                                                        <h6 className="mb-0"><strong>Airi Satou</strong></h6><span className="text-xs">10:30 AM</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="row align-items-center no-gutters">
                                                    <div className="col me-2">
                                                        <h6 className="mb-0"><strong>Angelica Ramos</strong></h6><span className="text-xs">11:30 AM</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <FooterDashboard />

                </div>
            </div>
                                                    )
                                                    }
                                                    }
                                                    export default Dashboard;