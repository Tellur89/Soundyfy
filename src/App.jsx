import React from 'react';
import { Routes, Route } from 'react-router-dom';
import * as C from './components';
import { AuthProvider } from './contexts';
import ProtectedRoute from './routes';
import './App.css';

export default function App() {
	return (
		<div className="App">
			<AuthProvider>
				<Routes>
					{/* <Route path="/" element={<ProtectedRoute redirectTo="/welcome" />}> */}
					<Route path="/" element={<C.NavBar />}>
						<Route index element={<C.Board />} />
						<Route path="/search" element={<C.Search />} />
						<Route path="/add" element={<C.AddArtist />} />
					</Route>
					{/* </Route> */}
					<Route path="/welcome" element={<C.Welcome />} />
				</Routes>
			</AuthProvider>
		</div>
	);
}
