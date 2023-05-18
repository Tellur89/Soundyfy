import '../../App.css';
import Card from 'react-bootstrap/Card';
import LikeBtn from '../LikeBtn';

export default function ArtistCard(props) {
	return (
		<Card style={{ width: '18rem', border: '1px solid #f5f5f1' }}>
			<Card.Img style={{ width: '18rem' }} variant="top" src={props.image} />
			<Card.Body style={{ padding: '10px' }}>
				<Card.Title style={{ textAlign: 'center', fontSize: '1.8rem' }}>{props.name}</Card.Title>
				<div className="card-texta">
					<Card.Text style={{ textAlign: 'left', fontSize: '1.2rem' }}>{props.firstSong}</Card.Text>
					<LikeBtn />
				</div>
				<div className="card-texta">
					<Card.Text style={{ textAlign: 'left', fontSize: '1.2rem' }}>{props.secondSong}</Card.Text>
					<LikeBtn />
				</div>
				<div className="card-texta">
					<Card.Text style={{ textAlign: 'left', fontSize: '1.2rem' }}>{props.thirdSong}</Card.Text>
					<LikeBtn />
				</div>
			</Card.Body>
		</Card>
	);
}
