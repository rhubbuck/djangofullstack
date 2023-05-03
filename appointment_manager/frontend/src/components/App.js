import React, { Component, Fragment} from 'react';
import { ReactDOM, render } from 'react-dom';
import Header from './layout/Header';
import Dashboard from './appointments/Dashboard';
import Login from './accounts/Login';
import Register from './accounts/Register';
import PrivateRoute from './common/PrivateRoute';
import { Provider } from 'react-redux';
import store from '../store';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'; 
import { loadUser } from '../actions/auth';
import Feed from './appointments/Feed';


export default class App extends Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      store.dispatch(loadUser());
    }
  
    render() {
      return (
        <Provider store={store}>
          <Router>
            <Fragment>
              <Header />
              <div className='container'>
                <Switch>
                  <PrivateRoute exact path="/" component={Dashboard} />
                  <Route exact path="/feed" component={Feed} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </Provider>
      )
    }
  }
  
  const appDiv = document.getElementById("app");
  render(<App />, appDiv);