import './App.css';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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

export default function ArtistCard() {
	const white = 'https://img.icons8.com/ios-filled/50/f5f5f1/like--v1.png';
	// const red = 'https://img.icons8.com/ios-filled/50/f5f5f1/like--v1.png';

	const renderCard = (card, index) => {
		return (
			<Card style={{ width: '18rem', border: '1px solid #f5f5f1' }} key={index}>
				<Card.Img style={{ width: '18rem' }} variant="top" src={card.image} />
				<Card.Body style={{ padding: '10px' }}>
					<Card.Title style={{ textAlign: 'center', fontSize: '1.8rem' }}>{card.name}</Card.Title>
					<Card.Text style={{ textAlign: 'left', fontSize: '1.2rem' }}>
						{card.firstSong}
						<img width="50" height="50" src={white} alt="like--v1" />
					</Card.Text>
					<Card.Text style={{ textAlign: 'left', fontSize: '1.2rem' }}>
						{card.secondSong}
						<img width="50" height="50" src="https://img.icons8.com/ios-filled/50/e50914/like--v1.png" alt="like--v1" />
					</Card.Text>
					<Card.Text style={{ textAlign: 'left', fontSize: '1.2rem' }}>
						{card.thirdSong}
						<img width="50" height="50" src="https://img.icons8.com/ios-filled/50/e50914/like--v1.png" alt="like--v1" />
					</Card.Text>
				</Card.Body>
			</Card>
		);
	};

	return <div className="cards-container">{artists.map(renderCard)}</div>;
}
