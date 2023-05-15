import Chatbot from './Chatbot';
import Recetas from './Recetas';
import Filtros from './ui/Filtros';
import Hero from './ui/Hero';

function Home() {
	return (
		<>
			<Hero />
			<div className='container'>
				<Filtros placeholder='Buscar una receta' />
				<Recetas />
			</div>
			<Chatbot />
		</>
	);
}

export default Home;
