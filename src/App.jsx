import Layout from './components/ui/Layout';
import Video from './assets/video.mp4';

function App() {
	return (
		<Layout>
			<section class='hero'>
				<div className='video__hero'>
					<video src={Video} loop autoPlay muted></video>
				</div>

				<div className='hero-text'>
					<h1>Descubre el sabor de la cocina casera</h1>
					<p>
						Bienvenido a El Sazón de la Abuela, donde compartimos
						recetas deliciosas y fáciles de seguir para todos los
						públicos.
					</p>
					<p>
						Desde platos clásicos hasta nuevas creaciones, nuestras
						recetas están diseñadas para que disfrutes de la cocina en
						casa al máximo. ¡Comienza a explorar ahora!
					</p>
					<button className='btn'>Ver Recetas</button>
				</div>
				<div className='hero-bg'></div>
			</section>

			<div className='container'>
				<h3>Buscar receta por categoria</h3>
				<div className='search__input'>
					<input type='search' />
				</div>
			</div>
		</Layout>
	);
}

export default App;
