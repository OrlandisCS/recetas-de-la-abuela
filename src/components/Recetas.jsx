import { useEffect, useState } from 'react';
import Card from './ui/Card';
import axios from 'axios';
//import { recetas } from '../env';

const Recetas = () => {
	const [recetas, setRecetas] = useState([]);
	const [busqueda, setBusqueda] = useState(null);
	const getRecetas = async () => {
		const { data } = await axios.get('http://localhost:3001/recetas');
		setRecetas(data);
	};
	useEffect(() => {
		getRecetas();
	}, []);
	return (
		<div className='container__recetas' id='todaslasrecetas'>
			<h3>
				Las mejores recetas de la abuela, directamente en tu cocina
			</h3>
			<div className='grid__layout'>
				{recetas.map((receta, index) => (
					<Card
						key={index}
						nombre={receta.nombre.replace('"', '').replace('"', '')}
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
