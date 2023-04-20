import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
const Footer = () => {
	return (
		<>
			<footer>
				<div className='container'>
					<div className='row'>
						<div className='col-md-6'>
							<h4>El Sazón de la Abuela</h4>
							<p>Recetas tradicionales para toda la familia</p>
						</div>
						<div className='col-md-6'>
							<h4>Síguenos en redes sociales:</h4>
							<ul className='list-inline'>
								<li>
									<BsFacebook className='rss__icon' />
								</li>
								<li>
									<BsInstagram className='rss__icon' />
								</li>
								<li>
									<BsTwitter className='rss__icon' />
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='bottom'>
					<p>
						&copy; 2023 El Sazón de la Abuela | Todos los derechos
						reservados
					</p>
				</div>
			</footer>
		</>
	);
};

export default Footer;
