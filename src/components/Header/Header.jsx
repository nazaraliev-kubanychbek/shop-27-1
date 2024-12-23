import './header.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
    const categories = useSelector(s => s.reducer.categories);
    return (
        <header className='header'>
            <div className="container header-container">
                <h2 className="header-logo"><Link to={'/'}>shop</Link></h2>
                <nav className="header-nav">
                    {
                        categories.map(item =>{
                            return <Link key={item} to={`/category/${item}`} >{item}</Link>
                        })
                    }
                    <Link to={'/'}>home</Link>
                    <Link to={'/cart'}>cart</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
