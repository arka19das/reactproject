import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, ModalBody, ModalFooter, ModalHeader, Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';
import { NavLink } from 'react-router-dom';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        };
        // this.toggleNav=this.toggleNav.bind(this);//why are we doing this??
    }
    toggleNav = () => {
        this.setState({
            isModalOpen: false,
            isNavOpen: !this.state.isNavOpen
        });
    }
    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleLogin = (event) => {
            this.toggleModal();
            alert("Username: " + this.username.value + " Password: " + this.password.value +
                " Remember: " + this.remember.checked);
            event.preventDefault();

        }
        //we need to mainatin some ui so we are using class component instead of using functions
    render() {
        return ( < React.Fragment >
            <
            Navbar dark expand = 'md' >
            <
            div className = 'container' >
            <
            NavbarToggler onClick = { this.toggleNav }
            /> <
            NavbarBrand className = 'mr-auto'
            href = '/' >
            <
            img src = 'assets/images/logo.png'
            alt = 'Ristorante Con Fusion'
            height = '30'
            width = '41' / >
            <
            /NavbarBrand>   <
            Collapse isOpen = { this.state.isNavOpen }
            navbar >
            <
            Nav navbar >
            <
            NavItem >
            <
            NavLink className = 'nav-link'
            to = '/home' > < span class = "fa fa-home fa-lg" > < /span> Home </NavLink >
            <
            /NavItem> <
            NavItem >
            <
            NavLink className = 'nav-link'
            to = '/aboutus' > < span class = "fa fa-info fa-lg" > < /span> About Us </NavLink >
            <
            /NavItem> <
            NavItem >
            <
            NavLink className = 'nav-link'
            to = '/menu' > < span class = "fa fa-list fa-lg" > < /span> Menu</NavLink >
            <
            /NavItem> <
            NavItem >
            <
            NavLink className = 'nav-link'
            to = '/contactus' > < span class = "fa fa-addrss-card fa-lg" > < /span> Conatct Us </NavLink >
            <
            /NavItem>


            <
            /Nav>

            <
            Nav className = "ml-auto"
            navbar >
            <
            NavItem >
            <
            Button outline onClick = { this.toggleModal } > < span className = "fa fa-sign-in fa-lg" > < /span> Login</Button >
            <
            /NavItem> <
            /Nav> <
            /Collapse> <
            /div> <
            /Navbar>  <
            Modal isOpen = { this.state.isModalOpen }
            toggle = { this.toggleModal } >
            <
            ModalHeader toggle = { this.toggleModal } > Login < /ModalHeader> <
            ModalBody >
            <
            Form onSubmit = { this.handleLogin } >
            <
            FormGroup >
            <
            Label htmlFor = "username" > Username < /Label> <
            Input type = "text"
            id = "username"
            name = "username"
            innerRef = {
                (input) => this.username = input }
            /> <
            /FormGroup> <
            FormGroup >
            <
            Label htmlFor = "password" > Password < /Label> <
            Input type = "password"
            id = "password"
            name = "password"
            innerRef = {
                (input) => this.password = input }
            /> <
            /FormGroup> <
            FormGroup check >
            <
            Label check >
            <
            Input type = "checkbox"
            name = "remember"
            innerRef = {
                (input) => this.remember = input }
            />
            Remember me <
            /Label> <
            /FormGroup> <
            Button type = "submit"
            value = "submit"
            color = "primary" > Login < /Button> <
            /Form>

            <
            /ModalBody> <
            /Modal>     <
            Jumbotron >



            <
            div className = "container" >
            <
            div className = "row row-header" >
            <
            div className = "col-12 col-sm-6" >
            <
            h1 > Ristiorante Con Fusion < /h1>  <
            p > We take inspiration from the World 's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>  <
            /div > <
            /div> <
            /div >  <
            /Jumbotron> <
            /React.Fragment >
        );
    }

}
export default Header;