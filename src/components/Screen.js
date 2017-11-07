import React from 'react';

const styles = {
	divStyle: {
		backgroundColor: 'rgb(153, 153, 153)',
		maxWidth: '228px',
		height: '75px',
		borderRadius: '5px 5px 0px 0px',
	}
}

const Screen = () => {

	const { divStyle, textStyle } = styles;

	return (
		<div style={divStyle}>
		</div>
	);
}

export default Screen;