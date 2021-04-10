import React from 'react'
import mall_back from './Images/mall_back.png'

function welcome(props) {
    return (
        <div style={{
            backgroundImage: `url(${mall_back})`,
            backgroundRepeat: 'no-repeat',
            height:'750px'
          }}>
        <h2 style={{color:'blueviolet',fontFamily:'fantasy',marginLeft:'65px'}}>WELCOME TO MALL MANAGEMENT SYSTEM</h2>
        <button  style={
          {
            color:"blueviolet",
            cursor:'pointer',
            width:'190px',height:'65px',marginLeft:'40px',fontFamily:'fantasy',fontSize:'20px'
          }
        } onClick={()=>{
            props.history.push('/homepage')
    
        }} >Click to continue</button>
        </div>
    )
}

export default welcome
