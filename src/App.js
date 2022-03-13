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
		errorMessage: "",
	};

	handleInputChange = (event) => {
		console.log(this.state.newTodo);
		this.setState({
			newTodo: event.target.value,
		})
	}

	handleOnSubmit = (event) => {
		event.preventDefault();

		let newArray = [
			...this.state.todoArray,
			{ id: uuidv4(), todo: this.state.newTodo },
		];

		this.state.newTodo === '' ? this.setState.errorMessage(alert('Cannot be an empty field')) :
		(this.state.todoArray.some(title => title.todo === this.state.newTodo)) ? this.setState.errorMessage(alert('No duplicate!')) :
		this.setState({ todoArray: newArray, newTodo: '', })
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
		const { newTodo, errorMessage } = this.state;
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