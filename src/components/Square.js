import React, { Component } from 'react';

class Square extends Component {

	constructor (props) {
		super(props);

		this.state = {
			clicked: false
		}

		this.setClicked = this.setClicked.bind(this);
		this.removeClicked = this.removeClicked.bind(this);
	}

	setClicked = () => {
		this.setState({clicked: true});
	}

	removeClicked = () => {
		this.setState({clicked: false});	
	}

	render () {

		const { squareValue, color, width, borderRadius, fontColor, handleClick } = this.props;

		const colorStyle = (this.state.clicked) ? 'rgb(178, 178, 178)' : color;

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
	 	 		backgroundColor: colorStyle,
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
			<div style={divStyle} onClick={ handleClick.bind(this, squareValue) } onMouseDown={this.setClicked} onMouseUp={this.removeClicked}>
				<span style={spanStyle}>{squareValue}</span>
			</div>
		);

	}
};

export default Square;