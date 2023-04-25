import Layout from './components/ui/Layout';
import Video from './assets/video.mp4';
import Recetas from './components/Recetas';
import { categorias, dificultad, tiempo } from './env';

function App() {
	return (
		<Layout>
			<section className='hero'>
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
					<a className='btn' href='#todaslasrecetas'>
						Ver Recetas
					</a>
				</div>
				<div className='hero-bg'></div>
			</section>

			<div className='container'>
				<div className='container__recetas'>
					<h3>Hacer una busqueda por filtros</h3>
				</div>
				<div className='search__seccion'>
					<div className='flex'>
						<h3>Hacer en:</h3>
						{categorias.map((categoria) => (
							<div className='categoria__flex'>
								<input
									type='checkbox'
									key={categoria.id}
									id={categoria.id}
									value={categoria.nombre}
									name={categoria.nombre}
								/>
								<label htmlFor={categoria.id}>
									{categoria.nombre}
								</label>
							</div>
						))}
					</div>
					<div className='flex'>
						<h3>Difilcutad:</h3>
						{dificultad.map((dificultad) => (
							<div className='categoria__flex'>
								<input
									type='checkbox'
									key={dificultad.id}
									id={dificultad.id}
									value={dificultad.nombre}
									name={dificultad.nombre}
								/>
								<label htmlFor={dificultad.id}>
									{dificultad.nombre}
								</label>
							</div>
						))}
					</div>
					<div className='flex'>
						<h3>Tiempo:</h3>

						{tiempo.map((tiempo, index) => (
							<div className='categoria__flex'>
								<input
									type='checkbox'
									key={tiempo.id}
									id={tiempo.id}
									value={tiempo.nombre}
									name={tiempo.nombre}
								/>
								<label htmlFor={tiempo.id}>{tiempo.nombre}</label>
							</div>
						))}
					</div>
					<button className='btn'>Aplicar Filtros</button>

					<h3>Busqueda por receta</h3>
					<div className='search'>
						<input type='search' placeholder='Buscar una receta' />
						<button className='btn'>Buscar</button>
					</div>
				</div>
				<Recetas />
			</div>
		</Layout>
	);
}

export default App;
