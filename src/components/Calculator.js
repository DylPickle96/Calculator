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
			firstValue: '',
			secondValue: '',
			firstValueSet: false
		}

		this.drawCalc = this.drawCalc.bind(this);
		this.handleClick = this.handleClick.bind(this);
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

		if (this.state.firstValueSet && !isNaN(parseInt(squareValue))) {
			secondValue = secondValue + squareValue.toString();
			this.setState({ secondValue: secondValue });
		}
		else if (!isNaN(parseInt(squareValue)) || squareValue === '.') {
			firstValue = firstValue + squareValue.toString();
			this.setState({ firstValue: firstValue });
		}
		else if (squareValue === "=") {
			console.log("they want the answer, man");
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
					this.setState({ secondValue: value })
				}
			}    // Flip the first value
			else {
				if (firstValue.slice(0, 1) === '-') {
					value = firstValue.replace('-', '');
				}
				else {
					value = `-${firstValue}`;
					this.setState({ firstValue: value });
				}
			}		
		}
		else {
			console.log(squareValue);
			this.setState({ firstValueSet: true });
		}

		setTimeout( () => {
			console.log(this.state.firstValue);
			console.log(this.state.secondValue);
		}, 20);

	}

	componentWillMount () {
		this.drawCalc(interfaceList);
	}

	render () {
		return (
			<div>
				<div>
					<Screen />
				</div>
				<div style={ styles }>
					{ this.state.numberPad }
				</div>
			</div>

		);
	}
}

export default Calculator;