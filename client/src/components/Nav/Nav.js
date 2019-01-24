import React, { Component } from 'react';
import userAPI from '../../utils/user';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button
} from 'reactstrap';
import SignUp from '../SignUpModal/SignUpModal';
import SignIn from '../SignInModal/SignInModal';
import './Nav.css';

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            username: "",
            password: "",
            email: "",
            firstname: "",
            lastname: "",
            signUpModal: false,
            signInModal: false,
            signedUp: false
        };
    }
    toggleSignInModal = () => {
        this.setState({
            signInModal: !this.state.signInModal,
            username: "",
            password: "",
        });
    }
    toggleSignUpModal = () => {
        this.setState({
            signUpModal: !this.state.signUpModal,
            username: "",
            password: "",
            email: "",
            firstname: "",
            lastname: "",
            signedUp: false
        });
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    signIn = () => {
        const { username, password } = this.state;
        userAPI.loginUser({ username, password }).then(({ data }) => {
            this.props.signInUser(data);
            this.toggleSignInModal();
        })
    }
    signOut = () => {
        this.props.signOutUser();
    }
    signUp = () => {
        const { username, email, password, firstname, lastname } = this.state;
        userAPI.createUser({ username, email, password, firstname, lastname }).then((res) => {
            this.setState({ signedUp: true });
            setTimeout(() => {
                this.toggleSignUpModal();
                this.toggleSignInModal();
            }, 2000)
        });
    }
    inputHandler = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    render() {
        return (
            <div>
                <Navbar className="container navbor" color="light" light expand="md">
                    <NavbarBrand className="logo" href="/landing">VenMO</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                {this.props.signedIn ?
                                    <div className="user-info">
                                        <p>{this.props.user.username}</p>
                                        <Button onClick={this.signOut}>SignOut</Button>
                                    </div>
                                    :
                                    <div>
                                        <Button className="buttonlanding" onClick={this.toggleSignInModal}>SignIn</Button>
                                        <Button className="buttonlanding" onClick={this.toggleSignUpModal}>SignUp</Button>
                                    </div> 
                                }
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <SignUp
                    modal={this.state.signUpModal}
                    modalTitle={"Enter in information to sign up"}
                    toggleModal={this.toggleSignUpModal}
                    username={this.state.username}
                    email={this.state.email}
                    firstname={this.state.firstname}
                    lastname={this.state.lastname}
                    password={this.state.password}
                    inputHandler={this.inputHandler}
                    signUp={this.signUp}
                    signedUp={this.state.signedUp}
                />
                <SignIn
                    modalTitle={"Enter in information to sign in"}
                    modal={this.state.signInModal}
                    toggleModal={this.toggleSignInModal}
                    username={this.state.username}
                    email={this.state.email}
                    password={this.state.password}
                    inputHandler={this.inputHandler}
                    signIn={this.signIn}
                />
            </div>
        );
    }
}

export default NavBar;