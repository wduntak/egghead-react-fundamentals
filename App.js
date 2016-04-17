import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	render() {
		let text = this.props.text
		return (
			<div>
				<h1>Hello World! {text}</h1>
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