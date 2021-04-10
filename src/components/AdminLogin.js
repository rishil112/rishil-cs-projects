import axios from 'axios'
import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import AdminComponent from './AdminComponent'
function AdminLogin(props) {

    const [emailstate, setemailstate] = useState('')
    const [passwordstate, setPasswordstate] = useState('')
    

    let arr_of_admin_log=[]
    const RenderFailed=()=>{
        return(
            <div><h3 style={{color:'red',display:'inline-flex',flexDirection:'row'}}>Login Failed!!
            Check Email or Password
            </h3></div>
        )
    }
    const handleAdminChange=(event)=>{
        event.target.name==="email"?setemailstate(event.target.value):setPasswordstate(event.target.value)
    }

    const handleAdminLogin=(event)=>{
        //ReactDOM.render(<FormSubmitted/>,document.getElementById('render_something'))
        event.preventDefault()
        axios.post("http://localhost:8080/login_admin_details",{
            check_login_email:emailstate,
            check_login_pwd:passwordstate
        }).then((response)=>{
            console.log(response.data);
            response.data.length===0?(
                ReactDOM.render(<RenderFailed/>,document.getElementById("render_something"))
            ):
            ((response.data[0]["admin_login_email"]===null && response.data[0]["admin_login_password"]===null)
            ||(response.data[0]["admin_login_email"]===null || response.data[0]["admin_login_password"]===null)
            ?
            (
               ReactDOM.render(<RenderFailed/>,document.getElementById("render_something"))
            ):(ReactDOM.render(<div><h3 style={{color:'red',fontSize:'20px',display:'inline-block'}}>You have successfully login to your account</h3></div>,document.getElementById("render_something"))))

        }).catch(err=>{console.log(err)})
    }

    return (
        <>
        <AdminComponent/>
        <div>
            <div className="admin-register-compo"
            style={{backgroundColor:'lightskyblue'}}
            >
                <h2>SIGN IN</h2>
                <div>
                    <form onSubmit={handleAdminLogin}>
                        <div style={{marginTop:'40px'}}>
                            
                            <input type='email' name='email' placeholder="ADMIN EMAIL"
                            style={{width:'230px',height:'30px',border:'none',borderBottom:'3px solid dodgerBlue'}}
                            onChange={handleAdminChange}
                            value={emailstate}
                            /><br/><br/>
                            
                            <input type='password' name="pwd" placeholder="ADMIN PASSWORD"
                            style={{width:'230px',height:'30px',border:'none',borderBottom:'3px solid dodgerBlue'}}
                            onChange={handleAdminChange} value={passwordstate}
                            /><br/><br/> 

                            <label style={{cursor:'pointer'}} id="label_already_admin"
                            onMouseOver={() => {document.getElementById("label_already_admin").style.color="red"}}
                            onMouseLeave={()=>{document.getElementById("label_already_admin").style.color="black"}}
                            onClick={() => {
                            props.history.push('/adminpage/adminregister')
                            }}

                            >New Admin?Sign up?</label>
                            <br/><br/>
                            
                            <input type='submit' value="LOGIN"
                            style={{width:'240px',border:'2px double blue',borderRadius:'5px'}}
                            />
                            
                        </div>
                    </form>
                
                </div>
                <div id="render_something">
                
                </div>

            </div>
            
        </div>
        </>
    )
}

export default AdminLogin
