import React from 'react';
import Card from './ui/Card';
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

const Blog = () => {
	const { articulos } = useContext(DataContext);
	return (
		<div className='grid__layout'>
			{articulos.map((articulo) => (
				<Card
					key={articulo._id}
					nombre={articulo.nombre.replace('"', '').replace('"', '')}
					receta={articulo.blog}
					descripcion={articulo.descripcion}
					imagen={articulo.imagen}
					url={''}
				/>
			))}
		</div>
	);
};

export default Blog;
