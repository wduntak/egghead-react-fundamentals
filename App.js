import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
	constructor() {
		super();
		this.state = { val: 0 };
		this.update = this.update.bind(this);
	}
	update() {
		this.setState({ val: this.state.val + 1 })
	}
	componentWillMount() {
		console.log("Mounting!")
	}
	render() {
		console.log("Rendering!")
		return <button onClick={this.update}>{this.state.val}</button>
	}
	componentDidMount() {
		console.log("Mounted!")
	}
	componentWillUnmount() {
		console.log("Unmount!")
	}
}

class Wrapper extends React.Component {
	constructor() {
		super();
		this.mount = this.mount.bind(this);
		this.unmount = this.unmount.bind(this);
	}
	mount() {
		ReactDOM.render(<App />, document.getElementById('a'))
	}
	unmount() {
		ReactDOM.unmountComponentAtNode(document.getElementById('a'))
	}
	render() {
		return (
			<div>
				<button onClick={this.mount}>Mount</button>
				<button onClick={this.unmount}>Unmount</button>
				<div id="a"></div>
			</div>
		)
	}
}

export default Wrapper