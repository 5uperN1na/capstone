import * as React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Affirmation from './views/Affirmation';
import Meditation from './views/Meditation';
// import Blogs from './views/Blogs';
import Login from './views/Login';
import Register from './views/Register';

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

				<Route exact path='/login'>
					<Login />
				</Route>

				<Route exact path='/register'>
					<Register />
				</Route>


				<Route exact path='/meditation'>
					<Meditation />
				</Route>

				{/* <Route exact path='/blogs'>
					<Blogs />
				</Route> */}


			</Switch>
		</BrowserRouter>

	);
}

interface AppProps {

}

export default App;