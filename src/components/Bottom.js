import React from 'react'
import {react_objs} from '../functions'

export default class Bottom extends React.Component{
	get_tip_amount(){
		var s = react_objs.main.state

		if(s.num_people && s.tip_percent && s.bill_amount){
			return (
				Math.trunc(
					(s.bill_amount * s.tip_percent) / s.num_people
				) / 100
			).toFixed(2)
		}

		return "0.00"
	}

	get_total(){
		var s = react_objs.main.state

		console.log(s.num_people , s.tip_percent , s.bill_amount);
		if(s.num_people && s.tip_percent && s.bill_amount){
			return (
				Math.round(
					(s.bill_amount * (1 + s.tip_percent / 100) * 100) / s.num_people
				) / 100
			).toFixed(2)
		}

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
