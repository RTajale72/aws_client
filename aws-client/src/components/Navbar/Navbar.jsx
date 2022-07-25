import { Component } from "react";
import './navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <a href="https://www.google.com">Home</a>
                <a href="https://www.google.com">Menu</a>
                <a href="https://www.google.com">Accesories</a>
                <a href="https://www.google.com">About</a>
                <a href="https://www.google.com">Contact</a>
            </div>
        )
    }
}

export default Navbar