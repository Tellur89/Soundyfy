import React, { useState } from 'react';
import Heart from 'react-heart';

function LikeBtn() {
	const [active, setActive] = useState(false);
	return (
		<div style={{ width: '2rem', height: '2rem' }}>
			<Heart style={{ stroke: 'white' }} className="like" isActive={active} onClick={() => setActive(!active)} />
		</div>
	);
}

export default LikeBtn;
