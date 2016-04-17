import React from 'react';

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello World!</h1>
				<b>Bold</b>
			</div>
		)
	}
}

// Stateless Function Component
// The difference is that the above class component can have state, where as
// the stateless function component will not have state.

// const App = () => <h1>Hello World!</h1>

export default App;