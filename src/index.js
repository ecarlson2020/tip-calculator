import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import Main from './components/Main'

class Root extends React.Component{
	render(){
		return (
			<div>
				<div className='text-center'>
					<img id='logo' src='/images/logo.svg' />
				</div>
				<Main />
			</div>
		)
	}
}

ReactDOM.render(<Root />, document.querySelector('#root'));
