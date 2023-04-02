import React, {Component} from 'react';

class NavLeftDashboard extends Component{
  constructor(props) {
    super(props);
    this.state = {
      activeItem: null,
      projectName:""
    };
  }
  
  componentDidMount(){
    const projectId = window.localStorage.getItem('projectId');
    fetch(`http://127.0.0.1:9092/project/project/${projectId}`)
    .then((res) => res.json())
    .then((data) => {
        this.setState({projectName:data?.project.name});
      })
  }

  handleClick = (item) => {
    this.setState({ activeItem: item });
  }

    render() {
      const {projectName} = this.state;
      return (
        <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0" style={{background: 'linear-gradient(#00a0c4 0%, #005bc6), #ef99a3'}}>
            <div className="container-fluid align-items-center p-0" ><a className="navbar-brand  justify-content-center align-items-center sidebar-brand m-0" href="/dashboard"><img src="assetsDash/img/logo/logo_light_mode-01.png" alt="logo" width="137" height="36" style={{}}/>
                    <div className="sidebar-brand-icon rotate-n-15"></div>
                    <div className="sidebar-brand-text mx-3"></div>
                </a>
                <hr className="sidebar-divider"/>
                <h5 style={{padding:"0 16px",color:"#fff"}}>{projectName}</h5>
                <ul className="navbar-nav text-light" id="accordionSidebar">
                    <li className="nav-item"><a className="nav-link" href="/dashboard" onClick={() => this.handleClick("dashboard")}><i className="material-icons">dashboard</i><span style={{paddingleft: '0px', marginleft: '0px'}}>Dashboard</span></a></li>
                    <li className="nav-item"><a className="nav-link" href="/authentification" onClick={() => this.handleClick("authentification")}><i className="icon ion-log-in"></i><span>Authentification</span></a></li>
                    <li className="nav-item"><a className="nav-link" href="/storage" onClick={() => this.handleClick("storage")} ><i className="typcn typcn-cloud-storage-outline" ></i><span>Storage</span></a></li>
                    <li className="nav-item"><a className="nav-link" href="/mailing" onClick={() => this.handleClick("mailing")} ><i className="material-icons" >mail</i><span>Mailing</span></a></li>
                    <li className="nav-item"><a className="nav-link" href="/apigene" onClick={() => this.handleClick("apigene")} ><i className="far fa-sun"></i><span>Api Generator</span></a></li>
                    <li className="nav-item"> <a className="nav-link" href="/extensions" onClick={() => this.handleClick("extensions")} ><i className="typcn typcn-puzzle" style={{paddingbottom: '0px',paddingright: '0px'}}></i> <span>Extensions</span></a></li>
                    <li className="nav-item"><a className="nav-link" href="/products" onClick={() => this.handleClick("products")}><i className="material-icons" style={{margintop: '-2px',opacity: '1'}}>menu</i><span style={{paddingright: '0px',paddingtop: '0px',paddingbottom: '0px',paddingleft: '0px'}}><span style={{fontweight: 'normal !important'}}>All Poducts</span><br></br></span></a></li>
               
                </ul>
                <div className="text-center d-none d-md-inline"></div>
            </div>
        </nav>
        )
    }
}

export default NavLeftDashboard;