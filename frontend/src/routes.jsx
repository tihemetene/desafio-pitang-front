import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './pages/Home';
import NurseAcess from './pages/NurseAccess';
import UserAcess from './pages/UserAccess';
import Agendamentos from './components/Agendamentos';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/user-access' component={UserAcess} />
      <Route exact path='/nurse-access' component={NurseAcess} />
      <Route exact path='/agendamento' component={Agendamentos} />
    </Switch>
  </BrowserRouter>
);

export default Routes;