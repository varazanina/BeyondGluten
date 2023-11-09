import { Link } from 'react-router-dom';
import { Navigation } from './Components/Navigation';
import ErrorImage from "../assets/404_image.svg";
import './ErrorPage.css';

function ErrorPage() {
  return (
    <div className="error-page">
       <Navigation />
      <div className='general_margin'>
      <h2 className='heading404'>Ooops... the meal is not <br />ready yet!</h2>
      <p className='smallheading404'>The page you are looking for was not found...</p>
      <img src={ ErrorImage } alt="Sandwich Image" className="error" />
      <Link to="/" >
      <button className='primarybutton' >Go back to Home</button>
      </Link>
      </div>
    </div>
  );
}

export default ErrorPage;

