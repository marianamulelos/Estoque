import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Categorias from './pages/Categorias';
import Componentes from './pages/Componentes';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch> 
                <Route path="/" exact component={Categorias}/>
                <Route path="/componentes" component={Componentes}/>
            </Switch>
        </BrowserRouter>
    );
}