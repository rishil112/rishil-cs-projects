import React, { Component } from 'react';
import ReactDOM from "react-dom";
import axios from "axios";
import './components.css';
import Mall from'./Images/mall.jpeg'
import UserComponent from './UserComponent';
import AdminComponent from './AdminComponent';
import {withRouter} from 'react-router-dom';


const x={
    backgroundColor:'#e9f0f1',
    padding:'20px',
    width:'510px',
    height:'275px'
}


class HomePage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             uname:'',emailID:'',password:'',
             loadComponent:false
        }
    }

    

    handleMouseOverEvent=(val)=>{
        console.log("called!!");
        document.getElementById('main_div_style').style.opacity="0.8";    
                          
        val?
        (
        document.getElementById('adminpage').style.cssText="opacity:10;border:3px solid dodgerBlue;"  
        ):
        (
        document.getElementById('userpage').style.cssText
        ="opacity:10;border:3px solid dodgerBlue;"
        )     
           
    }

    handleMouseLeaveEvent=(val)=>{
      
        document.getElementById('main_div_style').style.removeProperty('opacity')

        val?
        (
            document.getElementById('adminpage').style.removeProperty('border')
        )
        :
        (
            document.getElementById('userpage').style.removeProperty('border')
                
        )

    }

    FireOnSubmit=(event)=>{
        
        axios.post("http://localhost:8080/homeRouter",()=>{
            console.log("Form submitted!");    
        }).then((res)=>console.log(res.data)).then(console.log("Form submitted"));
        
        event.preventDefault();
        
    }

    
    render() {

        return (
       
        <div id="top-level-container-welcome">   
        <center>
        <div id="main_div_style">   
        <img src={Mall} alt="" width='550' height='300'></img>
            
            <hr width="550" style={{borderTop:'2px dashed darkgray'}}/>

            <div style={x}>
            <h2 id="role_choose">CHOOSE A ROLE</h2>
                
                <button 
                id="userpage"
                onMouseEnter={()=>this.handleMouseOverEvent(0)}
                onMouseLeave={()=>this.handleMouseLeaveEvent(0)}
                onClick={()=>{
                    this.props.history.push('/userpage')                    
                }}
                
                >
                <h3> USER</h3> 
                </button>
                
                <br/>
                <button id="adminpage"
                onMouseEnter={()=>this.handleMouseOverEvent(1)}
                onMouseLeave={()=>this.handleMouseLeaveEvent(1)}
                onClick={()=>{
                    this.props.history.push('/adminpage')                    
                }}
                >
                <h3>ADMIN</h3>
                </button>

            </div>
            </div>
            
            </center>
                        
            </div>
           
        )
    }
}

export default withRouter(HomePage);
/*
</div> <div>
            
            // <form onSubmit={this.FireOnSubmit}>
            
            </form>/<input type="text" name="username" 
            // id="username"
            // defaultValue={this.state.uname} placeholder="Username"   
            
            // size='48'
            // />
            // <br/><br/>
            

            // <input type="email" name="myemail" defaultValue={this.state.emailID}
            // placeholder="Email" id="email"
                      
            // size='48'/>
            // <br/><br/>
                   
            
            // <input type="password" name="password" defaultValue={this.state.password} placeholder="Password" id="password"
            //  size='48'
            //  />
            // <br/><br/>
            
            // <br/><br/>
            
            //  <button type="submit" value="SIGN UP" >SIGN UP</button>
            
            // </form>
            // </div>





*/