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