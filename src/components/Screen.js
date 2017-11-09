import React from 'react';

const styles = {
	divStyle: {
		backgroundColor: 'rgb(153, 153, 153)',
		maxWidth: '228px',
		height: '75px',
		borderRadius: '5px 5px 0px 0px',
		opacity: '0.9',
		lineHeight: '100px',
	},
	numberStyle: {
		color: 'white',
		fontFamily: 'Helvetica Neue',
		fontSize: '3em',
		textAlign: 'right',
		paddingRight: '15px',
	}
}

const Screen = ({ value }) => {
	
	const { divStyle, numberStyle } = styles;

	return (
		<div style={divStyle}>
			<div style={numberStyle}>
				{value}
			</div>
		</div>
	);
}

export default Screen;