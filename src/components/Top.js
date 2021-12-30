import React from 'react'

export default class Top extends React.Component{
	state = {
		num_people: null,
	}

	draw_tip_amount_boxes(){
		return [5, 10, 15, 25, 50].map((el, i) => (
			<div className='tip-box' key={i}>
				<div className='bg01 color06 border-radius02 flex-center font02 margin03 padding01'>{el}%</div>
			</div>
		))
	}

	num_people_keyup(){
		this.setState({
			num_people: parseInt(document.querySelector("#number-of-people-input").value)
		});
	}

	render(){
		console.log('hey2');
		return (
			<div id='top'>
				<div className='color02 font02'>Bill</div>
				<img id='dollar-svg' src='/images/icon-dollar.svg' />
				<input className='color01 cursor border-radius02 margin01 margin02 bg05 font02 size01' type='number' placeholder='0' />
				<div className='color02 font02'>Select Tip %</div>
				<div id='tip-amount-container' className='margin01 margin02 flex size01'>
					{this.draw_tip_amount_boxes()}
					<div className='tip-box'>
						<div className='flex-center'>
							<input type='number' className='cursor bg05 color01 border-radius02 margin03 padding01 font02 size01 custom-button' placeholder='Custom' />
						</div>
					</div>
				</div>
				<div className={'relative' + (this.state.num_people === 0 ? ' num-people-is-zero' : '')}>
					<div className='cant-be-zero font02 color08 float-right'>Can&apos;t be zero</div>
					<div className='color02 font02'>Number of People</div>
					<img id='person-svg' src='/images/icon-person.svg' />
					<input id='number-of-people-input' className='color01 cursor border-radius02 margin01 margin02 bg05 font02 size01' type='number' placeholder='0' onKeyUp={() => this.num_people_keyup()} />
				</div>
			</div>
		)
	}
}
