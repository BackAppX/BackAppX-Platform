import React, {Component,useState} from 'react';
import { useQuill } from 'react-quilljs';
import FooterDashboard from '../components/FooterDashboard';
import NavLeftDashboard from '../components/NavLeftDashboard';
import HeaderDashboard from '../components/HeaderDashboard';
import DatePicker from "react-datepicker";

import 'quill/dist/quill.snow.css';
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";

function Mailing() {
    const [scheduleDate, setScheduleDate] = useState(new Date());
    const [userData, setUserData] = useState('');
    const [clients, setClients] = useState([]);
    const [recipients,setRecipients] = useState([]);
    const [subject, setSubject] = useState('');
    const [sender,setSender]= useState('');
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [alertText,setAlertText] = useState('');
    const [showAlert,setShowAlert] = useState(false);
    const [alertColor,setAlertColor] = useState('alert-danger');
    const [emails,setEmails] = useState([]);
    const [selectedEmail, setSelectedEmail] = useState('');



    const options = clients.map((client) => ({
        value: client._id,
        label: client.fullName
      }));

    const { quill, quillRef } = useQuill();
    
    React.useEffect(() => {
        const isLoggedIn = window.localStorage.getItem('isLoggedIn');
        const projectId = window.localStorage.getItem('projectId')
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
              setUserData(data?.data);
              setSender(data?.data._id)
            });
        }
        getClientsByReferences(projectId);
        getEmails();

        if (quill) {
            const editorContent = quill.root.innerHTML;
          quill.on('text-change', (delta, oldDelta, source) => {
            console.log(quill.root.innerHTML); // Get innerHTML using quill
         
          });
        }
      }, [quill]);
      function removeLastComma(str) {
        if (str.slice(-2) === ', ') {
          return str.slice(0, -2);
        }
        return str;
      }
      function getClientName(emailRecipients){
        let clientsName =''
            emailRecipients.map((recipient)=>(
                clients.map((client)=>(

                   clientsName = (recipient === client._id) ? clientsName + client.fullName + ', ' : clientsName

                ))
            ))
            return clientsName;
      }
      function getClientsByReferences(projectId){
        fetch(`http://127.0.0.1:9092/client/client/${projectId}`, {
            method: 'GET',
            crossDomain: true,
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          })
            .then((res) => res.json())
            .then((data) => {
                setClients(data)
            });
      }

      function getEmails(){
        fetch(`http://127.0.0.1:9092/email/`, {
            method: 'GET',
            crossDomain: true,
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          })
            .then((res) => res.json())
            .then((data) => {
                setEmails(data)
            });
      }
      const handleChange = (selectedOptions) => {
        setSelectedOptions(selectedOptions);
      };
      const qlToHtml = () => {
        if (quill) {
          const editorContent = quill.root.innerHTML;
      
          // Replace Quill-specific classes with inline styles
          const contentWithoutClasses = editorContent.replace(/class="(.*?)"/g, function(match, p1) {
            const classList = p1.split(' ');
            let styles = '';
            classList.forEach(function(className) {
              switch (className) {
                case 'ql-code-block':
                  styles += 'white-space: pre-wrap; ';
                  break;
                case 'ql-size-huge':
                  styles += 'font-size: 2.5em; ';
                  break;
                case 'ql-size-large':
                  styles += 'font-size: 1.5em; ';
                  break;
                case 'ql-size-small':
                  styles += 'font-size: 0.75em; ';
                  break;
                case 'ql-strike':
                  styles += 'text-decoration: line-through; ';
                  break;
                case 'ql-bold':
                  styles += 'font-weight: bold; ';
                  break;
                case 'ql-italic':
                  styles += 'font-style: italic; ';
                  break;
                case 'ql-underline':
                  styles += 'text-decoration: underline; ';
                  break;
                case 'ql-background-white':
                  styles += 'background-color: white; ';
                  break;
                case 'ql-background-red':
                  styles += 'background-color: red; ';
                  break;
                case 'ql-color-white':
                  styles += 'color: white; ';
                  break;
                case 'ql-color-red':
                  styles += 'color: red; ';
                  break;
                case 'ql-align-center':
                  styles += 'text-align: center; ';
                  break;
                case 'ql-align-justify':
                  styles += 'text-align: justify; ';
                  break;
                case 'ql-align-right':
                  styles += 'text-align: right; ';
                  break;
                default:
                  if (/^ql-indent-\d+$/.test(className)) {
                    const level = Number(className.replace('ql-indent-', ''));
                    styles += `text-indent: ${level * 2}em; `;
                  }
                  break;
              }
            });
            if (styles) {
              return 'style="' + styles.trim() + '"';
            } else {
              return '';
            }
          });
      
          return(contentWithoutClasses);
        }
      };

    function formatDate(dateString){
 
        const date = new Date(dateString);
        const formattedDate = date.toLocaleString('fr-FR', { timeZone: 'UTC', dateStyle: 'medium', timeStyle: 'short' });
        return formattedDate;
    } 
      function validate(){
    
        let check = false;  

        if (selectedOptions.length>0){
            check=true;
        }else{
            setAlertText("Vous devez choisir un destinataire au moins")
            setShowAlert(true)
          return false;
        }

        if (subject.length>4){
          check=true;
        }else{
            setAlertText("Le sujet doit dépasser les 4 caracteres")
            setShowAlert(true)
          return false;
        }
        


        let plainText = quill.getText();

        if (plainText.length>4){
            check=true;
          }else{
              setAlertText("Le corps doit dépasser les 4 caracteres")
              setShowAlert(true)
            return false;
          
      };

        return check;
      }

      function handleSubmit(e){
        e.preventDefault();
      let body = qlToHtml();
      const recipients = selectedOptions.map((option) => option.value);
        
      console.log(scheduleDate,recipients,subject,sender,body);


        if (validate()){

          fetch("http://127.0.0.1:9092/email/create",{
            method:"POST",
            crossDomain:true,
            headers:{
              "Content-Type":"application/json",
              Accept:"application/json",
              "Access-Control-Allow-Origin":"*",
            },
            body: JSON.stringify({
              sender,
              recipients,
              subject,
              body,
              scheduleDate
              
            }),
          })
          .then((res) => res.json())
          .then((data) => {
            if (data?.status == "created"){
                window.location.href="./mailing"
            }
          })
        }

      }

        return (
            <><script src="assetsDash/bootstrap/js/bootstrap.min.js"></script><script src="assetsDash/js/chart.min.js"></script><script src="assetsDash/js/bs-init.js"></script><script src="assetsDash/js/theme.js"></script><script src="assetsDash/js/jquery.min.js"></script><script src="assetsDash/js/bootstrap.bundle.min.js"></script><script src="assetsDash/js/script.js"></script><link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" /><link rel="stylesheet" href="assetsDash/bootstrap/css/bootstrap.min.css" /><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i&amp;display=swap" /><link rel="stylesheet" href="assetsDash/fonts/fontawesome-all.min.css" /><link rel="stylesheet" href="assetsDash/fonts/ionicons.min.css" /><link rel="stylesheet" href="assetsDash/fonts/material-icons.min.css" /><link rel="stylesheet" href="assetsDash/fonts/typicons.min.css" /><link rel="stylesheet" href="assetsDash/css/card-3-column-animation-shadows-images.css" /><link rel="stylesheet" href="assetsDash/css/animate.min.css" /><link rel="stylesheet" href="assetsDash/css/style.css" /><link rel="stylesheet" href="assetsDash/css/News-Cards.css" /><link rel="stylesheet" href="assetsDash/css/Tabbed-Panel-tabbed-panel.css" />
               <div id="wrapper">
                <NavLeftDashboard />
                <div className="d-flex flex-column" id="content-wrapper">
                <div id="content">
                        <HeaderDashboard />
                <div className="container-fluid">
                <h3 className="text-dark mb-4">Mailing</h3>

                <div className="card shadow">
                    <div className="card-header py-3">
                        <p className="text-primary m-0 fw-bold" style={{ bsprimary: '#00a0c4', bsprimaryrgb: '0,160,196' }}><span style={{ fontweight: 'normal !important', color: 'rgba(var(--bs-dark-rgb), var(--bs-text-opacity))' }}>Mailing</span></p>
                    </div>
                    <div className="card-body">
                        <div className="row d-flex">
                            <div className="col-md-6 "><input type="search" className="form-control form-control-sm" aria-controls="dataTable" placeholder="Search" style={{ width: '326.825px' }} /></div>
                            <div className="col-md-6">
                                <div className="text-end text-md-end dataTables_filter" id="dataTable_filter">
                                 <a href="#myModal"  data-bs-toggle="modal" style={{textDecoration: 'none'}}><button className="btn" type="button" style={{ background: 'rgb(241, 92, 87)',color:'white', padding: '6px 12px', primary: '#00a0c4', bsprimaryrgb: '0,160,196', bordercolor: '#00a0c4', paddingleft: '15px', marginleft: '-3px', paddingtop: '3px', width: '176.587px' }}>Ajouter un mail</button></a><label className="form-label"></label>
                                </div>
                            </div>

                        </div>
                        <div className="table-responsive table mt-2" id="dataTable-1" role="grid" aria-describedby="dataTable_info">
                            <table className="table my-0" id="dataTable">
                                <thead>
                                    <tr>
                                        <th>Destinataires</th>
                                        <th>Sujet</th>
                                        <th>Corps</th>
                                        <th>Date prévue</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {emails.reverse().map((email) => (
                                    <tr key={email._id}>
                                    <td>{removeLastComma(getClientName(email.recipients))}</td>
                                    <td>{email.subject}</td>
                                    <td><a href='#bodyModal' data-bs-toggle="modal" onClick={() => setSelectedEmail(email.body)}>Voir le corps</a></td>
                                    <td>{formatDate(email.scheduleTime)}</td>
                                </tr>                  
                                ))}

                                </tbody>
                                <tfoot>
                                    <tr></tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
                </div>
                </div>

                <div id="myModal" className="modal fade" role="dialog" tabIndex={-1}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <form  onSubmit={handleSubmit} >
                <div className="modal-header">
                  <h4>Ajouter un mail</h4><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                {showAlert && (
                  <div className={`alert ${alertColor} alert-dismissible w-100 fade show `} role="alert">
                    {alertText}
                    <button type="button" className="btn-close" onClick={() => setShowAlert(false)}></button>
                  </div>
                      )}
{/*     <div className="form-floating">
    <select className="form-select" id="recipient" onChange={(e) => setRecipients(e.target.value )} style={{ marginBottom: '20px', paddingTop: '25px', paddingBottom: '12px' }}>
        {clients.reverse().map((client) => (
        <option key={client._id} >{client.fullName}</option>                        
        ))}
    </select>
    <label className="form-label text-secondary" htmlFor="recipient">Destinataire</label>
    </div> */}

{/*         <div className="form-floating">
        <select className="form-select" id="recipient" onChange={(e) => setRecipients(Array.from(e.target.selectedOptions, option => option.value))} multiple style={{ marginBottom: '20px', paddingTop: '25px', paddingBottom: '12px' }}>
            {clients.reverse().map((client) => (
            <option key={client._id} value={client._id}>{client.fullName}</option>                        
            ))}
        </select>
        <label className="form-label text-secondary" htmlFor="recipient">Destinataires</label>
        </div> */}

<label className="form-label text-secondary" htmlFor="recipient">
        Destinataires
      </label>
      <Select
        isMulti
        options={options}
        value={selectedOptions}
        onChange={handleChange}
        className="basic-multi-select mb-4"
        classNamePrefix="select"

      />


    <div className="form-floating">
    <input className="form-control" id="subject"  onChange={(e)=> setSubject(e.target.value)} type="text" placeholder="Sujet" style={{marginBottom: '20px', paddingTop: '25px', paddingBottom: '12px'}}  />
    <label className="form-label text-secondary" htmlFor="subject">Sujet</label>
    </div>



                  <label className="form-label text-secondary" htmlFor="email">Date prévue</label>
                  <DatePicker className='form-control' placeholderText='Selectionner une date' showTimeInput={true} selected={scheduleDate} onChange={(date) => setScheduleDate(date)}
                       showTimeSelect
                       timeFormat="HH:mm"
                       timeIntervals={15}
                       dateFormat="MMMM d, yyyy h:mm aa"
                       timeCaption="Time"
                        />
 
                <div style={{marginTop:"20px",marginBottom:"100px",height:"200px"}} >
                <div ref={quillRef} />
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
          {selectedEmail && (
          <div id="bodyModal" className="modal fade" role="dialog" tabIndex={-1}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-body"dangerouslySetInnerHTML={{ __html: selectedEmail }} />

              </div>
            </div>
          </div>
          )}
                    <FooterDashboard />

                    </div>

            </div></>
              

            )
        }
    
export default Mailing;