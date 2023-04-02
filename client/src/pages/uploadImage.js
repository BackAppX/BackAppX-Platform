import React, {Component} from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

class uploadImage extends Component {
  constructor(props){
    super(props);
    this.state={
      id:"",
      name:"",
      email:"",
      phoneNumber:"",
      image:null,
      userData:"",
      imageUrl:"",
      buttonColor:"#1c7ba5",
      buttonText:"Upload image",
      showAlert:false,
      alertText:"",
      userImage:"",
      alertColor:"alert-danger",
      showImage:false

    }
    this.handleUpload=this.handleUpload.bind(this);


  }
  componentDidMount(){

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
      this.setState({
      token:window.localStorage.getItem("token"),
      userData:data?.data,
      id:data?.data._id,
      name:data?.data.name,
      phoneNumber:data?.data.phoneNumber,
      email:data?.data.email,
      userImage:data?.data.image

    });
      console.log("data:", data)
      if (data?.data.image){
        this.setState({imageUrl: "http://localhost:9092/user/image/avatar/avatar.png",showImage:true})
      }
    })
  }

   handleImageUpload = e => {
    this.setState({image:e.target.files[0]})

    console.log(this.state.image)

    const reader = new FileReader();
    reader.onload = () => {
        this.setState({imageUrl:reader.result})
    };

    reader.readAsDataURL(e.target.files[0]);
    this.setState({showImage:true})
  };

  handleUpload(e){
    e.preventDefault();
    const{image,id,imageUrl}= this.state;
    const formData = new FormData();
    formData.append('file', image);
    
      fetch(`http://127.0.0.1:9092/user/upload/${id}`, {
        method: 'PUT',
        body: formData
      })
      .then((res) => res.json())
      .then((data) => {
        if (data?.status == "ok"){
          this.setState({showAlert:true,alertColor:'alert-success',alertText:'Image ajouté avec succés',buttonColor:"#1C7BA5",buttonText:"Upload image"})
          setTimeout(() => {
            window.location.href="./"
          }, 2000);
        } 
      });
  }
     handleClick = () => {
      const {image}= this.state;
      if (!image.isNull)
      this.setState({buttonColor:'#176182',buttonText:'Veuillez patienter...'});
    };

    render() {
      const {name,phoneNumber,email,imageUrl,buttonColor,buttonText,showAlert,alertText,alertColor,id,userImage,showImage} = this.state;
        return (
            <div>

            <div className="container profile profile-view" id="profile">

              {showAlert && (
        <div className={`alert ${alertColor} alert-dismissible w-100 fade show`} role="alert">
          {alertText}
          <button type="button" className="btn-close" onClick={() => this.setState({showAlert:false})}></button>
        </div>
             )} 
                <div className='center my-2'>
                <h1>Setup your image</h1>
                </div>
                <div className="col-md-12 relative p-5">
                  <form onSubmit={this.handleUpload}>
                  <div className="avatar">
                    <div className="center my-3">  
                    {showImage ? <img className='mb-2' src={imageUrl} style={{objectFit :"coverd",height: "200px",width: "200px", borderRadius:"50%"}} />:<img className='mb-2' src={`http://localhost:9092/user/image/${id}/${userImage}`} style={{objectFit :"coverd",height: "200px",width: "200px", borderRadius:"50%"}} />}</div>
                  </div>
                  <div className='center my-3'>
                  <input className="form-control d-inline form-control" style={{width:"400px"}} type="file" onChange={this.handleImageUpload} name="avatar-file" accept="image/*" required/>
                  </div>
                  <div className='center my-3'>
                  <button className='btn btn-primary mt-3' style={{background: buttonColor, boxShadow: '0px 0px 7px #1c7ba5', border:"none"}} onClick={this.handleClick} type="submit">{buttonText}</button>
                  </div>
                  <a className="text-center signup-text" href="/" style={{fontSize: '18px', display: 'block', color: '#212529', marginTop: '10px'}}>skip</a>

                  </form>
                </div>

          </div>
          </div>
        )
    }
}
export default uploadImage;