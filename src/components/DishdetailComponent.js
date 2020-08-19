import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Card, CardImg, CardBody, CardText, CardTitle, Container, Breadcrumb, BreadcrumbItem, Button, Row, Col, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { addComment } from '../redux/ActionCreators';
import { Loading } from './LoadingComponent'; //important bec if props.dishes was null nothing would have been displayed

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

function RenderComments({ comments, addComment, dishId }) {
    const dateFormat = { year: 'numeric', month: 'short', day: '2-digit' };
    if (comments != null) {

        return ( < React.Fragment > {
                comments.map((comment) => {
                    return ( < div className = "container" >
                        <
                        ul className = 'list-unstyled' >
                        <
                        li >
                        <
                        p > { comment.comment } < /p>  <
                        p > --{ comment.author }, { new Intl.DateTimeFormat('en-US', dateFormat).format(new Date(Date.parse(comment.date))) } < /p>  < /
                        li > <
                        /ul> 

                        <
                        /div> 

                    );



                })
            } < CommentForm dishId = { dishId }
            addComment = { addComment }
            /> < /
            React.Fragment > );
    } else {
        return ( < div > < /div>);
        }
    }

    const DishDetail = (props) => {
        console.log('DishDetail component  render is invoked');
        /*</div>
        else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row">            
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }*/

        if (props.isLoading) {
            return ( <
                div className = "container" >
                <
                div className = "row" >
                <
                Loading / >
                <
                /div>

                <
                /div>
            );
        } else if (props.errMess) {
            return ( <
                div className = "container" >
                <
                div className = "row" >
                <
                h4 > { props.errMess } < /h4> <
                /div>

                <
                /div>
            );
        } else if (props.dish != null) {
            return ( <
                div className = 'container' >
                <
                div className = "row" >
                <
                Breadcrumb >

                <
                BreadcrumbItem > < Link to = '/menu' > Menu < /Link></BreadcrumbItem >
                <
                BreadcrumbItem active > { props.dish.name } < /BreadcrumbItem>

                <
                /Breadcrumb> <
                div className = "col-12" >
                <
                h3 > { props.dish.name } < /h3> < /
                div > <
                /div> <
                div className = 'row' >

                <
                div className = 'col-12 col-md-5 m-1' >
                <
                RenderDish dish = { props.dish }
                />    < /
                div > <
                div className = 'col-12 col-md-5 m-1' >
                <
                h4 > Comments < /h4>  <
                RenderComments comments = { props.comments }
                addComment = { props.addComment }
                dishId = { props.dishId }
                / > 


                <
                / div > < /
                div > <
                /div >

            );
        } else {
            return ( <
                div > < /div>
            );
        }
    };

    export default DishDetail;
    const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !(val) || (val.length <= len);
    const minLength = (len) => (val) => val && (val.length >= len);

    class CommentForm extends Component {
        constructor(props) {
            super(props);
            this.state = {
                isNavOpen: false
            };
            this.handleSubmit = this.handleSubmit.bind(this);
            // this.toggleNav=this.toggleNav.bind(this);//why are we doing this??
        }


        toggleModal = () => {
            this.setState({
                isModalOpen: !this.state.isModalOpen
            });
        }
        handleSubmit(values) {
            /*console.log("Current state is:" + JSON.stringify(values));
            alert("Current state is:" + JSON.stringify(values));*/
            this.toggleModal();
            this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);


        }
        render() {
            return ( < React.Fragment >
                <
                div >
                <
                Button outline onClick = { this.toggleModal } > < span className = "fa fa-pencil fa-lg" > < /span> Submit Comment</Button >
                <
                /div> <
                Modal isOpen = { this.state.isModalOpen }
                toggle = { this.toggleModal } >
                <
                ModalHeader toggle = { this.toggleModal } > SubmitComment < /ModalHeader> <
                ModalBody >
                <
                LocalForm onSubmit = {
                    (values) => this.handleSubmit(values)
                } >
                <
                Row className = "form-group" >
                <
                Label htmlFor = "rating"
                md = { 12 } > Rating < /Label> <
                Col md = { 12 } >
                <
                Control.select defaultValue = "5"
                model = ".rating"
                id = "rating"
                name = "rating"

                className = "form-control" >
                <
                option value = "1" > 1 < /option> <
                option value = "2" > 2 < /option> <
                option value = "3" > 3 < /option> <
                option value = "4" > 4 < /option> <
                option value = "5" > 5 < /option>

                <
                /Control.select>

                <
                /Col> < /
                Row > <
                Row className = "form-group" >
                <
                Label htmlFor = "yourname"
                md = { 12 } > Your Name < /Label> <
                Col md = { 12 } >
                <
                Control.text model = ".yourname"
                id = "yourname"
                name = "yourname"
                placeholder = "Your Name"
                className = "form-control"
                validators = {
                    {
                        required,
                        minLength: minLength(3),
                        maxLength: maxLength(15)
                    }
                }

                /> <
                Errors className = "text-danger"
                model = ".yourname"
                show = "touched"
                messages = {
                    {
                        required: 'Required',
                        minLength: 'Must be greater than 2 characters',
                        maxLength: 'Must be 15 characters or less'
                    }
                }
                /> < /
                Col > <
                /Row>


                <
                Row className = "form-group" >
                <
                Label htmlFor = "comment"
                md = { 12 } > Comment < /Label> <
                Col md = { 12 } >
                <
                Control.textarea model = ".comment"
                id = "comment"
                name = "comment"
                placeholder = "Comment"
                className = "form-control"
                validators = {
                    {
                        required
                    }
                }
                /> <
                Errors className = "text-danger"
                model = ".comment"
                show = "touched"
                messages = {
                    {
                        required: 'Required'

                    }
                }
                /> < /
                Col > <
                /Row>

                <
                Row className = "form-group" >
                <
                Col md = {
                    { size: 10, offset: 2 }
                } >
                <
                Button type = "submit"
                color = "primary" > Submit < /Button> < /
                Col > <
                /Row>  < /
                LocalForm > <
                /ModalBody> < /
                Modal >

                <
                /React.Fragment>
            );
        }
    }