import React from 'react'

export default class Top extends React.Component{
	draw_tip_amount_boxes(){
		return [5, 10, 15, 25, 50].map((el, i) => (
			<div className='tip-box'>
				<div className={'bg01 color06 border-radius02 flex-center font02' + ((i + 1) % 3 !== 0 ? ' margin03' : "")} key={i}>{el}%</div>
			</div>
		))
	}

	render(){
		return (
			<div id='top'>
				<div className='color02 font02'>Bill</div>
				<img id='bill-dollar-sign' src='/images/icon-dollar.svg' />
				<input className='border-radius02 margin01 margin02 bg05 font02 size01' type='text' placeholder='0' />
				<div className='color02 font02'>Select Tip %</div>
				<div className='margin01 margin02 flex'>
					{this.draw_tip_amount_boxes()}
				</div>
			</div>
		)
	}
}
