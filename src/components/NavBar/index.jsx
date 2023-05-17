import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import './style.css';

const NavBar = () => {
	const activeStyle = {
		color: 'black',
	};

	const nav = ({ isActive }) => (isActive ? activeStyle : undefined);

	return (
		<>
			<nav className="nav-container">
				<img src="../../../public/icon.png" alt="" />
				<ul className="nav-links">
					<li>
						<NavLink style={nav} to="/board">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink style={nav} to="/board/search">
							Search
						</NavLink>
					</li>
					<li>
						<NavLink style={nav} to="/board/add">
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
