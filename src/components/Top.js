import React from 'react'
import {d, react_objs} from '../functions'

export default class Top extends React.Component{
	draw_tip_amount_boxes(){
		return [5, 10, 15, 25, 50].map((el, i) => (
			<div className='tip-box' key={i}>
				<div
					className={'tip-box-inner cursor bg01 color06 border-radius02 flex-center font02 margin03 padding01' + (this.props.tip_percent == el ? " active" : "")}
					onClick={() => this.set.tip_percent(el)}
				>{el}%</div>
			</div>
		))
	}

	set = {
		tip_percent: amount => {
			var custom = d.querySelector('#custom-tip-percent')
			
			if(amount){//using a tip box
				custom.value = '';
			}
			else{//using custom tip percent input
				amount = +custom.value
			}

			react_objs.main.setState({
				tip_percent: amount,
			})
		},
		bill_amount: () => {
			var bill = +d.querySelector("#bill-amount-input").value

			if(bill){
				react_objs.main.setState({
					bill_amount: bill
				})
			}
		},
	}

	num_people_keyup(){
		react_objs.main.setState({
			num_people: parseInt(d.querySelector("#number-of-people-input").value)
		});
	}

	render(){
		return (
			<div id='top'>
				<div className='color02 font02'>Bill</div>
				<img id='dollar-svg' src='/images/icon-dollar.svg' />
				<input
					id='bill-amount-input'
					className='color01 cursor border-radius02 margin01 margin02 bg05 font02 size01'
					type='number'
					placeholder='0'
					onKeyUp={() => this.set.bill_amount()}
				/>
				<div className='color02 font02'>Select Tip %</div>
				<div id='tip-amount-container' className='margin01 margin02 flex size01'>
					{this.draw_tip_amount_boxes()}
					<div className='tip-box'>
						<div className='flex-center'>
							<input
								id='custom-tip-percent'
								type='number'
								className='tip-box-inner cursor bg05 color01 border-radius02 margin03 padding01 font02 size01 custom-button'
								placeholder='Custom'
								onKeyUp={() => this.set.tip_percent()}
							/>
						</div>
					</div>
				</div>
				<div className={'relative' + (this.props.num_people === 0 ? ' num-people-is-zero' : '')}>
					<div className='cant-be-zero font02 color08 float-right'>Can&apos;t be zero</div>
					<div className='color02 font02'>Number of People</div>
					<img id='person-svg' src='/images/icon-person.svg' />
					<input
						id='number-of-people-input'
						className='color01 cursor border-radius02 margin01 margin02 bg05 font02 size01'
						type='number'
						placeholder='0'
						onKeyUp={() => this.num_people_keyup()}
					/>
				</div>
			</div>
		)
	}
}
