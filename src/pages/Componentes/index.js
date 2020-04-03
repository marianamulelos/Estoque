import React from 'react';
import logo from '../../assets/logo.png';
import { FiMenu  } from 'react-icons/fi';
import './style.css';

export default function Componentes(){
        return(
        <div className="componentes-container">
            <header>
                <img src={logo} alt = "logo"/>
                <span> CONSULTA DE ESTOQUE </span>
                <button className="button" type="submit">
                    <FiMenu size={25} color="#FFFF"/>                                
                </button>    
                <h1> MENU </h1>                          
            </header>       
            <h1>COMPONENTES</h1>  
        </div>
    );
}