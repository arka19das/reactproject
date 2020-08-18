import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, Container } from 'reactstrap';


/*
componentDidMount() {
    console.log('DishDetail component conmponentDidMount is invoked');
}
componentDidUpdate() {
    console.log('DishDetail component  componentDidUpdate is invoked');
}*/

function RenderDish({ dish }) //since it will actually receive props instead  of dish we use {dish}
{
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

function RenderComments({ comments }) {
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

    const DishDetail = (props) => {
        console.log('DishDetail component  render is invoked');
        if (props.dish != null) {
            return ( <
                div className = 'container' >
                <
                div className = 'row' >

                <
                div className = 'col-12 col-md-5 m-1' > < RenderDish dish = { props.dish }
                />  < /div >


                <
                div className = 'col-12 col-md-5 m-1' >
                <
                h4 > Comments < /h4> < RenderComments comments= { props.dish.comments } / > < /
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
    };



    export default DishDetail;