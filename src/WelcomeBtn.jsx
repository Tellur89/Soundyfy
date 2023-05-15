import { Link } from 'react-router-dom';
import './App.css';
export default function WelcomeBtn() {
	return (
		<>
			<Link to="/board" type="button" className="btn__welcome">
				Get started
			</Link>
		</>
	);
}
