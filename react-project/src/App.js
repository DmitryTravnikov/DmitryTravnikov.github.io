import React from 'react';
import logo from './logo.svg';
import './App.css';
import Car from './Car/Car.js';

class App extends React.Component {

	state = {
		cars: [
			{name: 'Ford', year: '2018'},
			{name: 'Audi', year: '2016'},
			{name: 'Mazda', year: '2010'}
		],
		pageTitle: 'Hello Beyonce!'
	}

	changeTitleHandler = (newTitle) => {
		this.setState({
			pageTitle: newTitle
		});
	}

	render() {

		const divStyle = {
			'color': '#fff',
			'fontSize': '2rem'
		}

		const cars = this.state.cars;

		return (
			<div className="App" style={divStyle}>
				<output>{this.state.pageTitle}</output>

				<button onClick={this.changeTitleHandler.bind(this, 'Changed!')}>Change title</button>

				<Car name={cars[0].name} year={cars[0].year} onChangeTitle={this.changeTitleHandler.bind(this, cars[0].name)} />
				<Car name={cars[1].name} year={cars[1].year} onChangeTitle={() => this.changeTitleHandler(cars[1].name)}/>
				<Car name={cars[2].name} year={cars[2].year} onChangeTitle={() => this.changeTitleHandler(cars[2].name)} />
			</div>
		);

	}
}

export default App;