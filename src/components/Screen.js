import React from 'react';

const styles = {
	divStyle: {
		backgroundColor: 'rgb(153, 153, 153)',
		maxWidth: '228px',
		height: '75px',
		borderRadius: '5px 5px 0px 0px',
		opacity: '0.9'
	}
}

const Screen = ({ value }) => {

	const { divStyle } = styles;

	return (
		<div style={ divStyle }>
			{value}
		</div>
	);
}

export default Screen;