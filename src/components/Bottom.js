import React from 'react'

export default class Bottom extends React.Component{
	render(){
		return (
			<div id='bottom' className='bg01 color06 border-radius03 relative'>
				<div className='padding02'>
					<div className='margin05'>
						<div className='relative'>
							<div className='font02'>Tip Amount</div>
							<div className='color03 size02 font02'>/ person</div>
							<div className='color07 size03 font02 big-dollar'>$0.00</div>
						</div>
					</div>
					<div className='margin05'>
						<div className='relative'>
							<div className='font02'>Total</div>
							<div className='color03 size02 font02'>/ person</div>
							<div className='color07 size03 font02 big-dollar'>$0.00</div>
						</div>
					</div>
				</div>
				<div className='border-radius02 uppercase text-center font02 size01 bg02 button color01 padding01'>Reset</div>
			</div>
		)
	}
}
