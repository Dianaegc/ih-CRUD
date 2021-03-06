// ./App.js
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'


import Header from "./components/Layout/Header"
import Main from "./components/Main"
import Home from './components/Home';
import CRUD from './components/CRUD';
import FinancialApp from './components/FinancialApp';
import Details from './components/FinancialApp/Details'

import Welcome from './components/FinancialApp/Welcome'


function App() {
  return (
    <>

    <Router>

      <Header />      

      {/* TODO EL CONTENIDO DINÁMICO POR RUTA */}
      <Switch>
        
        
        {/* NESTED ROUTES - PROFUNDIDAD EN RUTAS */}
        <Route path="/financial-app" render={ (props) => {

          return (
            <>

              <FinancialApp>

                <Route exact path={`${props.match.url}/:currency`} component={ Details } />
                <Route exact path={`${props.match.url}/`} component={ Welcome } />            

              </FinancialApp>

            </>
          )
        }} />
        <Route exact path="/crud-me" component={ CRUD } />
        <Route exact path="/mike" component={ Main } />
        <Route exact path="/" component={ Home } />

      </Switch>

    </Router>
    

    </>
  );
}

export default App;