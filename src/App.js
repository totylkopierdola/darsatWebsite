import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './pages';
import Naprawa from './pages/naprawa';
import Zakup from './pages/zakup';
import Onas from './pages/onas';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/naprawa" component={Naprawa}  />
        <Route path="/zakup" component={Zakup}  />
        <Route path="/onas" component={Onas}  />
      </Switch>
    </Router>
  );
}

export default App;
