import React from 'react';
import logo from './logo.svg';
import './App.css';

import { createInstance, OptimizelyFeature, OptimizelyProvider, withOptimizely } from '@optimizely/react-sdk';

const optimizely = createInstance({
	sdkKey: process.env.REACT_APP_OPTIMIZELY_DEV_KEY,
});

let userId;

const randomValue = Math.random();
if (randomValue <= 0.333) {
  userId = 'user1';
} else if (randomValue <= 0.666) {
  userId = 'user2';
} else {
  userId = 'user3';
}

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					<OptimizelyProvider
						optimizely={optimizely}
						user={{
							id: userId,
						}}
					>
						<OptimizelyFeature feature="discount">
							{(enabled, variables) => {
                console.log('userId :', userId);
                console.log('variables :', variables);
                return (enabled ? `Discount ${variables.total_discont}%` : 'Regular Value')
              }}
						</OptimizelyFeature>
					</OptimizelyProvider>
				</p>
			</header>
		</div>
	);
}

export default App;
