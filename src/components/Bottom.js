import React from 'react'
import {react_objs, d} from '../functions'

export default class Bottom extends React.Component{
	get_main_state(){
		return react_objs.main.state;
	}

	is_filled_in(){
		var s = this.get_main_state();

		return s.num_people && s.tip_percent && s.bill_amount;
	}

	get_tip_amount(){
		var s = this.get_main_state();

		if(this.is_filled_in()){
			return (
				Math.trunc(
					(s.bill_amount * s.tip_percent) / s.num_people
				) / 100
			).toFixed(2)
		}

		return "0.00"
	}

	get_total(){
		var s = this.get_main_state();

		if(this.is_filled_in()){
			return (
				Math.round(
					(s.bill_amount * (1 + s.tip_percent / 100) * 100) / s.num_people
				) / 100
			).toFixed(2)
		}

		return "0.00"
	}

	reset_button(){
		d.querySelectorAll("input").forEach(el => {
			el.value = '';
		});

		react_objs.main.setState({
			num_people: null,
			tip_percent: null,
			bill_amount: null,
		});
	}

	render(){
		var s = this.get_main_state();

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
				<div
					className={'transition border-radius02 uppercase text-center font02 size01 button padding01 cursor' + (s.num_people || s.tip_percent || s.bill_amount ? " bg07 color01" : " bg02 color01")}
					onClick={() => this.reset_button()}
				>Reset</div>
			</div>
		)
	}
}
