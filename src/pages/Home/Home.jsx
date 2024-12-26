import {useSelector} from 'react-redux';
import CategoryComponent from '../../components/CateoryComponent/CategoryComponent';

const Home = () => {
    const categories = useSelector(s => s.reducer.categories);
    return (
        <div>
            {
                categories.map((item)=>{
                    return <CategoryComponent limit={true} key={item} category={item} />
                })
            }

        </div>
    );
}

export default Home;
