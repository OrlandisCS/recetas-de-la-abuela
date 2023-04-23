import Logo from '../assets/logo.png';
import Cocina from '../assets/cocina.png';

const Header = () => {
	return (
		<header>
			<div className='logo'>
				<img src={Logo} alt='logo principal' />
			</div>
			<div className='logo__decription'>
				<img
					src={Cocina}
					alt='Chefsito'
					className='otros__iconos'
					loading='lazy'
				/>
				{/* <p>
					Revive los sabores de antaño con nuestras recetas de la
					abuela
				</p>
				<p>
					Deleita tu paladar con lo mejor de la cocina tradicional.{' '}
				</p> */}
			</div>
		</header>
	);
};

export default Header;
