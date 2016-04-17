import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	//Initializes the state
	constructor() {
		//Gives us the context for this within the component
		super();
		this.state = { 
			red: 0,
			green: 0,
			blue: 0
		}
		this.update = this.update.bind(this)
	}
	update(e) {
		this.setState({
			red: ReactDOM.findDOMNode(this.refs.red.refs.input).value,
			green: ReactDOM.findDOMNode(this.refs.green.refs.input).value,
			blue: ReactDOM.findDOMNode(this.refs.blue.refs.input).value
		})
	}
	render() {
		return (
			<div>
			{this.state.text}
			<hr />
				<Slider ref="red" update={this.update} />
					{this.state.red}
				<Slider ref="green" update={this.update} />
					{this.state.green}
				<Slider ref="blue" update={this.update} />
					{this.state.blue}
			</div>
		)
	}
}

class Slider extends React.Component {
	render() {
		return (
			<div>
				<input
					ref="input" 
					type="range"
					min="0"
					max="255"
					onChange={this.props.update} />
			</div>
		);
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