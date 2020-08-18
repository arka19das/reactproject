import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, Container } from 'reactstrap';


class DishDetail extends Component {
    componentDidMount() {
        console.log('DishDetail component conmponentDidMount is invoked');
    }
    componentDidUpdate() {
        console.log('DishDetail component  componentDidUpdate is invoked');
    }
    renderDish(dish) {
        return ( <
            Card >
            <
            CardImg top src = { dish.image }
            alt = { dish.name }
            /> <
            CardBody >
            <
            CardTitle > { dish.name } < /CardTitle> <
            CardText > { dish.description } < /CardText> < /
            CardBody > <
            /Card>
        );
    }

    renderComments(comments) {
        const dateFormat = { year: 'numeric', month: 'short', day: '2-digit' };
        if (comments != null) {

            return (comments.map((comment) => {
                return ( < div className = "container" >
                    <
                    ul className = 'list-unstyled' >
                    <
                    li >
                    <
                    p > { comment.comment } < /p> <
                    p > --{ comment.author }, {
                        new Intl.DateTimeFormat('en-US', dateFormat).format(new Date(Date.parse(comment.date)))
                    } < /p> < /
                    li > <
                    /ul> < /
                    div > );


            }));
        } else {
            return ( < div > < /div>);
            }
        }

        render() {
            console.log('DishDetail component  render is invoked');
            if (this.props.dish != null) {
                return ( <
                    div className = 'container' >
                    <
                    div className = 'row' >

                    <
                    div className = 'col-12 col-md-5 m-1' > { this.renderDish(this.props.dish) } <
                    /div>

                    <
                    div className = 'col-12 col-md-5 m-1' >
                    <
                    h4 > Comments < /h4> { this.renderComments(this.props.dish.comments) } < /
                    div >

                    <
                    /div> < /
                    div >

                );
            } else {
                return ( <
                    div > < /div>
                );
            }
        }

    }

    export default DishDetail;