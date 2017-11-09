import React from 'react';

const Square = ({ squareValue, color, width, borderRadius, fontColor, handleClick }) => {

	const styles = {
		divStyle: {
			width: width,
			height: '48px',
			border: '0.5px rgb(142, 142, 142) solid',
			float: 'left',
  			margin: '0',
 	 		padding: '0',
 	 		fontFamily: 'Helvetica',
 	 		fontSize: '1.1em',
 	 		textAlign: 'center',
 	 		lineHeight: '45px',
 	 		backgroundColor: color,
 	 		borderRadius: borderRadius,
 	 		color: fontColor
		},
		spanStyle: {
			display: 'inline-block',
			verticalAlign: 'middle',
			lineHeight: 'normal'
		}
	}

	const { divStyle, spanStyle } = styles;

	return (
		<div style={ divStyle } onClick={ handleClick.bind(this, squareValue) }>
			<span style={ spanStyle }>{ squareValue }</span>
		</div>
	);
};

export default Square;