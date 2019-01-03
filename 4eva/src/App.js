import React, { Component } from 'react';
import './App.css';
import Landing from './Components/LandingPage/landing'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ProductsShowCase from './Components/Products/productshowcase'
import PortfolioShowcase from './Components/Services/portfolioshowcase'
import Register from './Components/Registration/register'
import Contact from './Components/Contact/contact'
import SignIn from './Components/SignIn/signin'
import Blog from './Components/Blog/blog'
import Dashboard from './Components/UserDashboard/dashboard'
import ServiceDetail from './Components/Detail/serviceDetail'
import Post from './Components/Blog/post'
import Notification from './Components/UserDashboard/notification'
import Profile from './Components/UserDashboard/profile'

// import {faFacebookOfficial} from '@fortawesome/free-solid-svg-icons'

// library.add(faFacebookOfficial)

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>   
          <Route exact path ='/' component ={Landing}/>
          <Route exact path ='/product/:product_Id' component ={ProductsShowCase}/>
          <Route exact path ='/service/:service_Id' component ={PortfolioShowcase}/>
          <Switch>
            {/* <Route exact path ='/:category/:portfolio_Id' component ={ServiceDetail}/> */}
          </Switch>     
          <Route exact path ='/heartsandflowers/:postId' component ={Post}/>    
          <Route exact path ='/heartsandflowers' component ={Blog}/>              
          <Route path ='/register' component ={Register}/>
          <Route path ='/contact' component ={Contact}/>
          <Route path ='/signin' component ={SignIn}/>
          <Route path ='/dashboard' component ={Dashboard}/>
          <Route path ='/notification' component ={Notification}/>
          <Route path ='/profile' component ={Profile}/>
          
        </div>
      </BrowserRouter> 
       
    );
  }
}

export default App;
