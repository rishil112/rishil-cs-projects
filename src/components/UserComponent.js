import React,{useState} from 'react'
import {NavLink} from 'react-router-dom'
import './components.css';

function UserComponent(props) {
    
    return (
      
      <div>
        <div>
          <div style={{marginTop:'65px'}}
          className="div_reg_log"
          >
          <NavLink  to="/userpage/user_register" activeClassName="is-active"  className="user_register"
          activeStyle={{
            fontWeight:'bold',
            color:'red',
            fontFamily:'fantasy'

          }} 
          >REGISTER</NavLink>

          <span style={{display:'inline-block',width:'350px'}}/>
          
          <NavLink  to="/userpage/user_login" activeClassName="is-active" className="user_login" activeStyle={{
            fontWeight:'bold',
            color:'red',
            fontFamily:'fantasy'

          }} >LOGIN</NavLink>
          </div>  
          
        </div> 
       
        </div>
        
    )
}

export default UserComponent
