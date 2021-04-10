import React from 'react'
import './card.css'
import axios from 'axios'
function Card(props) {
    const department=props.cardData;
    const check_name=props.checkName;

    const handleOnInsert=(id,title,body)=>{
       
        
        axios.post("http://localhost:8080/handleInsertProducts",
        {
            pid:id,ptitle:title.toString(),pbody:body.toString(),store_name:check_name.toString()
        })
        .then((response)=>{
            alert(response.data)
        })
        .catch(err=>alert(err))

       

    }
    const handleOnDelete=(product_name_)=>{
        
        axios.post("http://localhost:8080/handleDeleteProducts",
        {
            product_name:product_name_
        }).then(response=>{
            alert(response.data)
        }).catch(e=>{alert(e)})
    } 

    return (
        <div>
        {
            department.map((dep)=>{
                return(
                <div className="card-container" key={dep.id}>
                        <div className="image-container">
                            <img src={dep.card_img_url} alt="" />
                          
                        </div>
                    <div className="card-content">
                        <div className="card-title">
                            <h2>{dep.card_title}</h2>
                        </div>
                        <div className="card-body">
                            <h3>{dep.card_body}</h3>
                        </div>
                        <div className="btn-add-to-cart">
                            <button onClick={()=>handleOnInsert(dep.id,dep.card_title,dep.card_body)}>ADD TO CART</button>
                            <button onClick={()=>handleOnDelete(dep.card_title)}>REMOVE ITEM</button>
                        </div>

                    </div>
                </div>
                )
            })  
        }
        
        
        </div>
    )
}

export default Card
