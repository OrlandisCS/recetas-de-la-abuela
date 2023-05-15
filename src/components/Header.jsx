import Logo from '../assets/logo.png';
import Cocina from '../assets/cocina.png';
import { Link, useRoute } from 'wouter';
const ActiveLink = (props) => {
	const [isActive] = useRoute(props.href);
	return (
		<Link {...props}>
			<a className={`home__link ${isActive ? 'active' : ''}`}>
				{props.children}
			</a>
		</Link>
	);
};
const Header = () => {
	return (
		<header>
			<div className='logo'>
				<img src={Logo} alt='logo principal' />
			</div>
			<div className='logo__decription'>
				<ActiveLink href='/'>Inicio</ActiveLink>
				<ActiveLink href='/blog'>Blog</ActiveLink>
				<img
					src={Cocina}
					alt='Chefsito'
					className='otros__iconos'
					loading='lazy'
				/>
			</div>
		</header>
	);
};

export default Header;
