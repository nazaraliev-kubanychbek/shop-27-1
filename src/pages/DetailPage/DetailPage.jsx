import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import './detailPage.scss';
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/reducer";

const DetailPage = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({});
    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        axios(`https://fakestoreapi.com/products/${params.id}`)
            .then(({data})=> setData(data))
    }, [params])
    return (
        <div className="detail-page">
            <div className="container">
                    <div className="row">
                        <div className="col-6">
                             <img src={data.image} alt="" className="detail-page-img" />
                        </div>
                        <div className="col-6">
                            <h2 className="detail-page-title">{data.title}</h2>
                            <p className="detail-page-text">{data.description}</p>
                            <p className="detail-page-text">{data.category}</p>
                            <p className="detail-page-text">${data.price}</p>
                            <div className="detail-page-block">
                                <button onClick={()=>{
                                    dispatch(addCart(data))
                                }}>buy</button>
                                <button onClick={()=>{
                                    navigate(-1)
                                }}>go back</button>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default DetailPage;
