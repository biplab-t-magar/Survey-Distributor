import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';

const Dashboard = () => {
    return <h2>Dashboard</h2>;
}

const SurveyNew = () => {
    return <h2>SurveyNew</h2>;
}


class App extends React.Component  {
    componentDidMount() {
        this.props.fetchUser();
    };

    render() {
        return(
            <div className="container">
                <BrowserRouter>
                    <Header />
                    <Route path="/" exact component={Landing}/>
                    <Route path="/surveys" exact component={Dashboard}/>
                    <Route path="/surveys/new" component={SurveyNew}/>
    
                </BrowserRouter>
            </div>
        )
    }
    
};

export default connect(null, actions)(App);