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

const Chatbot = () => {
	const [chat, setChat] = useState(false);
	const [bot, setBot] = useState(false);
	const [busqueda, setBusqueda] = useState('');
	const [isLoader, setIsLoader] = useState(false);
	const [error, setError] = useState('');
	const [estadoModal1, cambiarEstadoModal1] = useState(false);
	const [recetaModal, setRecetaModal] = useState(null);
	useEffect(() => {
		setTimeout(() => {
			setChat(true);
		}, 20000);
		setTimeout(() => {
			setChat(false);
		}, 100000);
	}, []);
	const openChat = () => {
		setChat(!chat);
		setBot(!bot);
	};

	const chatClose = () => {
		setChat(false);
		setBot(false);
	};

	const buscarReceta = (e) => {
		setError('');
		setBusqueda({ ...busqueda, [e.target.name]: e.target.value });
	};
	const iniciarBusqueda = async () => {
		if (busqueda.receta.length <= 0 || busqueda.receta === '') return;
		if (busqueda.receta.length < 6) {
			setError('La receta es muy corta');
			return;
		}
		setError('');
		setIsLoader(true);

		const { data } = await axios.post(
			'http://localhost:3001/sendPrompt',
			{
				userPrompt: busqueda.receta,
			}
		);
		setRecetaModal(data.content.replace('\n', '').replace('```', ''));
		if (data) {
			setTimeout(() => {
				cambiarEstadoModal1(!estadoModal1);
				setChat(false);
				setBot(false);
			}, 3100);
		}
	};

	return (
		<>
			<div
				className='container__float__chat'
				style={{
					right: chat && !bot ? '2.2rem' : '-100%',
				}}
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
				className='container__for__chat'
				style={{
					right: bot ? '2.2rem' : '-100%',
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

				<div className='loader__div'>
					{isLoader ? (
						<>
							{recetaModal ? (
								<div className='listo'>
									<img src={Usuario} alt='' loading='lazy' />
									<p>He encontrado una receta para ti</p>
								</div>
							) : (
								<div className='pensando'>
									<img src={Load} alt='' loading='lazy' />
									<p>Estoy buscando la mejor receta para ti...</p>
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
