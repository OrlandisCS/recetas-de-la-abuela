import Card from './ui/Card';
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
//import { recetas } from '../env';

const Recetas = () => {
	const { recetas, activeSearch, recetasEncontradas } =
		useContext(DataContext);
	return (
		<div className='container__recetas' id='todaslasrecetas'>
			<h3>
				Las mejores recetas de la abuela, directamente en tu cocina
			</h3>
			<div className='grid__layout'>
				{activeSearch
					? recetasEncontradas.map((receta, index) => (
							<Card
								key={index}
								nombre={receta.nombre
									.replace('"', '')
									.replace('"', '')}
								receta={receta.receta}
								descripcion={receta.decripcion}
								imagen={receta.imagen}
								url={receta.url}
							/>
					  ))
					: recetas.map((receta, index) => (
							<Card
								key={index}
								nombre={receta.nombre
									.replace('"', '')
									.replace('"', '')}
								receta={receta.receta}
								descripcion={receta.decripcion}
								imagen={receta.imagen}
								url={receta.url}
							/>
					  ))}
			</div>
		</div>
	);
};
export default Recetas;
