import React, {Component} from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

class Project extends Component {
    constructor(props){
        super(props);
        this.state = {
            projects:[],
            name:"",
            description:"",
            id:"",
            idProject:"",
            bgColor:"#7BC46C",
            idProjectEdit:"",
            nameEdit:"",
            descriptionEdit:"",
            bgColorEdit:"",
            showAlert:false,
            alertColor:"alert-danger",
            alertText:"",
            

        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleUpdate=this.handleUpdate.bind(this);

      }
      
      addToUser(id,ProjectId){
        fetch(`http://127.0.0.1:9092/user/myProject/${id}`,{
          method:"PUT",
          crossDomain:true,
          headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            "Access-Control-Allow-Origin":"*",
          },
          body: JSON.stringify({
            ProjectId
          }),
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.user,"user updated")
          if (data?.status == "ok"){
            this.setState({userData:data.user})

            window.location.href="./project"
           }
          
    
        })

      }

      handleUpdate(e){
        e.preventDefault();
    
        const {idProjectEdit,nameEdit,descriptionEdit,bgColorEdit}=this.state;
        
        
        if(this.validateEdit()){
          console.log("1");
      
        let name=nameEdit;
        let description=descriptionEdit;
        let bgColor=bgColorEdit;
        fetch(`http://127.0.0.1:9092/project/project/${idProjectEdit}`,{
          method:"PUT",
          crossDomain:true,
          headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            "Access-Control-Allow-Origin":"*",
          },
          body: JSON.stringify({
            name,
            description,
            bgColor
          }),
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.user,"user updated")
          if (data?.status == "updated"){
            this.setState({userData:data.user})
            this.setState({alertText:"Projet modifié avec succées.",showAlert:true,alertColor:"alert-success"})
            setTimeout(() => {
              window.location.href="./project"
            }, 2000);
           }
          
    
        })
      }
      }
      handleState(id,name,description,bgColor){
          this.setState({idProjectEdit:id,nameEdit:name,descriptionEdit:description,bgColorEdit:bgColor});
      }

      deleteProject(id){
    
        fetch(`http://127.0.0.1:9092/project/project/${id}`,{
          method:"DELETE",
          crossDomain:true,
          headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            "Access-Control-Allow-Origin":"*",
          }
        })
        .then((res) => res.json())
        .then((data) => {
          if (data?.status == "deleted"){
            window.location.href="./project"
          }
        })
      }
      handleSubmit(e){

        e.preventDefault();
        const {id,name,description,bgColor}=this.state;

        if (this.validate()){
                      

     
        fetch("http://127.0.0.1:9092/project/project",{
          method:"POST",
          crossDomain:true,
          headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            "Access-Control-Allow-Origin":"*",
          },
          body: JSON.stringify({
            name,
            description,
            bgColor
          }),
        })
        .then((res) => res.json())
        .then((data) => {            

            if(data?.status == "created")
          console.log(data?.newProject._id);            

          this.addToUser(id,data?.newProject._id)
        })
      }
    }


      componentDidMount(){

        fetch("http://127.0.0.1:9092/project/project")
        .then((res) => res.json())
        .then((data) => {

          })

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
              
              this.setState({id:data?.data._id,projects:data?.data.myProject});
              console.log(this.state)
            })
        }

        handleOptionChange = (event) => {
          this.setState({bgColor:event.target.value});
        };
        handleOptionChangeEdit = (event) => {
          this.setState({bgColorEdit:event.target.value});
        };

        validate(){
          const{name,description} = this.state;
          let check=false;
          if (name.length>4){
            check=true;
          }else{
            this.setState({alertText:"Le nom du projet doit dépasser les 4 caracteres",showAlert:true})
            return false;
          }
          if (description.length>10){
            check=true;
          }else{
            this.setState({alertText:"La description du projet doit dépasser les 10 caracteres",showAlert:true})
            return false;
          }
          return check;
        }
        validateEdit(){
          const{nameEdit,descriptionEdit} = this.state;
          let check=false;
          if (nameEdit.length>4){
            check=true;
          }else{
            this.setState({alertText:"Le nom du projet doit dépasser les 4 caracteres",showAlert:true})
            return false;
          }
          if (descriptionEdit.length>10){
            check=true;
          }else{
            this.setState({alertText:"La description du projet doit dépasser les 10 caracteres",showAlert:true})
            return false;
          }
          return check;
        }

        goToDashboard(id){
          window.localStorage.setItem("projectId",id);
          window.location.href="./dashboard"
        }

    render() {
        const { projects,bgColor,showAlert,alertColor,alertText,idProject,name,description,nameEdit,descriptionEdit,bgColorEdit } = this.state;

        return (
            <div>
        <Header/>
        <div data-bss-parallax-bg="true" style={{height: '300px', background: 'url("assets/img/Groupe%2022.png") center / cover'}} />
        <div className="row mx-4" style={{marginTop:'-70px'}}>
          <div className="col col-md-4 mb-3">
            <div className="card" style={{borderRadius: '20px'}}><a href="#myModal" data-bs-toggle="modal" style={{textDecoration: 'none'}}>
                <div className="card-body d-flex align-items-center" style={{boxShadow: '0px 2px 20px rgba(33,37,41,0.52)', height: '220px', borderRadius: '20px'}}>
                  <div className="mx-auto"><i className="fa fa-plus text-center mx-auto" style={{fontSize: '60px', color: 'var(--bs-blue)', display: 'block'}} />
                    <h4 className="mt-2" style={{color:"#007bff"}}>Ajouter un projet</h4>
                  </div>
                </div>
              </a></div>
          </div>
          {projects.reverse().map((project) => (
            <div key={project._id} className="col col-md-4 mb-3">
              <a href="#" style={{textDecoration:"none", color:"#212529"}}>
             <div className="card" onClick={()=>{this.goToDashboard(project._id)}} style={{borderRadius: '20px'}}>
              <div className="card-body" style={{boxShadow: '0px 2px 20px rgba(33,37,41,0.52)', height: '220px', borderRadius: '20px'}}>
                <div style={{height:"80px",borderTopLeftRadius:'20px',borderTopRightRadius:"20px",background:`${project.bgColor}`,margin:"-16px -16px 0 -16px", padding:"16px 16px 0 16px "}}>
                <div className='d-flex'>
                <h4 className="card-title text-light">{project.name}</h4>
                <div className="dropdown show" style={{marginLeft:"auto"}}>
                <a className="" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className='fa fa-ellipsis-v' style={{fontSize:"24px" ,color:"white",marginLeft:"auto",marginRight:"10px"}} /></a>
                        <div className="dropdown-menu w-100" aria-labelledby="dropdownMenuLink">
                          <a className="dropdown-item" onClick={()=>{this.setState({idProjectEdit:project._id,nameEdit:project.name,descriptionEdit:project.description,bgColorEdit:project.bgColor})}} href="#editModal" data-bs-toggle="modal" >Modifier le projet</a>
                          <a className="dropdown-item" onClick={()=>{this.setState({idProject:project._id}) }} href="#confirmModal" data-bs-toggle="modal">Supprimer le projet</a>
                        </div>
                      </div>  
                </div>
                <p className="text-light opacity-50" style={{fontSize:'10px'}}>{project.reference}</p>
                </div>
                <p className="card-text mt-2 mb-5">{project.description}</p>
              </div>
            </div>
            </a>
          </div>

               ))}
                         
          <div id="confirmModal" className="modal fade" role="dialog" tabIndex={-1}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <form>
                <div className="modal-header">
                  <h6>Êtes-vous sûr de vouloir supprimer le projet ?</h6><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-footer">
                <button className="btn btn-light" type="button" data-bs-dismiss="modal">Annuler</button>
                <button onClick={()=>{this.deleteProject(idProject)}} className="btn btn-primary">Confirmer</button>
                </div>
                </form>
              </div>
            </div>
          </div>

                    <div id="editModal" className="modal fade" role="dialog" tabIndex={-1}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <form onSubmit={this.handleUpdate}>
                <div className="modal-header">
                  <h4 >Modifier le projet</h4><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                {showAlert && (
                  <div className={`alert ${alertColor} alert-dismissible w-100 fade show `} role="alert">
                    {alertText}
                    <button type="button" className="btn-close" onClick={() => this.setState({showAlert:false})}></button>
                  </div>
                      )}
                  <input className="form-control" value={nameEdit} onChange={(e)=> this.setState({nameEdit:e.target.value})} type="text" placeholder="Titre" style={{marginBottom: '20px', paddingTop: '12px', paddingBottom: '12px'}} />
                  <textarea className="form-control" value={descriptionEdit} onChange={(e) => this.setState({descriptionEdit:e.target.value})} placeholder="Description" style={{ paddingTop: '12px', paddingBottom: '12px'}} />
                </div>
                <h6 className='mx-4 mt-0'>Choisir une couleur</h6>
                <div className='row px-5' >
                <div className="form-check col-3">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked={bgColorEdit=="#7BC46C"} value="#7BC46C" onChange={this.handleOptionChangeEdit} />

                <div className="form-check-label" htmlFor="flexRadioDefault1" style={{width:"50px",height:"20px",background:"#7BC46C",borderRadius:"5px",marginTop:"2px"}}/>

              </div>
              <div className="form-check col-3">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked={bgColorEdit=="#F2DF21"} value="#F2DF21" onChange={this.handleOptionChangeEdit} />

              <div className="form-check-label" htmlFor="flexRadioDefault2" style={{width:"50px",height:"20px",background:"#F2DF21",borderRadius:"5px",marginTop:"2px"}}/>
              </div>
              <div className="form-check col-3">
                <input className="form-check-input"  type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked={bgColorEdit=="#FBAE42"} value="#FBAE42" onChange={this.handleOptionChangeEdit} />

              <div className="form-check-label" htmlFor="flexRadioDefault3" style={{width:"50px",height:"20px",background:"#FBAE42",borderRadius:"5px",marginTop:"2px"}}/>
              </div>
              <div className="form-check col-3">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" checked={bgColorEdit=="#F07464"} value="#F07464" onChange={this.handleOptionChangeEdit} />

              <div className="form-check-label" htmlFor="flexRadioDefault4" style={{width:"50px",height:"20px",background:"#F07464",borderRadius:"5px",marginTop:"2px"}}/>
              </div>
              </div>
              <div className='row my-3 px-5' >
                <div className="form-check col-3">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5" checked={bgColorEdit=="#BD8FC1"} value="#BD8FC1" onChange={this.handleOptionChangeEdit} />

                <div className="form-check-label" htmlFor="flexRadioDefault1" style={{width:"50px",height:"20px",background:"#BD8FC1",borderRadius:"5px",marginTop:"2px"}}/>

              </div>
              <div className="form-check col-3">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault6" checked={bgColorEdit=="#59A4D0"} value="#59A4D0" onChange={this.handleOptionChangeEdit} />

              <div className="form-check-label" htmlFor="flexRadioDefault2" style={{width:"50px",height:"20px",background:"#59A4D0",borderRadius:"5px",marginTop:"2px"}}/>
              </div>
              <div className="form-check col-3">
                <input className="form-check-input"  type="radio" name="flexRadioDefault" id="flexRadioDefault7" checked={bgColorEdit=="#ED91BD"} value="#ED91BD" onChange={this.handleOptionChangeEdit}  />

              <div className="form-check-label" htmlFor="flexRadioDefault3" style={{width:"50px",height:"20px",background:"#ED91BD",borderRadius:"5px",marginTop:"2px"}}/>
              </div>
              <div className="form-check col-3">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault8" checked={bgColorEdit=="#40C4DE"} value="#40C4DE" onChange={this.handleOptionChangeEdit} />

              <div className="form-check-label" htmlFor="flexRadioDefault4" style={{width:"50px",height:"20px",background:"#40C4DE",borderRadius:"5px",marginTop:"2px"}}/>
              </div>
              </div>


                <div className="modal-footer">
                <button className="btn btn-light" type="button" data-bs-dismiss="modal">Annuler</button>
                <button className="btn btn-primary" type="submit">Soumettre</button>
                </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div>
          
          <div id="myModal" className="modal fade" role="dialog" tabIndex={-1}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <form onSubmit={this.handleSubmit}>
                <div className="modal-header">
                  <h4 >Ajouter un projet</h4><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                {showAlert && (
                  <div className={`alert ${alertColor} alert-dismissible w-100 fade show `} role="alert">
                    {alertText}
                    <button type="button" className="btn-close" onClick={() => this.setState({showAlert:false})}></button>
                  </div>
                      )}
                  <input className="form-control" onChange={(e)=> this.setState({name:e.target.value})} type="text" placeholder="Titre" style={{marginBottom: '20px', paddingTop: '12px', paddingBottom: '12px'}} />
                  <textarea className="form-control" onChange={(e) => this.setState({description:e.target.value})} placeholder="Description" style={{ paddingTop: '12px', paddingBottom: '12px'}} defaultValue={""} />
                </div>
                {/* color button */}
                <h6 className='mx-4 mt-0'>Choisir une couleur</h6>
                <div className='row px-5' >
                <div className="form-check col-3">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked={bgColor=="#7BC46C"} value="#7BC46C" onChange={this.handleOptionChange} />

                <div className="form-check-label" htmlFor="flexRadioDefault1" style={{width:"50px",height:"20px",background:"#7BC46C",borderRadius:"5px",marginTop:"2px"}}/>

              </div>
              <div className="form-check col-3">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked={bgColor=="#F2DF21"} value="#F2DF21" onChange={this.handleOptionChange} />

              <div className="form-check-label" htmlFor="flexRadioDefault2" style={{width:"50px",height:"20px",background:"#F2DF21",borderRadius:"5px",marginTop:"2px"}}/>
              </div>
              <div className="form-check col-3">
                <input className="form-check-input"  type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked={bgColor=="#FBAE42"} value="#FBAE42" onChange={this.handleOptionChange} />

              <div className="form-check-label" htmlFor="flexRadioDefault3" style={{width:"50px",height:"20px",background:"#FBAE42",borderRadius:"5px",marginTop:"2px"}}/>
              </div>
              <div className="form-check col-3">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" checked={bgColor=="#F07464"} value="#F07464" onChange={this.handleOptionChange} />

              <div className="form-check-label" htmlFor="flexRadioDefault4" style={{width:"50px",height:"20px",background:"#F07464",borderRadius:"5px",marginTop:"2px"}}/>
              </div>
              </div>
              <div className='row my-3 px-5' >
                <div className="form-check col-3">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5" checked={bgColor=="#BD8FC1"} value="#BD8FC1" onChange={this.handleOptionChange} />

                <div className="form-check-label" htmlFor="flexRadioDefault1" style={{width:"50px",height:"20px",background:"#BD8FC1",borderRadius:"5px",marginTop:"2px"}}/>

              </div>
              <div className="form-check col-3">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault6" checked={bgColor=="#59A4D0"} value="#59A4D0" onChange={this.handleOptionChange} />

              <div className="form-check-label" htmlFor="flexRadioDefault2" style={{width:"50px",height:"20px",background:"#59A4D0",borderRadius:"5px",marginTop:"2px"}}/>
              </div>
              <div className="form-check col-3">
                <input className="form-check-input"  type="radio" name="flexRadioDefault" id="flexRadioDefault7" checked={bgColor=="#ED91BD"} value="#ED91BD" onChange={this.handleOptionChange}  />

              <div className="form-check-label" htmlFor="flexRadioDefault3" style={{width:"50px",height:"20px",background:"#ED91BD",borderRadius:"5px",marginTop:"2px"}}/>
              </div>
              <div className="form-check col-3">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault8" checked={bgColor=="#40C4DE"} value="#40C4DE" onChange={this.handleOptionChange} />

              <div className="form-check-label" htmlFor="flexRadioDefault4" style={{width:"50px",height:"20px",background:"#40C4DE",borderRadius:"5px",marginTop:"2px"}}/>
              </div>
              </div>
                {/* color button */}

                <div className="modal-footer">
                <button className="btn btn-light" type="button" data-bs-dismiss="modal">Annuler</button>
                <button className="btn btn-primary" type="submit">Soumettre</button>
                </div>
                </form>
              </div>
            </div>
          </div></div>
        <hr className="mx-4" />
        <div className="mb-5">
          <h1 className="text-center">Getting started</h1>
          <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><button className="btn btn-primary mx-auto mt-5 btn-lg" onClick={()=>window.location.href="https://back-app-x-documentation.vercel.app"} type="button" style={{display: 'block', fontSize: '24px'}}>Accédez à la documentation</button>
        </div>
        <Footer/>

      </div>
        )
    }
}
export default Project;