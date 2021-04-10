import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import ric from './Images/perm_identity-24px.svg'
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import './components.css'
import axios from 'axios'
import UserComponent from './UserComponent';

function HandleUserRegistration(){

    let pattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@#$!%*?&]+$/g
    let arr=[]  
  //hooks
  //1.username
  const [error_radio_checked, shouldCheckForRadio] = useState(true)
  

    //validations
    const struct_for_reg=yup.object().shape({
      reg_uname:yup.string().required(),
      reg_email:yup.string().required().email(),
      reg_password:yup.string().required().min(5).max(15).matches(pattern),
      reg_pincode:yup.string().required().min(6),
      reg_dob:yup.string().required(),
      myradio:yup.string().required()
    })

    //handler
    const {register,handleSubmit,errors}=useForm({
      resolver:yupResolver(struct_for_reg)
    });
    
    const onSubmit=(data)=>
    {
      arr.push(data)
      console.log(data.reg_email);
      axios.post("http://localhost:8080/register_user_details",
      {
       username:data.reg_uname,
       useremail:data.reg_email,
       password:data.reg_password,
       gender:data.myradio,
       pincode:data.reg_pincode,
       dob:data.reg_dob
        
      })
      .then((response)=>{
        //handles if response.data is not available what we can do
        ReactDOM.render(<h3 style={{color:'darkblue',fontSize:'14px'}}><br/>{response.data}</h3>,document.getElementById("render_user_reg_from_server"))
        console.log(response.data);
      },(error)=>{
        console.log(error);
      })
    }
    
    return(
      <>
      <UserComponent/>
      <div className="handleRegistration">
      
      <div style={{marginRight:'35px'}}>
      <h2 style={{marginLeft:'45px' }}>
      <img src={ric} alt="" style={{position:'relative',top:'3.5px',right:'3.22px'}}/>
      REGISTRATION</h2>

      <form name="reg_user_form"  onSubmit={handleSubmit(onSubmit)}>
      <input type="text" id="input_reg" name="reg_uname"  placeholder="Name" style={{width:'260px',height:'45px',position:'relative',left:'20px'}}
      ref={register}
      
      />
      <br/>
      {errors.reg_uname?.message && <span id="span_error">*{errors.reg_uname?.message}</span >
       }
      <br/>
  
      <input type="email" id="input_reg" name="reg_email" placeholder="Email" style={{width:'260px',height:'45px',position:'relative',left:'20px'}}
      ref={register}
      />
      <br/>
      {errors.reg_email?.message && <span id="span_error">*{errors.reg_email?.message}</span >}
      <br/>
      
      <input type="password" id="input_reg"  name="reg_password" placeholder="Password" style={{width:'260px',height:'45px',position:'relative',left:'20px'}}
      ref={register}
      />
      <br/>
     {errors.reg_password?.message && <span id="span_error">*{errors.reg_password?.message}</span >}
      <br/>
      
      <label style={{position:'relative',right:'68px',bottom:'5px',color:'darkblue'}}>Select Gender</label><br/>
      
      <div style={{marginRight:'119px'}}>
      <input type="radio" name="myradio"   id="input_radio"  value="MALE"  size="25" style={{marginLeft:'46px'}}
      ref={register}
      onChange={()=>{
        shouldCheckForRadio(false)
      }} 

      /><label for="MALE" >MALE</label>
      
      <span  style={{display:'inline-block',width:'30px'}}></span >
      
      <input type="radio" name="myradio"   id="input_radio"  value="FEMALE" size="25"
      ref={register}
      onChange={()=>{
        shouldCheckForRadio(false)
      }} 
      /><label for="FEMALE">FEMALE</label>
      </div>
      {error_radio_checked && <span id="span_error">*Gender Required</span>}

      <br/>
  
      <input type="number" id="input_reg" name="reg_pincode" placeholder="PINCODE" style={{width:'260px',height:'45px',position:'relative',left:'20px'}}
      ref={register}
      />
      <br/>
      {errors.reg_pincode?.message && <span id="span_error">*{errors.reg_pincode?.message}</span >}

      <br/>
      
      <input type="date" id="input_reg" name="reg_dob" placeholder="DATE OF BIRTH" style={{width:'260px',height:'45px',position:'relative',left:'20px'}}
      ref={register}
      />
      <br/>
      {errors.reg_dob?.message && <span id="span_error">*{errors.reg_dob?.message}</span>}

      <br/><br/>
      <input type='submit' value="CREATE ACCOUNT"
      style={{width:'280px',position:'relative',left:'22px'}}
      />

      </form>

      </div>
        <div id="render_user_reg_from_server">
        
        </div>
    
      </div>
      </>
    )
  }
  export default HandleUserRegistration;
  