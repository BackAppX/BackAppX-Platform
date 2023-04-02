import React, {Component} from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

class Signup extends Component {
  constructor(props){
    super(props);
    this.state={
      name:"",
      email:"",
      password:"",
      passwordCheck:"",
      phoneNumber:"",
      showAlert:false,
      alertText:"",
      alertColor:"alert-danger",
      premiumPlan:false
    }
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const {name,email,password,phoneNumber,premiumPlan}=this.state;
    console.log(name,email,password,phoneNumber);

    if ( this.validate()){
      fetch("http://127.0.0.1:9092/user/register",{
        method:"POST",
        crossDomain:true,
        headers:{
          "Content-Type":"application/json",
          Accept:"application/json",
          "Access-Control-Allow-Origin":"*",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          phoneNumber
        }),
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data,"userRegister")
        if (data?.status == "created"){

          if (premiumPlan){
            this.setState({alertText:"Votre compte a été créer. Vous allez être redérigé vers le paiement.",showAlert:true,alertColor:"alert-success"})
            setTimeout(() => {
              window.location.href="./payment"
            }, 2000);
          }else{
            this.setState({alertText:"Votre compte a été créer. Vous allez être redérigé vers l'authentification.",showAlert:true,alertColor:"alert-success"})
            setTimeout(() => {
              window.location.href="./login"
            }, 2000);
          }

        } else if(data?.status == "failed"){
          this.setState({alertText:"Les deux mot de passes doivent être identiques",showAlert:true})

    }
        
  
      })
     }

  }
  validate(){
    const {name,email,password,phoneNumber,passwordCheck} = this.state;

    let check = false;
    var validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (name.length>4){
      check=true;
    }else{
      this.setState({alertText:"Le username doit dépasser les 4 caracteres",showAlert:true})
      return false;
    }
    
    if (email.match(validRegex)) {  
      check=true;
    } else {
        
      this.setState({alertText:"Email invalide",showAlert:true})
      return false;
  
    } 
    if (Number.isInteger(parseInt(phoneNumber))){
      check=true;
    }else{
      this.setState({alertText:"Numero de Telephone invalide",showAlert:true})
      return false;
    }
    if (password==passwordCheck){
      check=true;
    }else{
      this.setState({alertText:"Les deux mot de passes doivent être identiques",showAlert:true})
      return false;
    }
    return check;

  }


    render() {
      const {alertText,showAlert,alertColor}= this.state;
        return (
            <div className="row" style={{height: '100vh'}}>
            <div style={{position:'absolute',marginTop:'20px'}}>
            <a href="/"  style={{marginLeft:'1rem',borderRadius: '100%' , backgroundColor: '#f1f1f1',color: '#212529',  textDecoration: 'none',display: 'inline-block',padding: '8px 16px',fontSize:'20px', fontWeight:'bold'}}><i className="fa fa-arrow-left"/></a>
            </div>  
            <div className="col welcome-logo" style={{background: 'linear-gradient(144deg, #EC1B69 0%, #F05B57 100%)'}}>

              <div>
                <div className="row gy-4 gx-md-0 gy-md-0 row-cols-1 row-cols-md-2 row-cols-xl-3 d-md-flex d-xl-flex align-items-md-center" style={{width: '600px'}}>
                  <div className="col-xl-5 col-xxl-5 offset-xl-2" style={{marginLeft: '30px'}}>
                    <div className="card bg-light border-0">
                      <div className="card-body p-4" style={{width: '280px'}}>
                        <div className="d-flex justify-content-between">
                          <div>
                            <h3 className="fw-bold mb-0">Free Plan</h3>
                            <p>Suscipit</p>
                            <h4 className="display-6 fw-bold">$0</h4>
                          </div>
                        </div>
                        <div>
                          <ul className="list-unstyled">
                            <li className="d-flex mb-2"><span className="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-check-lg">
                                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                </svg></span><span>Lectus ut nibh quam, felis porttitor.</span></li>
                            <li className="d-flex mb-2"><span className="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-check-lg">
                                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                </svg></span><span>Ante nec venenatis etiam lacinia.</span></li>
                            <li className="d-flex mb-2"><span className="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-check-lg">
                                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                </svg></span><span>Porta suscipit netus ad ac.</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-5">
                    <div className="card text-white bg-primary border-0" style={{width: '350px', background: 'linear-gradient(#1C7BA5, #1c7ba5), rgb(13, 110, 253)'}}>
                      <div className="card-body p-4" style={{width: '320px'}}>
                        <div className="d-flex justify-content-between">
                          <div>
                            <h3 className="fw-bold text-white mb-0">Premium Plan</h3>
                            <p>Suscipit + donec</p>
                            <h4 className="display-6 fw-bold text-white">$38</h4>
                          </div>
                          <div><span className="badge rounded-pill bg-primary text-uppercase bg-white-300">Best Value</span></div>
                        </div>
                        <div>
                          <ul className="list-unstyled">
                            <li className="d-flex mb-2"><span className="bs-icon-xs bs-icon-rounded bs-icon-semi-white bs-icon me-2"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-check-lg">
                                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                </svg></span><span>Lectus ut nibh quam, felis porttitor.</span></li>
                            <li className="d-flex mb-2"><span className="bs-icon-xs bs-icon-rounded bs-icon-semi-white bs-icon me-2"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-check-lg">
                                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                </svg></span><span>Ante nec venenatis etiam lacinia.</span></li>
                            <li className="d-flex mb-2"><span className="bs-icon-xs bs-icon-rounded bs-icon-semi-white bs-icon me-2"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-check-lg">
                                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                </svg></span><span>Porta suscipit netus ad ac.</span></li>
                            <li className="d-flex mb-2"><span className="bs-icon-xs bs-icon-rounded bs-icon-semi-white bs-icon me-2"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-check-lg">
                                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                </svg></span><span>Morbi praesent aptent integer at.</span></li>
                            <li className="d-flex mb-2"><span className="bs-icon-xs bs-icon-rounded bs-icon-semi-white bs-icon me-2"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-check-lg">
                                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                </svg></span><span>Nisl potenti ut auctor lobortis.</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col login-col">
              <div>
              {showAlert && (
        <div className={`alert ${alertColor} alert-dismissible w-100 fade show mt-3`} role="alert">
          {alertText}
          <button type="button" className="btn-close" onClick={() => this.setState({showAlert:false})}></button>
        </div>
             )}
                <form className="login-form" onSubmit={this.handleSubmit} style={{paddingRight: '100px', paddingLeft: '100px'}}>
                  <h1 style={{marginBottom: '20px'}}>Signup</h1>
                  <div class="form-floating">
                  <input className="form-control" id="formUsername" onChange={(e)=> this.setState({name:e.target.value})} type="text" placeholder="Username" style={{marginBottom: '20px', paddingTop: '25px', paddingBottom: '12px'}} required />
                  <label class="form-label text-secondary" for="formUsername">Username</label>
                  </div>
                  <div class="form-floating">
                  <input className="form-control" id="formEmail" onChange={(e)=> this.setState({email:e.target.value})} type="text" placeholder="Email" style={{marginBottom: '20px', paddingTop: '25px', paddingBottom: '12px'}} required />
                  <label class="form-label text-secondary" for="formEmail">Email</label>
                  </div>
                  <div class="form-floating">
                  <input className="form-control" id="formPhone" onChange={(e)=> this.setState({phoneNumber:e.target.value})} type="tel" placeholder="Numéro de téléphone" style={{marginBottom: '20px', paddingTop: '25px', paddingBottom: '12px'}} required />
                  <label class="form-label text-secondary" for="formPhone">Numéro de téléphone</label>
                  </div>
                  <div class="form-floating">
                  <input className="form-control" id="formPassword" onChange={(e)=> this.setState({password:e.target.value})} type="password" placeholder="password" style={{paddingTop: '25px', paddingBottom: '12px', marginBottom: '20px'}}  required />
                  <label class="form-label text-secondary" for="formPassword">Mot de passe</label>
                  </div>
                  <div class="form-floating">
                  <input className="form-control" id="formPasswordCheck" onChange={(e)=> this.setState({passwordCheck:e.target.value})} type="password" placeholder="Confirm password" style={{paddingTop: '25px', paddingBottom: '12px', marginBottom: '20px'}} required />
                  <label class="form-label text-secondary" for="formPasswordCheck">Confirmer mot de passe</label>
                  </div>
                  <div className="btn-group d-block text-center my-3" role="group" aria-label="Basic radio toggle button group" style={{ borderRadius: '15px', borderWidth: '0px'}}>
                    <input id="btnradio1" className="btn-check" type="radio" name="btnradio" autoComplete="off" value={false} onChange={(e) => this.setState({premiumPlan:e.target.value})} defaultChecked /><label className="form-label btn btn-outline-primary" htmlFor="btnradio1">Free Plan</label>
                    <input id="btnradio2" className="btn-check" type="radio" name="btnradio" autoComplete="off" value={true} onChange={(e) => this.setState({premiumPlan:e.target.value})}/><label className="form-label btn btn-outline-primary" htmlFor="btnradio2">Premium Plan</label>
                    </div>
                  <div className="form-buttons">
                  <button className="btn btn-primary login-button" type="submit" style={{paddingRight: '80px', paddingLeft: '80px', borderRadius: '15px', boxShadow: '0px 0px 5px 0px #1c7ba5', background: '#1c7ba5', marginLeft: 'auto', paddingTop: '12px', paddingBottom: '12px', borderWidth: '0px', marginRight: 'auto'}}>S'inscrire</button></div>
                  <div><a className="text-center login-text" href="login" style={{display: 'block', fontSize: '22px', color: '#212529', marginTop: '10px'}}>Login</a></div>
                  <hr style={{height: '0.5px', marginTop: '30px'}} />
                  <h1 style={{fontSize: '18px', textAlign: 'center'}}>connect with Social media</h1>
                  <ul className="list-inline text-center" style={{marginTop: '20px'}}>
                    <li className="list-inline-item"><a href="#"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x" /><i className="fa fa-facebook fa-stack-1x fa-inverse" /></span></a></li>
                    <li className="list-inline-item"><a href="#"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x" /><i className="fa fa-google fa-stack-1x fa-inverse" /></span></a></li>
                    <li className="list-inline-item"><a href="#" /></li>
                    <li className="list-inline-item"><a href="#" /></li>
                  </ul>
                </form>
              </div>
            </div>
          </div>
        )
    }
}
export default Signup;