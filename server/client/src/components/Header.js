import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


const Header = (props) => {
    console.log(props);
    return (
        <nav>
            <div className="nav-wrapper">
                <Link 
                    to={props.auth ? '/surveys' : '/'} 
                    className="left brand-logo"
                >
                    Emaily
                </Link>
                <ul id="nav-mobile" className="right">
                    {renderContent(props.auth)}
                </ul>
            </div>
        </nav>

    );
}

const renderContent = (auth) => {
    switch(auth) {
        case null:
            return;
        case false:
            return (
                <li>
                    <a href="/auth/google">Login with Google</a>
                </li>
            );
        default:
            return (
                <li>
                    <a href="/api/logout">Logout</a>
                </li>
            );
    }
}

const mapStateToProps = ({auth}) => {
    return {auth};
};

export default connect(mapStateToProps)(Header);