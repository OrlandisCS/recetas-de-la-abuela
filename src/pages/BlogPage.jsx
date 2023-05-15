import React from 'react';
import Blog from '../components/Blog';
import Filtros from '../components/ui/Filtros';

const BlogPage = () => {
	return (
		<div className='container'>
			<Filtros placeholder='Buscar en el blog' />
			<Blog />
		</div>
	);
};

export default BlogPage;
