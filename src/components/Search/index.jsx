import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ArtistCard from '../Card';
import '../../App.css';
import './style.css';

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
		<div className="center">
			<form className="form" onSubmit={handleSubmit}>
				<div className="form__group">
					<input type="text" id="name" className="form__input" placeholder=" " autoComplete="off" onChange={handleInput} />
					<label htmlFor="name" className="form__label">
						Search for artist
					</label>
				</div>
				<input type="submit" value="Search" className="btn__welcome" />
			</form>

			{isLoaded && (
				<div className="card">
					<ArtistCard
						key={songs.index}
						name={songs[0].artist.name}
						image={songs[0].artist.picture}
						firstSong={songs[0].title_short}
						secondSong={songs[1].title_short}
						thirdSong={songs[2].title_short}
					/>

					<ArtistCard
						key={songs.index}
						name={songs[3].artist.name}
						image={songs[3].artist.picture}
						firstSong={songs[3].title_short}
						secondSong={songs[4].title_short}
						thirdSong={songs[5].title_short}
					/>

					<ArtistCard
						key={songs.index}
						name={songs[6].artist.name}
						image={songs[6].artist.picture}
						firstSong={songs[6].title_short}
						secondSong={songs[7].title_short}
						thirdSong={songs[8].title_short}
					/>
				</div>
			)}

			<button onClick={() => navigate('/')} className="btn__welcome">
				Back
			</button>
		</div>
	);
};

export default Search;
