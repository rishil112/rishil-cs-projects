import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import lic from './Images/supervisor_account-24px.svg'
import axios from 'axios'
import UserComponent from './UserComponent'

function HandleUserLogin(props) {
const [email_input, setEmail] = useState('')
const [password_input, setPassword] = useState('')


const clear=(e)=>{
 e.preventDefault()
 setEmail('')
 setPassword('')
 document.getElementById("render_success_response").innerHTML=""
}

const handleLoginSubmit=(event)=>{
    
    event.preventDefault()
    console.log(email_input);
    console.log(password_input)
    axios.post("http://localhost:8080/login_user_details",{
    login_email:email_input,
    login_password:password_input
    
    }).then((response)=>{
    response.data.length===0?(ReactDOM.render(<div><h3 style={{color:'red'}}>Login Failed</h3></div>,document.getElementById("render_success_response"))
    )
    :
    ((response.data[0]["useremail"]===null && response.data[0]["password"]===null)
    ||(response.data[0]["useremail"]===null || response.data[0]["password"]===null)
    ?
    (
       ReactDOM.render(<div><h3 style={{color:'red'}}>Login Failed</h3></div>,document.getElementById("render_success_response"))
    ):(ReactDOM.render(<div><h3 style={{color:'red',cursor:'pointer'}} 
    onClick={()=>props.history.push('/main')}
    >You have successfully login to your account</h3>
    
    </div>,document.getElementById("render_success_response"))))
    
    }).catch(error=>{
        alert(error)
    })


}   
 const handleData=(event)=>{    
   event.target.name==="email"?setEmail(event.target.value):setPassword(event.target.value)
}
    return (
        <>
        <UserComponent/>
        <div className="handleLogin">
        <div>
        <label>
        <h2>
        <img  src={lic} alt="" style={{position:'relative',right:'6px',top:'3px'}} />
        LOGIN</h2> 
        </label>

        <form onSubmit={handleLoginSubmit}>
        <input type="email" name="email" placeholder="Enter Email" value={email_input}
        style={{
            width:'260px',height:'45px',borderRadius:'5px'
        }} onChange={handleData}
        />

        <br/><br/><br/>
        
        <input type="password" name="password" placeholder="Enter password" value={password_input}
        style={{
            width:'260px',height:'45px',borderRadius:'5px'
        }} onChange={handleData}
        />
        <br/><br/>
        
        <label onClick={()=>{
            props.history.push('/userpage/user_register')
           
        }} style={{
            cursor:'pointer'
        }} id="label_ca"
        >Not a user?Sign up?</label>
        <br/><br/>

        <div style={{display:'flex',flexDirection:'row'}}>

        <button type="reset" style={{marginLeft:'120px',width:'160px',fontSize:'14px',backgroundColor:'cyan',cursor:'pointer',borderRadius:'4px'}}
        onClick={clear}
        >CLEAR FIELDS</button>
        <span style={{width:'24px'}}/>

        <input type='submit' value="LOGIN"  style={{marginRight:'120px',backgroundColor:'cyan',
        width:'135px',border:'1px solid blue',fontSize:'16px'}}
        />
        </div>

        </form>
        </div>  
            <div id="render_success_response">

            </div>
        </div>
        </>
        
    )
}

export default HandleUserLogin
//How to use redirect component
//https://medium.com/@alexfarmer/redirects-in-react-router-dom-46198938eedc