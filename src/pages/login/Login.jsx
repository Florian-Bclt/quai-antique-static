import React from 'react'
import './Login.css'
import {MdOutlineRestaurantMenu} from 'react-icons/md'
import { Link } from 'react-router-dom'


function Login() {
  return (
        <div className="wrapper login">
            <div className="container">
              <div className="col-left">
                <div className="login-text">
                  <h2>Bienvenue !</h2>
                  <p>Créez votre compte gratuitement</p>
                  <Link to="/register" className="btn">S'inscrire</Link>
                </div>
              </div>

              <div className="col-right">
                <div className="login-form">
                  <h2>Connexion</h2>

                  <form>
                    <p>
                      <label htmlFor="username">Adresse mail</label>
                      <input 
                        type="text"
                        placeholder="Votre adresse mail" 
                        id='username'
                        required 
                      />
                    </p>
                    <p>
                      <label htmlFor='password'>Mot de passe</label>
                      <input 
                        type="password"
                        placeholder="Votre mot de passe" 
                        id='password'
                        required
                      />
                    </p>	
                    <p>
                      <button type="submit">Se Connecter</button>
                    </p>	
                    <p>
                      <a href='/login'>Mot de passe oublié ?</a>
                    </p>
                  </form>
                </div>
              </div>
              <Link to='/'><MdOutlineRestaurantMenu className='close-icon' /></Link>
            </div>
          </div>
  )
}


export default Login