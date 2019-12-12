import React, {Component} from 'react';
import Home from '../screens/home/Home';
import Details from '../screens/details/Details';
import Checkout from '../screens/checkout/Checkout';
import Profile from '../screens/profile/Profile';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Controller extends Component {
    baseUrl = "http://localhost:8080/api";
    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/' render={(props) => <Home {...props} baseUrl={this.baseUrl}/>} />
                    <Route path='/restaurant/:restaurantID' render={(props) => <Details {...props} baseUrl={this.baseUrl} />} />
                    <Route path='/checkout' render={(props) => <Checkout {...props}baseUrl={this.baseUrl} />} />
                    <Route path='/profile' render={(props) => <Profile {...props} baseUrl={this.baseUrl} />} />
                </div>
            </Router>
        )
    }
}

export default Controller;