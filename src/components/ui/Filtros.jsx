import React, { useContext } from 'react';
import { categorias, dificultad, tiempo } from '../../env';
import { DataContext } from '../../context/DataContext';

const Filtros = ({ placeholder }) => {
	const {
		buscarPorNombre,
		searchName,
		aplicarFiltro,
		handleCheckbox,
	} = useContext(DataContext);
	return (
		<>
			<div className='container__recetas'>
				<h3>Hacer una busqueda por filtros</h3>
			</div>
			<div className='search__seccion'>
				<div className='flex'>
					<h3>Hacer en:</h3>
					{categorias.map((categoria) => (
						<div className='categoria__flex'>
							<input
								type='checkbox'
								key={categoria.id}
								id={categoria.id}
								value={categoria.nombre}
								name={categoria.nombre}
								onChange={handleCheckbox}
								disabled
							/>
							<label htmlFor={categoria.id}>{categoria.nombre}</label>
						</div>
					))}
				</div>
				<div className='flex'>
					<h3>Difilcutad:</h3>
					{dificultad.map((dificultad) => (
						<div className='categoria__flex'>
							<input
								type='checkbox'
								key={dificultad.id}
								id={dificultad.id}
								value={dificultad.nombre}
								name={dificultad.nombre}
								onChange={handleCheckbox}
								disabled
							/>
							<label htmlFor={dificultad.id}>
								{dificultad.nombre}
							</label>
						</div>
					))}
				</div>
				<div className='flex'>
					<h3>Tiempo:</h3>

					{tiempo.map((tiempo, index) => (
						<div className='categoria__flex'>
							<input
								type='checkbox'
								key={tiempo.id}
								id={tiempo.id}
								value={tiempo.value}
								name={tiempo.value}
								onChange={handleCheckbox}
								disabled
							/>
							<label htmlFor={tiempo.id}>{tiempo.nombre}</label>
						</div>
					))}
				</div>
				<button
					className='btn'
					onClick={aplicarFiltro}
					style={{
						background: '#cacaca',
					}}
				>
					Aplicar Filtros
				</button>

				<h3>Busqueda por receta</h3>
				<div className='search'>
					<input
						type='search'
						placeholder={placeholder}
						name='searchName'
						value={searchName}
						onChange={buscarPorNombre}
					/>
					<button className='btn'>Buscar</button>
				</div>
			</div>
		</>
	);
};

export default Filtros;
