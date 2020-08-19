import React, { Component } from 'react';
import Home from './HomeComponent.js';


import Menu from './MenuComponent';
import Contact from './ContactComponent';

import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import About from './AboutComponent';
import { connect } from 'react-redux';
import { addComment } from '../redux/ActionCreators';
const mapstateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        leaders: state.leaders,
        promotions: state.promotions
    }
}
const mapDispatchToProps = (dispatch) => {
    addComment: (dishId, rating, author, comment) => dispatch(addComment((dishId, rating, author, comment)))
}
class Main extends Component {
    constructor(props) {
        super(props);




    }

    //  onDishSelect(dishId) {  this.setState({ selectedDish: dishId });}

    render() {
            console.log("main render component invoked");
            const HomePage = () => {
                    return ( < Home dish = { this.props.dishes.filter((dish) => dish.featured)[0] }
                        promotion = { this.props.promotions.filter((promotion) => promotion.featured)[0] }
                        leader = { this.props.leaders.filter((leader) => leader.featured)[0] }
                        />);
                    }

                    const DishWithId = ({ match }) => {
                        return ( <
                            DishDetail dish = { this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0] }
                            comments = { this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10)) }
                            addComment = { this.props.addComment }

                            />

                        );
                    }
                    const Aboutpage = () => {
                        return ( < About leaders = { this.props.leaders }
                            />);
                        }
                        return ( < div >

                            <
                            Header / >

                            <
                            Switch >
                            <
                            Route path = '/home'
                            component = { HomePage }
                            /> <
                            Route path = "/contactus"
                            component = { Contact }
                            /> <
                            Route path = "/aboutus"
                            component = { Aboutpage }
                            />

                            <
                            Route exact path = '/menu'
                            component = {
                                () => < Menu dishes = { this.props.dishes }
                                />} / >
                                <
                                Route path = '/menu/:dishId'
                                component = { DishWithId }
                                /> <
                                Redirect to = "/home" / >
                                <
                                /Switch> <
                                Footer / >
                                <
                                /div>
                            );
                        }
                    }

                    export default withRouter(connect(mapstateToProps, mapDispatchToProps)(Main));
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