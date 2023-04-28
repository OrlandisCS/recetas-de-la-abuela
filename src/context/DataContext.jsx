import { useEffect, useState, createContext } from 'react';
import axios from 'axios';

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
	const [recetas, setRecetas] = useState([]);
	const [busqueda, setBusqueda] = useState(null);
	const getRecetas = async () => {
		const { data } = await axios.get('http://localhost:3001/recetas');
		setRecetas(data);
	};

	useEffect(() => {
		getRecetas();
	}, []);

	/* State */
	const [chat, setChat] = useState(false);
	const [bot, setBot] = useState(false);
	const [busquedaChat, setBusquedaChat] = useState('');
	const [isLoader, setIsLoader] = useState(false);
	const [error, setError] = useState('');
	const [estadoModal1, cambiarEstadoModal1] = useState(false);
	const [recetaModal, setRecetaModal] = useState(null);
	const [searchName, setSearchName] = useState('');
	const [activeSearch, setActiveSearch] = useState(false);
	const [recetasEncontradas, setRecetasEncontradas] = useState(null);
	const [filtros, setFiltros] = useState({
		Hornillos: false,
		Horno: false,
		Microondas: false,
		Facil: false,
		Normal: false,
		Medio: false,
		Dificil: false,
		15: false,
		30: false,
		45: false,
		60: false,
		75: false,
	});

	/* State */
	const openChat = () => {
		setChat(!chat);
		setBot(!bot);
		setRecetaModal(null);
	};
	const chatClose = () => {
		setChat(false);
		setBot(false);
	};
	const buscarReceta = (e) => {
		setError('');
		setBusqueda({ ...busqueda, [e.target.name]: e.target.value });
	};
	const iniciarBusqueda = async () => {
		if (busqueda.receta.length <= 0 || busqueda.receta === '') return;
		if (busqueda.receta.length < 4) {
			setError('La receta es muy corta');
			return;
		}
		setError('');
		setIsLoader(true);

		const { data } = await axios.post(
			'http://localhost:3001/sendPrompt',
			{
				userPrompt: busqueda.receta,
			}
		);
		const dataContent = data.content
			.replace('\n', '')
			.replace('```', '');
		setRecetaModal(dataContent);
		getRecetas();
		if (data) {
			setTimeout(() => {
				cambiarEstadoModal1(!estadoModal1);
				chatClose();
				setBusquedaChat('');
				setBusqueda(null);
				setIsLoader(false);
			}, 3100);
		}
	};

	const buscarPorNombre = (e) => {
		setSearchName(e.target.value);
		const search = recetas.filter((receta) =>
			receta.nombre.toLowerCase().includes(searchName.toLowerCase())
		);
		if (searchName.length > 0) {
			setActiveSearch(true);
			setRecetasEncontradas(search);
			return;
		}
		setActiveSearch(false);
	};
	const aplicarFiltro = () => {
		const filtered = Object.keys(filtros).filter((x) => filtros[x]);

		const receta = recetas.filter(
			(receta) =>
				filtered.includes(receta.metodo) ||
				filtered.includes(receta.tiempo) ||
				filtered.includes(receta.dificultad)
		);
		console.log(receta);
	};
	const handleCheckbox = (e) => {
		setFiltros({ ...filtros, [e.target.name]: e.target.checked });
	};

	return (
		<DataContext.Provider
			value={{
				recetas,
				busqueda,
				setBusqueda,
				/* ChatBot */
				chat,
				setChat,
				bot,
				setBot,
				busquedaChat,
				isLoader,
				setIsLoader,
				error,
				setError,
				estadoModal1,
				cambiarEstadoModal1,
				recetaModal,
				setRecetaModal,
				buscarReceta,
				iniciarBusqueda,
				openChat,
				chatClose,
				buscarPorNombre,
				searchName,
				activeSearch,
				recetasEncontradas,
				aplicarFiltro,
				handleCheckbox,
			}}
		>
			{children}
		</DataContext.Provider>
	);
};
