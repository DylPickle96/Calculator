import React, { Component } from 'react';
import Square from './Square';
import Screen from './Screen';
import interfaceList from '../util/interface';

const styles = {
	maxWidth: '228px' 
}

class Calculator extends Component {

	constructor (props) {
		super(props);

		this.state = {
			numberPad: [],
			screen: [],
			firstValueSet: false,
			firstValue: '',
			secondValue: '',
			operation: ''
		}

		this.drawCalc = this.drawCalc.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.calculateAnswer = this.calculateAnswer.bind(this);
	}

	drawScreen = (value) => {

		const screen = [];
		const key = 0;

		screen.push(<Screen key={key} value={ value } />);

		this.setState({ screen: screen });
	}

	drawCalc = (interfaceList) => {

		const numberPad = [];

		interfaceList.forEach( (interfaceObject, i) => {

			numberPad.push(<Square 
															key={ i } 
															squareValue={ interfaceObject.value } 
															color={ interfaceObject.color } 
															width={ interfaceObject.width } 
															borderRadius={ interfaceObject.borderRadius }
															fontColor={ interfaceObject.fontColor }
															handleClick={this.handleClick}
										/>)
		});

		this.setState({ numberPad: numberPad });
	}

	handleClick = (squareValue) => {

		let firstValue = this.state.firstValue;
		let secondValue = this.state.secondValue;

		if (this.state.firstValueSet && !isNaN(parseInt(squareValue, 10))) {
			secondValue = secondValue + squareValue.toString();
			this.setState({ secondValue: secondValue }, () => {
				this.drawScreen(this.state.secondValue);
			});	
		}
		else if (!isNaN(parseInt(squareValue, 10)) || squareValue === '.') {
			firstValue = firstValue + squareValue.toString();
			this.setState({ firstValue: firstValue }, () => {
				this.drawScreen(this.state.firstValue);
			});
		}
		else if (squareValue === "=") {
			const answer = this.calculateAnswer(
																				 		this.state.firstValue,
																						this.state.secondValue,
																						this.state.operation
																					);

			this.drawScreen(answer);
		}
		else if (squareValue === "+/-") {

			let firstValue = this.state.firstValue;
			let secondValue = this.state.secondValue;
			let value;

			// append a negative sign to the current value 
			// Flip the second value
			if (this.state.firstValueSet) {
				if (secondValue.slice(0, 1) === '-') {
					value = secondValue.replace('-', '');
				}
				else {
					value = `-${secondValue}`;
					this.setState({ secondValue: value }, () => {
						this.drawScreen(this.state.secondValue);
					});
				}
			}    // Flip the first value
			else {
				if (firstValue.slice(0, 1) === '-') {
					value = firstValue.replace('-', '');
				}
				else {
					value = `-${firstValue}`;
					this.setState({ firstValue: value }, () => {
						this.drawScreen(this.state.firstValue);
					});
				}
			}		
		}
		else {
			this.setState({ firstValueSet: true, operation: squareValue });
		}

	}

	calculateAnswer = (fV,  sV, operation)=> {

		const firstValue = parseInt(fV, 10);
		const secondValue = parseInt(sV, 10);

		if (operation === '+') {
			return firstValue + secondValue;
		}
		else if (operation === '-') {
			return firstValue - secondValue;
		}
		else if (operation === 'X') {
			return firstValue * secondValue;
		}
		else if (operation === '/') {
			return firstValue / secondValue;
		}
	}

	componentWillMount () {
		this.drawCalc(interfaceList);
		this.drawScreen(0);
	}

	render () {
		return (
			<div>
				<div>
					{ this.state.screen }
				</div>
				<div style={ styles }>
					{ this.state.numberPad }
				</div>
			</div>

		);
	}
}

export default Calculator;