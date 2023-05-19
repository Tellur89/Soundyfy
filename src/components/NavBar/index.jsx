import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts';

import './style.css';

const NavBar = () => {
	const { user } = useAuth();
	const activeStyle = {
		color: 'black',
	};

	const nav = ({ isActive }) => (isActive ? activeStyle : undefined);

	return (
		<>
			<nav className="nav-container">
				<img src="../../../public/logo.png" alt="Logo" />
				<h1>Hi, {user}</h1>
				<ul className="nav-links">
					<li>
						<NavLink style={nav} to="/">
							Home
						</NavLink>
					</li>

					<li>
						<NavLink style={nav} to="/search">
							Search
						</NavLink>
					</li>
					<li>
						<NavLink style={nav} to="/add">
							Add Artist
						</NavLink>
					</li>
				</ul>
			</nav>
			<Outlet />
		</>
	);
};

export default NavBar;
