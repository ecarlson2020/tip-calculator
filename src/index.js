'use strict';
import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

class Root extends React.Component{
	render(){
		return <div>getting started</div>
	}
}

ReactDOM.render(<Root />, document.querySelector('#root'));
