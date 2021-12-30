import React from 'react'

export default class Top extends React.Component{
	draw_tip_amount_boxes(){
		return [5, 10, 15, 25, 50].map((el, i) => (
			<div className='tip-box' key={i}>
				<div className='bg01 color06 border-radius02 flex-center font02 margin03 padding01'>{el}%</div>
			</div>
		))
	}

	render(){
		return (
			<div id='top'>
				<div className='color02 font02'>Bill</div>
				<img id='dollar-svg' src='/images/icon-dollar.svg' />
				<input className='border-radius02 margin01 margin02 bg05 font02 size01' type='text' placeholder='0' />
				<div className='color02 font02'>Select Tip %</div>
				<div id='tip-amount-container' className='margin01 margin02 flex size01'>
					{this.draw_tip_amount_boxes()}
				</div>
				<div className='color02 font02'>Number of People</div>
				<div className='relative'>
					<img id='person-svg' src='/images/icon-person.svg' />
					<input className='border-radius02 margin01 margin02 bg05 font02 size01' type='text' placeholder='0' />
				</div>
			</div>
		)
	}
}
