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
			numberPad: []
		}

		this.drawCalc = this.drawCalc.bind(this);
	}

	drawCalc = (interfaceList) => {

		const numberPad = [];

		interfaceList.forEach( (interfaceObject, i) => {
			console.log(interfaceObject);
			numberPad.push(<Square key={i} squareValue={interfaceObject.value} color={interfaceObject.color} />)
		});

		this.setState({numberPad: numberPad});
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
				<div style={styles}>
					{this.state.numberPad}
				</div>
			</div>

		);
	}
}

export default Calculator;