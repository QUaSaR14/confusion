import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import { Switch, Route, Redirect } from 'react-router-dom';

//This MainComponent is a Container Component -->> which deal with the data 
//It contains two Presentational Component --> Menu  and DishDetails

class Main extends Component{

  constructor(props)
  {
    super(props);

    //state -> stores the properties related to this component that we can make use of
    this.state = {
      dishes : DISHES,
    }
  }

  //For passing a component with props in Route , we need to pass it as a functional component
  render() {

    const HomePage = () => {
      return(
        <Home />
      );
    }

    return (
      <div>
        <Header />
          <Switch> 
            <Route path="/home" component={HomePage} />
            <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
            <Redirect to="/home" />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
