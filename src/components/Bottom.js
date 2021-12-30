import React from 'react'
import {react_objs} from '../functions'

export default class Bottom extends React.Component{
	get_tip_amount(){
		return "0.05"
	}

	get_total(){
		return "0.00"
	}

	render(){
		return (
			<div id='bottom' className='bg01 color06 border-radius03 relative'>
				<div className='padding02'>
					<div className='margin05'>
						<div className='relative'>
							<div className='font02'>Tip Amount</div>
							<div className='color03 size02 font02'>/ person</div>
							<div className='color07 size03 font02 big-dollar'>${this.get_tip_amount()}</div>
						</div>
					</div>
					<div className='margin05'>
						<div className='relative'>
							<div className='font02'>Total</div>
							<div className='color03 size02 font02'>/ person</div>
							<div className='color07 size03 font02 big-dollar'>${this.get_total()}</div>
						</div>
					</div>
				</div>
				<div className='border-radius02 uppercase text-center font02 size01 bg02 button color01 padding01 cursor'>Reset</div>
			</div>
		)
	}
}
