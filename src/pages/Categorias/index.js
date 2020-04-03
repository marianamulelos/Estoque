import React, { useState, useEffect} from 'react';
import api from '../../services/api';
import logo from '../../assets/logo.png';
import { FiMenu  } from 'react-icons/fi';
import './style.css';
import MUIDataTable from "mui-datatables";

export default function Categorias(){
    const columns = ["ID", "CATEGORIAS"];

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        api.get('categorias').then(response => {
            setCategorias(response.data);
        })
    }, []);

    console.log(categorias);

    return(
      <div className="categorias-container">
           <MUIDataTable 
            title={"LISTA DE CATEGORIAS"}
            data={categorias}
            columns={columns} 
            />  

            <header>
                <img src={logo} alt={logo} />
                <span>CONSULTA DE ESTOQUE</span>

                <button  className="button" type="button">
                    <FiMenu size={25} color="#FFFF"/>                   
                </button>

                <h1> MENU </h1>
            </header>
            
      </div>
      
    );
}