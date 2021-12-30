'use strict';
import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

class Root extends React.Component{
	render(){
		return (
			<div>
				<img src='/images/logo.svg' />
			</div>
		)
	}
}

ReactDOM.render(<Root />, document.querySelector('#root'));
