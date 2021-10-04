import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import Payment from "./Payment";

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return 'Logging In'
            case false:
                return (
                    <li><a href="/auth/google">Login With Google</a></li>
                )
            default:
                return [
                        <li key="1"><Payment /></li>,
                        <li key="2" style={{ padding: '0 15px' }}>Credits: {this.props.auth.credits}</li>,
                        <li key="3"><a href="/api/logout">Logout</a></li>
                    ]
        }
    }

    render() {
        return (
            <nav style={{ backgroundColor: '#2196f3' }}>
                <div className="nav-wrapper">
                    <Link 
                        to={this.props.auth ? '/surveys' : '/'} 
                        className="left brand-logo"
                        style={{ padding: '0 15px'}}
                    >
                        Emvey</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Header);