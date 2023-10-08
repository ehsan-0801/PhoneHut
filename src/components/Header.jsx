import React from 'react'
import { NavLink } from 'react-router-dom'
import CartBtn from './buttons/CartBtn'
import Login from './buttons/Login'
import Signup from './buttons/Signup'

const Header = () => {
    return (
        <>
            <nav style={ { background: "#b0c4b1" } } className="navbar navbar-expand-lg navbar-secondary shadow mb-4">
                <div className="container py-2">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link text-light " aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-light " to="/products">Product</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-light " to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-light " to="/contact">Contact</NavLink>
                            </li>


                        </ul>
                        <NavLink className="navbar-brand mx-auto fw-bold text-light" to="/">PHONE HUT</NavLink>
                        <Login />
                        <Signup />
                        <CartBtn />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
