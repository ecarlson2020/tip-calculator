import React from 'react'
import ReactDOM from 'react-dom'
import Main from './components/Main'
import './style.css'
import './responsive.css'

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
