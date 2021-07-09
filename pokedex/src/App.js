import './App.scss';
import VsiPokemoni from './components/VsiPokemoni';
import PokemonPage from './components/PokemonPage';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Switch>

        <Route exact path="/">
          <VsiPokemoni />
        </Route>
        <Route path="/pokemon/:id">
          <PokemonPage />
        </Route>

  

      </Switch>
      </Router>
    </>
  );
}

export default App;
