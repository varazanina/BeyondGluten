import { Link, NavLink } from 'react-router-dom';
import GoBack from '../assets/arrow_back.svg';
import { Navigation } from './Components/Navigation';
import './ErrorPage.css';

function ErrorPage() {
  return (
    <div className="error-page">
       <Navigation />
      <div className='general_margin'>
      <h2 className='heading404'>Ooops... the meal is not <br />ready yet!</h2>
      <p className='smallheading404'>The page you are looking for was not found...</p>
      <img src="../src/assets/404_image.svg" alt="Sandwich Image" className="error" />
      <Link to="/" >
      <button className='primarybutton' >Go back to Home</button>
      </Link>
      </div>
    </div>
  );
}

export default ErrorPage;

