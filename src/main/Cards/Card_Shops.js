import axios from 'axios'
import React from 'react'

function Card_Shops(props) {
    const department=props.cardData
    const deptFloor=props.deptFloor
    const departmentName=props.checkName

    const handleTrendingProducts=(id,title,body)=>{
        
        axios.post("http://localhost:8080/handleTrendingProducts",{
            trend_product_id:id,
            trend_product_name:title.toString(),
            trend_type:body.toString(),
            deptFloor_:deptFloor.toString(),
            dept_name:departmentName.toString()
        }).then(res=>{
            if(res.data===1)
            {
                alert("Item exists already")
            }
            else{alert(res.data)}
            
        }).catch(err=>alert(err))
    }

    const handleTrendingDeleteProducts=(title)=>{
        
        axios.post("http://localhost:8080/handleTrendingDeleteProducts",{
            trend_product_name:title.toString()
        })
        .then(res=>{
            alert(res.data)
        }).catch(e=>{
            alert(e)
        })
        
    }

    return (
        <div>
        {
            department.map((dep)=>{
                return(
                <div className="card-container" key={dep.id}>
                        <div className="image-container">
                            <img src={dep.card_img_url} alt="" />
                           { console.log(dep.card_img_url)}
                        </div>
                    <div className="card-content">
                        <div className="card-title">
                            <h2>{dep.card_title}</h2>
                        </div>
                        <div className="card-body">
                            <h3>{dep.card_body}</h3>
                        </div>
                        <div className="btn-add-to-cart">
                            <button onClick={()=>handleTrendingProducts(dep.id,dep.card_title,dep.card_body)
                            }>ADD TO CART</button>
                            <button onClick={()=>
                                handleTrendingDeleteProducts(dep.card_title)
                            }>REMOVE ITEM</button>
                        </div>
                    </div>
                </div>
                )
            })  
        }
        
        
        </div>
    )
}

export default Card_Shops

