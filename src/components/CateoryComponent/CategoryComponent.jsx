import {useState, useEffect} from 'react';
import axios from 'axios';
import Card from '../Card/Card';
import './categoryComponent.scss';

const CategoryComponent = ({category = 'category', limit = false}) => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        setData([])
        axios(
            limit
            ? `https://fakestoreapi.com/products/category/${category}?limit=4`
            : `https://fakestoreapi.com/products/category/${category}`
        )
        .then(({data})=> setData(data))
    }, [category, limit])
    return (
        <div className='container'>
            <h2 className='category-component-title'>{category}</h2>
                <div className="row">
                    {
                        data.map(item =>{
                            return <div className="col-3" key={item.id}>
                                <Card item={item} />
                            </div>
                        })
                    }
                </div>
        </div>
    );
}

export default CategoryComponent;
