import Home from '../components/Home';
import BlogPage from '../pages/BlogPage';
import { v4 as uuidv4 } from 'uuid';

export const routes = [
	{
		path: '/',
		element: Home,
		name: 'Inicio',
		id: uuidv4(),
	},
	{
		path: '/blog',
		element: BlogPage,
		name: 'Blog',
		id: uuidv4(),
	},
];
