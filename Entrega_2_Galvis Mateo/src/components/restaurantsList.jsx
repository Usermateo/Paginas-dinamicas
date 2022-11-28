export const restaurantsList = ({ restaurantsList }) => {
	return (
        <div className="restuarants-list">
            {articles.map(article => (
                <div className="restaurants-container" key={restaurantsList.id}>
                    <div className="img-container">
                        <img src={restaurants.image} alt={restaurants.title} />
                    </div>
                    <div className="restaurantes-body">
                        <h2>{restaurants.title}</h2>
                        <p>{restaurants.description}</p>
                        <div className="restaurants-footer">

                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
};
