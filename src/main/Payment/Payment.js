import axios from 'axios'
import React, { Component } from 'react'

export class Payment extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             intialWallet:38600,purchase_value:0
        }
    }
    componentDidMount()
    {
        axios.get("http://localhost:8080/get_updated_sum_value_if_not_zero")
        .then(res=>{
            this.setState({purchase_value:res.data[0]["sum_of_products"]})
            if (this.state.purchase_value>this.state.intialWallet) {
                alert("Purchased is Full")
                this.setState({purchase_value:0})
            }
        })
    }

    render() {
        return (
         <div>
            <h1>You can view your cart total cost
            and your purchase wallet.
            </h1>
            <div style={{width:'350px',height:'150px',backgroundColor:"lightgoldenrodyellow",
            border:'3px solid blue',marginLeft:'325px'}}>
            <h3>Purchase Wallet:Rs{this.state.purchase_value} </h3>
            <h3>Intial Wallet:Rs{this.state.intialWallet} </h3>
           
            </div>
            </div>
        )
    }
}

export default Payment
