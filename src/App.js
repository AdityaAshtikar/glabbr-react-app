import React, { Component } from 'react';
import './App.css';
import SubscriptionPlans from './components/SubscriptionPlans';

class App extends Component {
	render () {
		return (
			<div className="App">
				<SubscriptionPlans />
			</div>
		);
	}
}

export default App;