import { Fade } from 'react-awesome-reveal';
import Video from '../../assets/chef.mp4';

const Hero = () => {
	return (
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
	);
};

export default Hero;
