import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Welcome, Board, NavBar, Search, Add } from './components';
import './App.css';

export default function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Welcome />} />
				<Route path="/board" element={<NavBar />}>
					<Route index element={<Board />} />
					<Route path="search" element={<Search />} />
					<Route path="add" element={<Add />} />
				</Route>
			</Routes>
		</div>
	);
}
