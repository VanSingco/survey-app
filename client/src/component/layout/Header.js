import { NavLink } from "react-router-dom";
import React, { Component } from 'react'
import SignInModal from './SignInModal';
import { connect } from "react-redux";
import Payment from '../payments'
class Header extends Component {

    renderContent = () => {
        switch (this.props.user) {
            case null:
                return 'Loading...';
            case false:
                return (
                    <ul className="navbar-nav mr-5">
                        <li className="nav-item">
                            <p onClick={() => this._modal.openSignInModal()} className="nav-link m-0">SignIn</p>
                        </li>
                    </ul>
                )
            default:
                return (
                    <ul className="navbar-nav mr-5">
                        <li className="nav-item d-flex align-items-center ml-2">
                           <Payment />
                        </li>
                        <li className="nav-item d-flex align-items-center ml-2">
                            <span className={this.props.user.credits > 0 ? 'nav-credits' : 'nav-no-credits'}>
                                Credits: <strong>{this.props.user.credits}</strong>
                            </span>
                        </li>
                        <li className="nav-item dropdown d-flex align-items-center ml-4">
                            <a className="d-flex align-items-center" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src={this.props.user.photo} alt={this.props.user.username} className="nav-profile-img" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                <NavLink to="/" exact activeClassName="active" className="dropdown-item">DashBoard</NavLink>
                                <NavLink to="/survey/new" exact activeClassName="active" className="dropdown-item">Add Survey</NavLink>
                                <a href="/api/logout" className="dropdown-item"> Logout</a>
                            </div>
                        </li>

                    </ul>
                )
        }
    }



    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                    <NavLink to="/" exact className="navbar-brand">Emaily</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse justify-content-end navbar-collapse" id="navbarNav">
                        {this.renderContent()}              
                    </div>
                </nav>
                <SignInModal ref={(modal) => { this._modal = modal }}/>
            </div>
        )
    }
}

const mapStateToProps = ({user}) => {
    return {user}
}

export default connect(mapStateToProps)(Header)



