import React from "react";
import { Link } from "react-router-dom";
import './Register.css';
import {MdOutlineRestaurantMenu} from 'react-icons/md'

function Register() {
  return (
    <div className="register__container">
      <div className="register__header">
        <Link to='/login'><MdOutlineRestaurantMenu className='register__form-close-icon' /></Link>
        <h2>Formulaire d'inscription</h2>
        <form className="register__form">
        <p>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                required
                autoComplete='email'
              />
            </p>
            <p>
              <label htmlFor="password">Mot de passe:</label>
              <input
                type="password"
                id="password"
                required
              />
            </p>
            <p>
              <label htmlFor="firstName">Nom:</label>
              <input
                type="text"
                id="firstName"
                required
                autoComplete='firstName'
              />
            </p>
            <p>
              <label htmlFor="lastName">Prénom:</label>
              <input
                type="text"
                id="lastName"
                required
                autoComplete='lastName'
              />
            </p>
            <p>
              <label htmlFor="allergy">Allergie:</label>
              <input
                type="text"
                id="allergy"
                autoComplete='allergy'
              />
            </p>
            <p>
              <label htmlFor="role">Role:</label>
              <select name='role' value="CLIENT">
                <option value="CLIENT" defaultValue>CLIENT</option>
              </select>
            </p>
          <button className="register__btn" type="submit">S'inscrire</button>
        </form>
      </div>
    </div>
  )
}

export default Register;