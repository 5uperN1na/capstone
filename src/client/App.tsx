import * as React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Affirmation from './views/Affirmation';

const App: React.FC<AppProps> = (props) => {
	return (

		<BrowserRouter>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>

				<Route exact path='/affirmation'>
					<Affirmation />
				</Route>





			</Switch>
		</BrowserRouter>

	);
}

interface AppProps {

}

export default App;