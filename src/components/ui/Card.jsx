import React from 'react';

const Card = ({ nombre, descripcion, imagen, url }) => {
	return (
		<div className='card__cointainer'>
			<div className='card__image'>
				<img src={imagen} alt={nombre} />
			</div>
			<div className='card__header'>
				<p>{nombre}</p>
			</div>
			<div className='card__body'>
				<p>{descripcion}</p>
			</div>
			<div className='card__footer'>
				<button className='btn'>Ver Receta</button>
			</div>
		</div>
	);
};
export default Card;
