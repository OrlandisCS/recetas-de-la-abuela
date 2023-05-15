import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaRobot } from 'react-icons/fa';
import { SiCodechef } from 'react-icons/si';
import { GrClose } from 'react-icons/gr';
import Cocina from '../assets/cocina.png';
import Load from '../assets/loader.gif';
import Usuario from '../assets/usuario.gif';
import Modal, { Boton, Contenido } from './ui/Modal';

import ReactHtmlParser from 'react-html-parser';
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

const Chatbot = () => {
	const {
		chat,
		setChat,
		bot,
		setBot,
		busquedaChat,
		isLoader,
		setIsLoader,
		error,
		setError,
		estadoModal1,
		cambiarEstadoModal1,
		recetaModal,
		setRecetaModal,
		buscarReceta,
		iniciarBusqueda,
		openChat,
		chatClose,
		message,
	} = useContext(DataContext);
	useEffect(() => {
		setTimeout(() => {
			setChat(true);
		}, 20000);
		setTimeout(() => {
			setChat(false);
		}, 100000);
	}, []);

	return (
		<>
			<div
				className={`container__float__chat ${
					chat && !bot ? 'is_active_chat' : ''
				}`}
			>
				<div className='btnClose'>
					<button onClick={chatClose}>
						<GrClose className='closeIcon' />
					</button>
				</div>
				<h3>Hola!! te puedo ayudar?</h3>
				<p>
					Mi roll es el de cocinero{' '}
					<SiCodechef className='otros__iconos' />
				</p>
				<p>Por lo que si no encuentras tu receta puedes preguntame</p>
			</div>

			<div
				className={`container__for__chat ${
					bot ? 'is_active_chat' : ''
				}`}
				style={{
					/* right: bot ? '2.2rem' : '-150%', */
					display: isLoader ? 'flex' : '',
					justifyContent: isLoader ? 'center' : '',
					alignItems: isLoader ? 'center' : '',
				}}
			>
				<div className='btnClose'>
					<button onClick={chatClose}>
						<GrClose />
					</button>
				</div>
				{!isLoader ? (
					<>
						<h3>
							Hola Soy Chefsito
							<img
								src={Cocina}
								alt='Chefsito'
								className='otros__iconos'
								loading='lazy'
							/>
						</h3>
						<p>Que tienes pensado cocinar?</p>
					</>
				) : (
					''
				)}
				{!isLoader && (
					<button
						className='btn mt-3'
						onClick={() => iniciarBusqueda('random')}
					>
						Quiero una receta aleatoria
					</button>
				)}
				<div className='loader__div'>
					{isLoader ? (
						<>
							{recetaModal ? (
								<div className='listo'>
									<img src={Usuario} alt='' loading='lazy' />
									<p>{message}</p>
								</div>
							) : (
								<div className='pensando'>
									<img src={Load} alt='' loading='lazy' />
									<p>{message}</p>
								</div>
							)}
						</>
					) : (
						<div className='div__vacio'></div>
					)}
				</div>
				<div className='error'>
					{error.length >= 1 ? (
						<p className='error__container'>{error}</p>
					) : (
						''
					)}
				</div>
				{!isLoader ? (
					<div className='search'>
						<input
							type='search'
							placeholder='Buscar una receta'
							name='receta'
							onChange={buscarReceta}
						/>
						<button className='btn' onClick={iniciarBusqueda}>
							Buscar
						</button>
					</div>
				) : (
					''
				)}
			</div>

			<button className='chatbot__container' onClick={openChat}>
				<ul className='list-inline'>
					<li>
						<FaRobot className='rss__icon' />
					</li>
				</ul>
			</button>

			<Modal
				estado={estadoModal1}
				cambiarEstado={cambiarEstadoModal1}
				titulo='Receta de Chefsito'
				mostrarHeader={true}
				mostrarOverlay={true}
				posicionModal={'center'}
				padding={'20px'}
			>
				<Contenido>
					<div className='receta__parser'>
						{ReactHtmlParser(recetaModal)}
					</div>

					<Boton onClick={() => cambiarEstadoModal1(!estadoModal1)}>
						Aceptar
					</Boton>
				</Contenido>
			</Modal>
		</>
	);
};

export default Chatbot;
