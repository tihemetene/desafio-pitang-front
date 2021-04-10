import { Row } from 'react-bootstrap';
import Home from './pages/Home';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <Row>
        <Home />
        <Routes />
      </Row>
    </div>
  );
}
export default App;
