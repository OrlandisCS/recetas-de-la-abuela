import { DataProvider } from './context/DataContext';
import Layout from './components/ui/Layout';
import { Route, Router, Switch } from 'wouter';
import Home from './components/Home';
import BlogPage from './pages/BlogPage';

function App() {
	return (
		<DataProvider>
			<Layout>
				<Switch>
					<Route path='/' component={Home} />
					<Route path='/blog' component={BlogPage} />
				</Switch>
			</Layout>
		</DataProvider>
	);
}
export default App;
