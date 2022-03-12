import React, { Component } from "react";
import "./App.css";
import { v4 as uuidv4 } from 'uuid'

export class App extends Component {
	state = {
		todoArray: [
			{
				id: uuidv4(),
				todo: "Get haircut",
			},
			{
				id: uuidv4(),
				todo: "Wash dishes",
			},
			{
				id: uuidv4(),
				todo: "Buy groceries",
			},
		],
		newTodo: "",
	};
	handleInputChange = (event) => {
		console.log(this.state.newTodo);
		this.setState({
			newTodo: event.target.value,
		})
	}

	handleOnSubmit = (event) => {
		event.preventDefault();
		if(event.target.value === ' '){
			alert('Cannot submit an empty field')
		}
		let newArray = [
			...this.state.todoArray,
			{ id: uuidv4(), todo: this.state.newTodo },
		];
		this.setState({
			todoArray: newArray,
		});
	};

	showTodoArray = () => {
		return (
			<ul>
				{this.state.todoArray.map(({ todo, id }) => (
					<li key={id}>{todo}</li>
				))}
			</ul>
		)
	}

	
	render() {
		const { newTodo } = this.state;
		return (
			<div className="App">
				<form onSubmit={this.handleOnSubmit}>
					<label>Add todo:</label>
					<input
					name='newTodo'
					value={newTodo}
					onChange={this.handleInputChange}
					/>
					<button>Submit</button>
				</form>
				{this.showTodoArray()}
			</div>
		);
	}
}

export default App;