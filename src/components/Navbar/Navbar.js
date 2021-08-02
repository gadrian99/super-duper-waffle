import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
				<nav className="navbar">
					<ul className="navbar-list">
						<li>
							<Link className="navbar-list-link" to="/">Main</Link>
						</li>
						<li>
							<Link className="navbar-list-link" to="/about">About</Link>
						</li>
						<li>
							<Link className="navbar-list-link" to="/topics">Topics</Link>
						</li>
					</ul>
				</nav>
    )
}

export default Navbar