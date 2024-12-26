import './card.scss';

const Card = ({item}) => {
    return (
        <div className="card">
            <img src={item.image} alt="" className="card-img" />
            <h4 className="card-title">{item.title.length > 30
                ? item.title.substr(0, 27).trim() + '...'
                : item.title
                }</h4>
            <p className="card-description">{item.description.length > 35
                ? item.description.substr(0, 32).trim() + '...'
                : item.description
                }</p>
            <div className="card-block">
                <p className="card-price">{item.price}</p>
                <button className="card-button">buy</button>
            </div>
        </div>
    );
}

export default Card;
