import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './pages/Home';
import NurseAcess from './pages/NurseAccess';
import UserAcess from './pages/UserAccess';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/agendamento/:id' component={UserAcess} />
      <Route exact path='/agendamento' component={NurseAcess} />
    </Switch>
  </BrowserRouter>
);

export default Routes;