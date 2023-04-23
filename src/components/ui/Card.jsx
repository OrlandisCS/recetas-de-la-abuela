import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Modal, { Boton, Contenido } from './Modal';
import { LoaderComponent } from './Loader';
import ReactHtmlParser from 'react-html-parser';

const Card = ({ nombre, descripcion, imagen, receta }) => {
	const [estadoModal1, cambiarEstadoModal1] = useState(false);
	const [recetaModal, setRecetaModal] = useState('');
	const [loading, setloading] = useState(false);
	const verReceta = async () => {
		setRecetaModal(receta);
	};
	const verModal = () => {
		cambiarEstadoModal1(!estadoModal1);
		//setloading(true);
		verReceta();
	};
	const htmlConvert = recetaModal
		.replace('\n', '')
		.replace('```', '');
	return (
		<>
			<Modal
				estado={estadoModal1}
				cambiarEstado={cambiarEstadoModal1}
				titulo={loading ? 'Cargando Receta ...' : nombre}
				mostrarHeader={true}
				mostrarOverlay={true}
				posicionModal={'center'}
				padding={'20px'}
			>
				<Contenido>
					<div className='receta__parser'>
						{ReactHtmlParser(htmlConvert)}
					</div>

					<Boton onClick={() => cambiarEstadoModal1(!estadoModal1)}>
						Aceptar
					</Boton>
				</Contenido>
			</Modal>

			<div className='card__cointainer'>
				<div className='card__image'>
					<img src={imagen} alt={nombre} loading='lazy' />
				</div>
				<div className='card__header'>
					<p>{nombre}</p>
				</div>
				<div className='card__body'>
					<p>{descripcion}</p>
				</div>
				<div className='card__footer'>
					<button className='btn' onClick={() => verModal(nombre)}>
						Ver Receta
					</button>
				</div>
			</div>
		</>
	);
};
export default Card;
