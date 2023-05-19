import { WelcomeForm } from '..';
import './style.css';

const Welcome = () => {
	return (
		<div className="welcome">
			<h1>
				<span className="title__span--red">W</span>elcome <span className="title__span--red">t</span>o <span className="title__span--red">S</span>oundify
			</h1>
			<WelcomeForm />
		</div>
	);
};

export default Welcome;
