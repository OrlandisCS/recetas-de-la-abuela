import React from 'react';
const Categorias = ({ categoria }) => {
	console.log(categoria);

	//categoria?.Object.keys(categoria).map((c) => console.log(c));
	return (
		<div>
			{/* {categoria.map(({ name, id }) => (
				<>
					<p>{id}</p>
					<p>{name}</p>
				</>
			))} */}
		</div>
	);
};

export default Categorias;
