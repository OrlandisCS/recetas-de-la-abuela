import Logo from '../assets/logo.png';
const Header = () => {
	return (
		<header>
			<div className='logo'>
				<img src={Logo} alt='logo principal' />
			</div>
			<div className='logo__decription'>
				<p>
					Revive los sabores de antaño con nuestras recetas de la
					abuela
				</p>
				<p>
					Deleita tu paladar con lo mejor de la cocina tradicional.{' '}
				</p>
			</div>
		</header>
	);
};

export default Header;
