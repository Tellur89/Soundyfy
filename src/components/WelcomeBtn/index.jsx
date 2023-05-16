import { Link } from 'react-router-dom';
import '../../App.css';
const WelcomeBtn = () => {
	return (
		<>
			<Link to="/board" type="button" className="btn__welcome">
				Get started
			</Link>
		</>
	);
};

export default WelcomeBtn;
