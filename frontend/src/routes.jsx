import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './pages/Home';
import NurseAcess from './pages/NurseAccess';
import UserAcess from './pages/UserAccess';
import MeuForm from './components/MeuForm';
import Agendamentos from './components/Agendamentos';
import SignupForm from './components/MeuForm/teste'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/user-access' component={UserAcess} />
      <Route exact path='/nurse-access' component={NurseAcess} />
      <Route exact path='/form' component={MeuForm} />
      <Route exact path='/agendamento' component={Agendamentos} />
      <Route exact path='/agendamento/:id' component={Agendamentos} />
      <Route exact path='/teste' component={SignupForm} />
    </Switch>
  </BrowserRouter>
);

export default Routes;