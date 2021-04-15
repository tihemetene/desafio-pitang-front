import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './pages/Home';
import Auth from './pages/Auth';
import NurseAcess from './pages/NurseAccess';
import UserAcess from './pages/UserAccess';
import MeuForm from './components/MeuForm'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/auth' component={Auth} />
      <Route exact path='/user-access' component={UserAcess} />
      <Route exact path='/nurse-access' component={NurseAcess} />
      <Route exact path='/form' component={MeuForm} />

    </Switch>
  </BrowserRouter>
);

export default Routes;