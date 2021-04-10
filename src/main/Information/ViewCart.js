import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router'
class ViewCart extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             product_data_in_json:[],
             product_data:[],
             trending_data:[],
             sum:0
        }
    }
    
    
    fetch_products_data()
    {
        axios.get("http://localhost:8080/fetch_product_records")
        .then(res=>{
            this.setState({product_data_in_json:res.data})
            console.log(this.state.product_data_in_json);
        })
        .catch(err=>console.log(err))

        axios.get("http://localhost:8080/fetch_trending_items")
        .then(res=>{
            this.setState({trending_data:res.data})
            console.log(this.state.trending_data);
        })
        .catch(err=>console.log(err))

        axios.get("http://localhost:8080/get_sum_of_items")
        .then(res=>{
            this.setState({sum:res.data[0]["sum"]})
            axios.post("http://localhost:8080/send_sum",{
           sum:this.state.sum 
        })
        .then(r=>{console.log(r.data)})
        .catch(e=>console.log(e))
        })
       
        
    }

    componentDidMount()
    {
        this.fetch_products_data()
    }
    render() {
        return (
            <div>
                <div>
                <h2>Product Cart</h2>
                
                    <div 
                    className="div_table"
                    >
                    <table>
                    <thead>
                        <tr>
                            <th>Product ID</th>
                            <th>Product Department</th>
                            <th>Product Name</th>
                            <th>Product Description</th>
                        </tr>
                       
                    </thead>
                       
                        {
                            this.state.product_data_in_json.map((value)=>{
                                return(
                                   <tbody key={value.product_id}> 
                                    <tr>
                                       <td>{value.product_id}</td>
                                       <td>{value.product_type}</td>
                                       <td>{value.product_name}</td>
                                       <td>{value.product_body}</td>
                                    </tr>
                                    </tbody>
                                )
                            })
                        }
                    </table>
                
                    </div> 
                    <button style={{cursor:'pointer',color:'darkblue',backgroundColor:'cyan'}}
                    onClick={()=>{
                        this.props.history.push("/main/payment")
                        
                    }}
                    >View Purchase Details</button>
                </div>

                <div>
                <h2>Trending Cart</h2>
                <div 
                    className="div_table"
                    >
                    <table>
                    <thead>
                        <tr>
                            <th>Product ID</th>
                            <th>Floor No</th>
                            <th>Product Name</th>
                            <th>Shop Name</th>
                            <th>Trend Type</th>
                        </tr>
                       
                    </thead>
                       
                        {
                            this.state.trending_data.map((value)=>{
                                return(
                                   <tbody> 
                                    <tr>
                                       <td>{value.trend_product_id}</td>
                                       <td>{value.dep_floor_no}</td>
                                       <td>{value.trend_item_name}</td>
                                       <td>{value.trend_shop_name}</td>
                                       <td>{value.trend_type}</td>
                                    </tr>
                                    </tbody>
                                )
                            })
                        }
                    </table>
                
                    </div>
                </div>

            </div>
        )
    }
}

export default ViewCart

