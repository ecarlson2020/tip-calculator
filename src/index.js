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
				<img src='/design/active-states.jpg' />
				<img src='/design/desktop-design-completed.jpg' />
				<img src='/design/desktop-design-empty.jpg' />
				<img src='/design/mobile-design.jpg' />
			</div>
		)
	}
}

ReactDOM.render(<Root />, document.querySelector('#root'));
