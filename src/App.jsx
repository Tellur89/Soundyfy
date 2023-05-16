// import React from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';

import { Welcome, Board } from './components';

export default function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Welcome />} />
				<Route path="board" element={<Board />} />
			</Routes>
		</div>
	);
}
