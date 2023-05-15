import React from 'react';
import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';
const Modal = ({
	children,
	estado,
	cambiarEstado,
	titulo = 'Alerta',
	mostrarHeader,
	mostrarOverlay,
	posicionModal,
	padding,
}) => {
	return (
		<>
			{estado && (
				<Overlay
					mostrarOverlay={mostrarOverlay}
					posicionModal={posicionModal}
				>
					<ContenedorModal padding={padding}>
						{mostrarHeader && (
							<EncabezadoModal>
								<h3>{titulo}</h3>
							</EncabezadoModal>
						)}

						<BotonCerrar onClick={() => cambiarEstado(false)}>
							<GrClose />
						</BotonCerrar>

						{children}
					</ContenedorModal>
				</Overlay>
			)}
		</>
	);
};

export default Modal;

const Overlay = styled.div`
	width: 100vw;
	height: 100vh;
	z-index: 999999999;
	position: fixed;
	top: 0;
	left: 0;
	background: ${(props) =>
		props.mostrarOverlay ? 'rgba(0,0,0,.5)' : 'rgba(0,0,0,0)'};
	padding: 40px;
	display: flex;
	align-items: ${(props) =>
		props.posicionModal ? props.posicionModal : 'center'};
	justify-content: center;
`;

const ContenedorModal = styled.div`
	width: 900px;
	min-height: 100px;
	max-height: 98vh;
	overflow: scroll;
	background: #fff;
	position: relative;
	border-radius: 5px;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	padding: ${(props) => (props.padding ? props.padding : '20px')};
`;

const EncabezadoModal = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 20px;
	padding-bottom: 20px;
	border-bottom: 1px solid #e8e8e8;

	h3 {
		font-weight: 700;
		font-size: 1.4rem;
		color: #00adb5;
	}
`;

const BotonCerrar = styled.button`
	position: absolute;
	top: 15px;
	right: 20px;
	width: 30px;
	height: 30px;
	border: none;
	background: none;
	cursor: pointer;
	transition: 0.3s ease all;
	border-radius: 5px;
	color: #1766dc;

	&:hover {
		background: #f2f2f2;
	}

	svg {
		width: 100%;
		height: 100%;
	}
`;

export const Boton = styled.button`
	display: block;
	padding: 10px 30px;
	margin: 0.9rem 0;
	border-radius: 100px;
	color: #fff;
	border: none;
	background: #00adb5;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: 0.3s ease all;
	&:hover {
		background: #0a4d68;
	}
`;

export const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}
	p {
		font-size: 18px;
		margin-bottom: 20px;
	}

	img {
		width: 100%;
		height: 380px;
		vertical-align: top;
		border-radius: 3px;
	}
`;
