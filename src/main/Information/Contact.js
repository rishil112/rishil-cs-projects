import axios from 'axios'
import React,{useState} from 'react'
import '../Cards/card.css'

function Contact() {
    const [email_state, setEmailstate] = useState('')
    const [pass_state, setPasswordstate] = useState('')
    const [user_info,setuserInfo]=useState([])

    const handleOnSubmit=(event)=>{
        event.preventDefault()
        console.log(email_state+pass_state);
        axios.post("http://localhost:8080/get_user_details",{
            email:email_state,
            password:pass_state
        })
        .then(res=>{
            console.log(res.data);
             setuserInfo(res.data)
        })
        .catch(e=>alert(e))
    }
    
    return (
        <div>

            <div className="contact_page"> 
                <form onSubmit={handleOnSubmit} id="contact-form">
                    <h2 style={{position:'relative',left:"58px"}}>CONTACT US</h2>
                <div style={{position:'relative',left:'60px'}}>    
                    <input type="email" placeholder="Enter Email"
                    onChange={(event)=>setEmailstate(event.target.value)}
                    id="contact-form"
                    />

                    <input type="password" placeholder="Enter Password"
                    onChange={(event)=>setPasswordstate(event.target.value)}
                    id="contact-form"
                    />
                    <label style={{position:'relative',right:'75px'}}  id="contact-form">Comment:</label>
                    <textarea name="comment_on_us" cols="50"
                    style={{position:'relative',left:'3px'}}  id="contact-form"
                    /><br/>
                    <input type="submit"  id="contact-form"
                    style={{position:'relative',bottom:'65px',left:'64px'}}
                    />
                </div>
                
                </form>
                {
                    user_info.map((data)=>{


                        if (data.useremail===email_state && data.password===pass_state) {
                            alert("Details entered correctly")
                        } 
                    })
                   
                }
            
            </div>
            
        </div>
    )
}


export default Contact
