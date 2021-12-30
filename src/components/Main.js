import React from 'react'
import Top from './Top'
import Bottom from './Bottom'
import {react_objs} from '../functions'

export default class Main extends React.Component{
	constructor(props){
		super(props)

		this.state = {
			num_people: null,
			tip_percent: null,
			bill_amount: null,
		}

		react_objs.main = this;
	}

	render(){
		return (
			<div id='main' className='border-radius01 flex'>
				<Top num_people={this.state.num_people} tip_percent={this.state.tip_percent} />
				<Bottom num_people={this.state.num_people} tip_percent={this.state.tip_percent} bill_amount={this.state.bill_amount} />
			</div>
		)
	}
}
