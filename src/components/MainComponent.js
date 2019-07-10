import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import DishDetail from './DishdetailComponent';

import Header from './HeaderComponent';
import Footer from './FooterComponent';

import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from  '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
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
      comments : COMMENTS,
      promotions : PROMOTIONS,
      leaders : LEADERS,
    }
  }

  //For passing a component with props in Route , we need to pass it as a functional component
  render() {

    //filter is used to extract out things from given parameter
    const HomePage = () => {
      return(
        <Home 
          dish={this.state.dishes.filter((dish) => dish.featured )[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured )[0]}
          leader={this.state.leaders.filter((leader) => leader.featured )[0]}
        />
      );
    }

    const DishWithId = ({match}) => {
      return(
        <DishDetail 
          dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10) )[0]} 
          comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10) ) }
        />
      );
    }

    return (
      <div>
        <Header />
          <Switch> 
            <Route path="/home" component={HomePage} />
            <Route exact path="/aboutus" component={() => <About leaders={this.state.leaders} />} />
            <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
            <Route path="/menu/:dishId" component={DishWithId} />
            <Route exact path="/contactus" component={Contact} />
            <Redirect to="/home" />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
