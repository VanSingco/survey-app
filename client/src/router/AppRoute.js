import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "../action/user";
import landing from '../component/pages/landing';
import dashboard from '../component/pages/dashboard';
import surveyNew from '../component/pages/surveyNew';


class App extends Component {

  componentDidMount = () => {
    this.props.fetchUser();
  }

  renderRoute = () => {
    switch (this.props.user) {
      case false:
        return (
          <Switch>
            <Route  exact path="/" component={landing} />
          </Switch>   
        )
    
      default:
        return (
           <Switch>
            <Route  exact path="/" component={dashboard} />
            <Route  exact path="/survey/new" component={surveyNew} />
          </Switch>   
        )
    }
  }

  render() {
    return (
        <BrowserRouter>
          {this.renderRoute()}   
        </BrowserRouter>
    )
  }
}

const mapStateToProps = ({user}) => {
  return {user}
}

export default connect(mapStateToProps, {fetchUser})(App)
