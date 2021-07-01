import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import SignInPage from './pages/SignInPage';
import CheckoutPage from './pages/CheckoutPage';

import Header from './components/Header';
import { selectCurrentUser } from './redux/user/userSelector';
import { checkUserSession } from './redux/user/userActions';

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route 
            exact 
            path="/signin" 
            render={() => this.props.currentUser ? (
              <Redirect to='/' />
              ) : (
              <SignInPage />
              )
            } 
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
