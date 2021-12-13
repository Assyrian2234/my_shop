import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route,Routes} from 'react-router-dom';
import configureStore from '../../redux/Store';
import { ADMIN_ROUTES } from '../../constants/index';
import Login from "./../login/index"
import Shop from "./../shop/index"
const store = configureStore();
const App = ()=>{
    let render_router = () =>{
        let xhtml = null;
        xhtml = ADMIN_ROUTES.map((route)=>{

            return(
                <Route 
                key={route.path} 
                path={route.path} 
                element={route.element}></Route>
            )
        })
        return xhtml;
    }
    return(
        <Provider store={store}>
            <BrowserRouter>
            <Routes>
                    {render_router()}
             </Routes>   
            </BrowserRouter>
        </Provider>
    )
}
export default App;