import React from 'react';
import { Link } from 'react-router-dom';
import GoBack from '../assets/arrow_back.svg';
import { Navigation } from './Components/Navigation';
import './ErrorPage.css';

function ErrorPage() {
  return (
    <div className="error-page">
       <Navigation />
        <Link to="/">
        <img src={GoBack} alt="Go to the previous page" className="back-btn" />
        </Link>
      <h2 className='heading404'>Ooops... the meal is not <br />ready yet!</h2>
      <p className='smallheading404'>The page you are looking for was not found...</p>
      <img src="../src/assets/404_image.svg" alt="Sandwich Image" className="error" />
      <button className='primarybutton'>Go back to Home</button>
    </div>
  );
}

export default ErrorPage;

