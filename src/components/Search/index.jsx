import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

const Search = () => {
	const navigate = useNavigate();
	return (
		<div>
			<h1>Search</h1>
			<button onClick={() => navigate('/board')} className="btn__welcome">
				Back
			</button>
		</div>
	);
};

export default Search;
