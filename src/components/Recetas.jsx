import Card from './ui/Card';
import { recetas } from '../env';

const Recetas = () => {
	return (
		<div className='container__recetas'>
			<h3>
				Las mejores recetas de la abuela, directamente en tu cocina
			</h3>
			<div className='grid__layout'>
				{recetas.map((receta, index) => (
					<Card
						key={index}
						nombre={receta.nombre}
						descripcion={receta.descripcion}
						imagen={receta.imagen}
						url={receta.url}
					/>
				))}
			</div>
		</div>
	);
};
export default Recetas;
