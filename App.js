import React from 'react';
import ReactDOM from 'react-dom';


let Mixin = InnerComponent => class extends React.Component {
	constructor() {
		super();
		this.update = this.update.bind(this);
		this.state = { val: 0 }
	}
	update() {
		this.setState({val: this.state.val + 1})
	}
	componentWillMount() {
		console.log("Will Mount")
	}
	render() {
		return <InnerComponent
			update={this.update}
			{...this.state}
			{...this.props} />
	}
	componentDidMount() {
		console.log("Mounted")
	}	
}

const Button = (props) => <button onClick={props.update}> 
															{props.text} - {props.val} 
													</button>

const Label = (props) => <button onMouseMove={props.update}> 
															{props.text} - {props.val} 
													</button>

let ButtonMixed = Mixin(Button)
let LabelMixed = Mixin(Label)

class App extends React.Component {
	render() {
		return (
			<div>
				<LabelMixed text = "Label" />
				<ButtonMixed text = "Button" />
			</div>
		)
	}
}

export default App	