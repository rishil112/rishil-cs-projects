import  './App.css';
import React from 'react'
import HomePage from './components/HomePage';
import UserComponent from './components/UserComponent';
import AdminComponent from './components/AdminComponent'
import {Switch,Route} from 'react-router-dom';
import welcome from './components/welcome';
import HandleUserRegistration from './components/HandleUserRegistration'
import HandleUserLogin from './components/HandleUserLogin'
import AdminRegister from './components/AdminRegister'
import AdminLogin from './components/AdminLogin'
import main from './main/main';
import Products from './main/Products/Products'
import HomeComponentMall from './main/HomeComponent/HomeComponentMall';
import ViewCart from './main/Information/ViewCart'
import Contact from './main/Information/Contact'
import Payment from './main/Payment/Payment';
import Shops from './main/Shops/Shops'
import ShowBrief from './main/ShowBrief/ShowBrief';
class App extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       APIRESPONSE:'',selectComponent:false
    }
  }
  // callApi()
  // {
    
  //   fetch("http://localhost:8080/testApi")
  //   .then(res=>res.text()).then(res=>this.setState({APIRESPONSE:res}));
  //   console.log(this.state.APIRESPONSE);
  // }
  
  
  // componentWillMount()
  // {
  //   this.callApi();
  // }
 
  
render(){
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component={welcome}/>
      <Route exact path="/homepage" component={HomePage} />
      <Route exact path="/userpage" component={UserComponent} />
      <Route exact path="/adminpage" component={AdminComponent} />
      <Route exact path="/userpage/user_register" component={HandleUserRegistration}/> 
      <Route exact path="/userpage/user_login" component={HandleUserLogin}/> 
      <Route exact path="/adminpage/adminregister" component={AdminRegister}/> 
      <Route exact path="/adminpage/adminlogin" component={AdminLogin}/> 
      <Route exact path="/main" component={main}/>
      <Route exact path="/main/home" component={HomeComponentMall}/>
      <Route exact path="/main/product" component={Products}/>
      <Route exact path="/main/viewcart" component={ViewCart}/>
      <Route exact path="/main/payment" component={Payment}/>
      <Route exact path="/main/shops" component={Shops}/>
      <Route exact path="/main/contactus" component={Contact}/>
      <Route exact path="/show_info" component={ShowBrief}/>
      </Switch>
      
    </div>
  );
}
}
export default App;

//get the ui if needed.
//https://reactjsexample.com/tag/ui/

//inserting data into database.
// https://bezkoder.com/react-node-express-mysql/
//https://jsonplaceholder.typicode.com/