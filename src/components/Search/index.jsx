import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ArtistCard from '../Card';
import '../../App.css';

const Search = (index) => {
	const navigate = useNavigate();
	const [songs, setSongs] = useState([]);
	const [artists, setArtists] = useState('');

	useEffect(() => {
		getSongs();
	}, []);

	async function getSongs() {
		const options = {
			method: 'GET',
			url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
			params: { q: 'prodigy' },
			headers: {
				'X-RapidAPI-Key': '630d59d1e3mshb7f385a36b22a71p1d5858jsn03815d1e4f39',
				'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
			},
		};

		try {
			const response = await axios.request(options);
			const songs = response.data.data;
			const artists = response.data;

			console.log(songs);
			console.log(artists);
			setSongs(songs);
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<>
			<ArtistCard
				key={index}
				name={songs[0].artist.name}
				image={songs[20].artist.picture}
				firstSong={songs[0].title}
				secondSong={songs[1].title}
				thirdSong={songs[2].title}
			/>
			<button onClick={() => navigate('/')} className="btn__welcome">
				Back
			</button>
		</>
	);
};

export default Search;
