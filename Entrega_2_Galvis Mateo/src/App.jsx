import { useState } from 'react';
import './App.css';
import { restaurantsList, buttonList } from './components';
import data from './data/data';

function App() {
	const allCategories = [
		'All',
		...new Set(data.map(restaurants => restaurants.category)),
	];

	const [categories, setCategories] = useState(allCategories);
	const [articles, setArticles] = useState(data);

	const filterCategory = (category) => {
		if (category === 'All'){
			setArticles(data)
			return
		}

		const filteredData = data.filter(restaurants => restaurants.category === category);
		setArticles(filteredData)
	}

	return (
		<>
			<div className='title'>
				<h1>
					 <span>Restaurantes</span> 
				</h1>
				<img
					src='https://blogfilterbasics.netlify.app/static/media/img-portada.8261f3883a73550017d1.png'
					alt='imagen-header'
				/>
			</div>

			<ButtonList categories={categories} filterCategory={filterCategory}/>

			<restaurantsList restaurants={restaurantsList}/>
		</>
	);
}

export default App;
