import React, { Component } from 'react';
import Home from './HomeComponent.js';


import Menu from './MenuComponent';
import Contact from './ContactComponent';
import { DISHES } from '../shared/dishes';
import { LEADERS } from '../shared/leaders';

import { PROMOTIONS } from '../shared/promotions';
import { COMMENTS } from '../shared/comments';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from './AboutComponent';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS

            //selectedDish: null
        };

    }
    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });

    }
    render() {
            console.log("main render component invoked");
            const HomePage = () => {
                return ( < Home dish = { this.state.dishes.filter((dish) => dish.featured)[0] }
                    promotion = { this.state.promotions.filter((promotion) => promotion.featured)[0] }
                    leader = { this.state.leaders.filter((leader) => leader.featured)[0] }
                    / > );
                }

                const DishWithId = ({ match }) => {
                    return ( <
                        DishDetail dish = { this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0] }
                        comments = { this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10)) }
                        />

                    );
                }
                const Aboutpage = () => {
                    return ( <
                        About leaders = { this.state.leaders }
                        />
                    );
                }
                return ( < div >
                    <
                    Header / >
                    <
                    Switch >
                    <
                    Route path = '/home'
                    component = { HomePage }
                    />   <
                    Route path = "/contactus"
                    component = { Contact }
                    /> <
                    Route path = "/aboutus"
                    component = { Aboutpage }
                    /> 

                    <
                    Route exact path = '/menu'
                    component = {
                        () => < Menu dishes = { this.state.dishes }
                        />} / >
                        <
                        Route path = '/menu/:dishId'
                        component = { DishWithId }
                        />         <
                        Redirect to = "/home" / >
                        <
                        /Switch>  <
                        Footer / >
                        <
                        /div>
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


            //takecarewhere yoou are using backquotes