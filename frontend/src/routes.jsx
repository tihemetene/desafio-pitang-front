import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './pages/Home';
import NurseAcess from './pages/NurseAccess';
import UserAcess from './pages/UserAccess';
import MeuForm from './components/MeuForm'
import Teste from './pages/Teste'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/user-access' component={UserAcess} />
      <Route exact path='/nurse-access' component={NurseAcess} />
      <Route exact path='/form' component={MeuForm} />
      <Route exact path='/teste' component={Teste} />
    </Switch>
  </BrowserRouter>
);

export default Routes;