import React from 'react'
import '../components/components.css'
import {NavLink} from 'react-router-dom'
import ShowBrief from './ShowBrief/ShowBrief'

function main(props) {
    return (
        <div>
            
        <div className="design_main_component">
        <h3
        style={{
            position:'relative',
            top:'-10px',
            display:'flex',
            flexFlow:'row',
            fontFamily:'Fantasy',
            letterSpacing:'5px'  
        }}>MALL STARS</h3>

            <div style={{fontSize:'15px',display:'flex',flexFlow:'row',position:'relative',top:'11px',   justifyContent:'right',right:'-720px'}}> 
            <NavLink  exact to="/main/home" id="navlink_common"  activeStyle={{color:'red'}}>HOME
            </NavLink>

            <NavLink  exact to="/main/product" id="navlink_common" activeStyle={{color:'red'}}>PRODUCTS</NavLink>
            
            <NavLink  exact to="/main/viewcart" id="navlink_common" activeStyle={{color:'red'}}>VIEW CART</NavLink>
            
            <NavLink  exact to="/main/payment" id="navlink_common" activeStyle={{color:'red'}}>PAYMENT</NavLink>
            
            <NavLink  exact to="/main/shops" id="navlink_common" activeStyle={{color:'red'}}>SHOPS</NavLink>
            
            <NavLink  exact to="/main/contactus" id="navlink_common" activeStyle={{color:'red'}}>CONTACT US</NavLink>
            </div>
        </div>

            <div className="darken_image"></div>
            <h1 id="darken_image_h1">Shop with Stars</h1>    
            <h2 id="text_slogan"><i><b>&ldquo;Your searches end here&rdquo;</b></i></h2>      
            <div style={{display:'flex',flexFlow:'50px',paddingLeft:'305px',position:'relative',
                top:'-540px'}}>
                    <button type="button" onClick={()=>{
                        props.history.push("/main/product")
                    }} style={{cursor:'pointer',padding:'5px',border:'2px solid white',backgroundColor:'transparent',color:'white'}}>
                    <b>GET STARTED</b>
                    </button>
            </div>

        <h1 style={{fontSize:'45px',position:'relative',top:'-174px'}}>Products Popular</h1>
        <ShowBrief/>    
                     
        </div>
    
    )
}

export default main

