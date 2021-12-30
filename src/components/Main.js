import React from 'react'
import Top from './Top'
import Bottom from './Bottom'

export default class Main extends React.Component{
	render(){
		return (
			<div id='main' className='border-radius01'>
				<Top />
				<Bottom />
			</div>
		)
	}
}
