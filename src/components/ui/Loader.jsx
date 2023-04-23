import Load from '../../assets/load.gif';

export const LoaderComponent = () => {
	return (
		<>
			<h3>Espere un momento...</h3>
			<p>Nuestro Chefsito está trabajando en ello</p>
			<img src={Load} alt='' />
		</>
	);
};
