import React, {Component} from "react";

class Header extends Component {
    render() {
        let date = new Date;  
    return (
        <header>
            <h1>Calculator App</h1>
            <p>Today is {date.toDateString()} </p>
        </header>
    );
};
};
export default Header;


