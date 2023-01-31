import { LocationProvider, Router } from 'preact-iso/router';
import { default as lazy, ErrorBoundary } from 'preact-iso/lazy';

import { Header } from './components/header';

// Asynchronous, code-splitted:
const Home = lazy(() => import('./routes/home/index.js'));
const Profile = lazy(() => import('./routes/profile/index.js'));

import './style/index.css';

export default function App() {
	return (
		<LocationProvider>
			<div id="app">
				<Header />
				<main>
					<ErrorBoundary>
						<Router>
							<Home path="/" />
							<Profile path="/profile/" user="me" />
							<Profile path="/profile/:user" />
						</Router>
					</ErrorBoundary>
				</main>
            </div>
        </LocationProvider>
	);
}
