import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ArtistCard from '../Card';
import '../WelcomeForm/style.css';
import '../../App.css';

const Search = (index) => {
	const navigate = useNavigate();
	const [songs, setSongs] = useState([]);
	const [inputValue, setInputValue] = useState();
	const [isLoaded, setIsLoaded] = useState(false);

	async function getSongs(data) {
		const options = {
			method: 'GET',
			url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
			params: { q: data },
			headers: {
				'X-RapidAPI-Key': '630d59d1e3mshb7f385a36b22a71p1d5858jsn03815d1e4f39',
				'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
			},
		};

		try {
			const response = await axios.request(options);
			const songs = response.data.data;
			console.log(songs);
			setSongs(songs);
			setIsLoaded(true);
		} catch (error) {
			console.error(error);
		}
	}

	const handleInput = (e) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		getSongs(inputValue);
	};

	return (
		<>
			<form className="form" onSubmit={handleSubmit}>
				<div className="form__group">
					<input type="text" id="name" className="form__input" placeholder=" " autoComplete="off" onChange={handleInput} />
					<label htmlFor="name" className="form__label">
						Search for artist
					</label>
				</div>
				<input type="submit" value="Search" className="btn__welcome" />
			</form>

			{!isLoaded && <p>loading...</p>}
			{isLoaded && (
				<ArtistCard
					key={index}
					name={songs[0].artist.name}
					image={songs[20].artist.picture}
					firstSong={songs[4].title}
					secondSong={songs[10].title}
					thirdSong={songs[15].title}
				/>
			)}

			<button onClick={() => navigate('/')} className="btn__welcome">
				Back
			</button>
		</>
	);
};

export default Search;
