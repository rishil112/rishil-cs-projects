import React from 'react'
import {NavLink} from 'react-router-dom'
function AdminComponent(props) {
    return (
        <div>
            <div className="admin_authentication">
            <header>   
            <h2 >Choose A Credential</h2>
            </header>
        
            <footer>
            <div>
            <NavLink to="/adminpage/adminregister" className="adminpage-adminregister"
            activeStyle={{color:'red'}}>
            Admin Register</NavLink><br/>
            </div>

            <div>
            <NavLink  to="/adminpage/adminlogin" className="adminpage-adminlogin"
            activeStyle={{color:'red'}}>Admin Login</NavLink>
            </div>

            </footer>
            </div>
                    
        </div>
    )
}
//https://flaviocopes.com/react-router/

export default AdminComponent
