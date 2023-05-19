import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts';
import '../../App.css';
import './style.css';

const WelcomeForm = () => {
	const [inputValue, setInputValue] = useState();
	const navigate = useNavigate();
	const { setUser } = useAuth();

	const handleInput = (e) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault;
		setUser(inputValue);
		navigate('/');
	};
	return (
		<>
			<form className="form" onSubmit={handleSubmit}>
				<div className="form__group">
					<input type="text" id="name" className="form__input" placeholder=" " autoComplete="off" onChange={handleInput} />
					<label htmlFor="name" className="form__label">
						Your Name
					</label>
				</div>
				<input type="submit" value="Get started" className="btn__welcome" />
			</form>
		</>
	);
};

export default WelcomeForm;
