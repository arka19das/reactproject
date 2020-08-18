import React, { Component } from 'react';
import Home from './HomeComponent.js';


import Menu from './MenuComponent';

import { DISHES } from '../shared/dishes';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            //selectedDish: null
        };

    }
    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });

    }
    render() {
        console.log("main render component invoked");
        const HomePage = () => {
            return ( < Home / > );
        }
        return ( <div>
            <Header / >
            < Switch >
            < Route path = '/home' component = { HomePage } /> 
            <Route exact path = '/menu' component = {() => < Menu dishes = { this.state.dishes }/>} / >
            <Redirect to = "/home" / >
            </Switch>
            <Footer / >
            </div>
            );
        }
    }

    export default Main;

    /*<
                Menu dishes = { this.state.dishes }
                onClick = {
                    (dishId) => this.onDishSelect(dishId)
                } //see here i have done this.state..... not this.prop.dishes
                / >  <
                DishDetail dish = { this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0] }
                /> 
                */