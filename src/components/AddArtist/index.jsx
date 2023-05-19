import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

const AddArtist = () => {
	const navigate = useNavigate();
	return (
		<>
			<h1>Add</h1>
			<button onClick={() => navigate('/')} className="btn__welcome">
				Back
			</button>
		</>
	);
};

export default AddArtist;
