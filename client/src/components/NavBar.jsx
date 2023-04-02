import React from "react";
import "./Navbar.css"

export default function NavBar(){

    return(
            <nav id="nav_bar">
                <div className="NavBarLinks">
                    <NavBarLink name="Home"></NavBarLink>
                    <NavBarLink name="About us"></NavBarLink>
                    <NavBarLink name="Projects"></NavBarLink>
                </div>
                <h1>Jonathan's World</h1>
            </nav>

    );
}

class NavBarLink extends React.Component{
    render(){
        return(
            <ul>
                <a href={this.props.href} className="NavLink">
                    {this.props.name}
                </a>
            </ul>
        )
    }
}