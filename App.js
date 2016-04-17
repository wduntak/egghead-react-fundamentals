import React from 'react';

class App extends React.Component {
	constructor() {
		super();
		this.state = {data: [
			{id:1, name: "Simon Baily"}, {id: 9, name: "Thomas Burleson"},
			{id:2, name: "Charles Xavier"}, {id: 10, name: "Billy Bob"},
			{id:3, name: "Logan McDonald"}, {id: 11, name: "Cho Gath"},
			{id:4, name: "Scott Summers"}, {id: 12, name: "Supper Time"},
			{id:5, name: "Jeanne Grey"}, {id: 13, name: "Willy Wonky"},
			{id:6, name: "Bishop Knight"}, {id: 14, name: "Sharon Rose"},
			{id:7, name: "Storm Goose"}, {id: 15, name: "Filip Doe"},
			{id:8, name: "Chocolate Thunder"}, {id: 16, name: "Ross Thompson"}
		]}
	}
	render() {
		let rows = this.state.data.map( person => {
			return <PersonRow key={person.id} data={person} />
		})
		return (
			<table>
				<tbody>{rows}</tbody>
			</table>
		)
	}
}

const PersonRow = (props) => {
	return (
		<tr >
			<td>{props.data.id}</td>
			<td>{props.data.name}</td>
		</tr>
	)
}

export default App	