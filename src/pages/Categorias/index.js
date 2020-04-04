import React, { useState, useEffect} from 'react';
import api from '../../services/api';
import logo from '../../assets/logo.png';
import { FiMenu  } from 'react-icons/fi';
import './style.css';
import MUIDataTable from "mui-datatables";
import { ptBr } from '../../shared/MUIDataTableLabels';

export default function Categorias(){
    const columns = ["ID", "CATEGORIAS"];
    const [categorias, setCategorias] = useState([]);
    const options = {
        textLabels: ptBr
    }

    useEffect(() => {
        api.get('categorias').then(response => {
            let categories = [];
            response.data.forEach(element => {
                categories.push([element.id_categoria, element.categoria]);
            });
            setCategorias(categories);
        })
    }, []);

    return(
      <div className="categorias-container">

            <header>
                <img src={logo} alt={logo} />
                <span>CONSULTA DE ESTOQUE</span>

                <button  className="button" type="button">
                    <FiMenu size={25} color="#FFFF"/>                   
                </button>

                <h1> MENU </h1>
            </header>

            <MUIDataTable 
                title={"LISTA DE CATEGORIAS"}
                data={categorias}
                columns={columns} 
                options={options}
            />  
            
      </div>
      
    );
}