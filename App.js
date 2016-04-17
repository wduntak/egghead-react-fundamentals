import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	//Initializes the state
	constructor() {
		//Gives us the context for this within the component
		super();
		this.state = { 
			text: 'This is the state text',
			category: 0
		}
	}
	update(e) {
		this.setState({text: e.target.value})
	}
	render() {
		let text = this.props.text
		return (
			<div>
				<b>Hello World! {text}</b><br />
				<input 
					type="text"
					onChange={this.update.bind(this)} /> 
				<p>{this.state.text}</p>
			</div>
		)
	}
}

App.propTypes = {
	text: React.PropTypes.string,
	category: React.PropTypes.number.isRequired
}

App.defaultProps = {
	text: 'This is the default property',
	category: 0
}

ReactDOM.render(
	<App category={5} />,
	document.getElementById('app')
);

// Stateless Function Component
// The difference is that the above class component can have state, where as
// the stateless function component will not have state.

// const App = () => <h1>Hello World!</h1>