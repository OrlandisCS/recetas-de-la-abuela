import Layout from './components/ui/Layout';
import Recetas from './components/Recetas';
import { DataProvider } from './context/DataContext';
import Hero from './components/ui/Hero';
import Filtros from './components/ui/Filtros';

function App() {
	return (
		<DataProvider>
			<Layout>
				<Hero />
				<div className='container'>
					<Filtros />
					<Recetas />
				</div>
			</Layout>
		</DataProvider>
	);
}

export default App;
