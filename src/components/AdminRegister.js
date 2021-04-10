import React,{useState} from 'react'
import ReactDOM, { render } from 'react-dom'
import './components.css'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import AdminComponent from './AdminComponent'


function AdminRegister(props) {
   
    

    let pattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]+$/g
    let arr_of_admins=[]
        

    const struct_for_reg_admin=yup.object().shape({
        admin_uname:yup.string().required(),
        admin_email:yup.string().required().email(),
        admin_password:yup.string().required().min(5).max(15).matches(pattern),
        
      })
  
      //handler
      const {register,handleSubmit,errors}=useForm({
        resolver:yupResolver(struct_for_reg_admin)
      });
      
      const onSubmit=(data)=>{
          console.log(data);
          arr_of_admins.push(data);
          if(arr_of_admins.length!==0)
          {
            //ReactDOM.render(<Form_submitted/>,document.getElementById('render_html'))
           
          }

          axios.post("http://localhost:8080/register_admin_details",{
              admin_reg_name:data.admin_uname,
              admin_reg_email:data.admin_email,
              admin_reg_pwd:data.admin_password
          }).then((response)=>{
            ReactDOM.render(
                <div>
                <br/>
                <h3 style={{color:'darkblue',fontSize:'15px'}}>{response.data}</h3>
                </div>
                ,document.getElementById("render_html"))
          }).catch(error=>{
              console.log(error);
          })

      }

    return (
        <>
        <AdminComponent/>
        <div>
            <div className="admin-register-compo">
                <h2>SIGN UP</h2>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div style={{marginTop:'40px'}}>
                            <input type="text" name="admin_uname" placeholder="ADMIN NAME"
                            style={{width:'230px',height:'30px',border:'none',borderBottom:'3px solid dodgerBlue'}}
                            ref={register}
                            /><br/>
                            {errors.admin_uname?.message && <span id="span_error">*{errors.admin_uname?.message}</span>}
                            <br/>

                            <input type='email' name='admin_email' placeholder="ADMIN EMAIL"
                            style={{width:'230px',height:'30px',border:'none',borderBottom:'3px solid dodgerBlue'}}
                            ref={register}
                            /><br/>
                            {errors.admin_email?.message && <span id="span_error">*{errors.admin_email?.message}</span>}
                            <br/>
                            
                            <input type='password' name="admin_password" placeholder="ADMIN PASSWORD"
                            style={{width:'230px',height:'30px',border:'none',borderBottom:'3px solid dodgerBlue'}}
                            ref={register}
                            /><br/>
                            {errors.admin_password?.message && <span id="span_error">*{errors.admin_password?.message}</span>}
                            <br/><br/>

                            <label style={{cursor:'pointer'}} id="label_already_admin"
                            onMouseOver={() => {document.getElementById("label_already_admin").style.color="red"}}
                            onMouseLeave={()=>{document.getElementById("label_already_admin").style.color="black"}}
                            onClick={() => {
                            props.history.push('/adminpage/adminlogin')
                            }}
                            >Already have an Admin Account?</label>
                            <br/><br/>
                            
                            <input type='submit' value="CREATE ADMIN ACCOUNT"
                            style={{width:'240px',border:'2px double blue',borderRadius:'5px'}}
                            
                            />
                            
                        </div>
                    </form>
                
                </div>
                    <div id="render_html">
                            
                    </div>           
            </div>
         
        </div>
        </>
    )
}

export default AdminRegister
