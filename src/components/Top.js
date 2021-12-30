import React from 'react'

export default class Top extends React.Component{
	render(){
		return (
			<div id='top'>
				<div className='color02 font02'>Bill</div>
				<input className='border-radius02 margin01 margin02 bg02 font02 size01' type='text' placeholder='0' />
				<div className='color01 font02'>Select Tip %</div>
				<div className='color01 font02'>Number of People</div>
			</div>
		)
	}
}
