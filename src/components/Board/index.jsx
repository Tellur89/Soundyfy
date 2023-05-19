import React, { useState } from 'react';
import ArtistCard from '../Card';
import '../../App.css';

const artists = [
	{
		name: 'Bob Marley',
		image: 'https://media.gq-magazine.co.uk/photos/5e3af120318f780008ca687b/1:1/w_1080,h_1080,c_limit/20191126-bob-marley-11.jpg',
		firstSong: 'Is This Love',
		secondSong: 'One Love',
		thirdSong: 'Get Up Stand Up',
	},
	{
		name: 'Prodigy',
		image: 'https://f4.bcbits.com/img/a1676446582_65',
		firstSong: 'Firestarter',
		secondSong: 'Breathe',
		thirdSong: 'Omen',
	},
	{
		name: 'Britney Spears',
		image:
			'https://media.gettyimages.com/id/111903818/photo/britney-spears-poses-during-a-portrait-session-on-october-2-1998-in-los-angeles-california.jpg?s=612x612&w=gi&k=20&c=gWwL9rolzw1Revv5nedga3HoYQB9hCbzKrVAQ55ZQhc=',
		firstSong: 'Baby One More Time',
		secondSong: 'Oops!... I Did It Again',
		thirdSong: 'Gimme More',
	},
];

export default function Board() {
	const [artistArray, setArtistArray] = useState(artists);

	return (
		<div className="cards-container">
			{artistArray.map((artist) => (
				<ArtistCard
					key={artist.name}
					name={artist.name}
					image={artist.image}
					firstSong={artist.firstSong}
					secondSong={artist.secondSong}
					thirdSong={artist.thirdSong}
				/>
			))}
		</div>
	);
}
