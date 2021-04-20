import { Row } from 'react-bootstrap';
import Routes from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Row>
      <ToastContainer />
        <Routes />
      </Row>
    </div>
  );
}
export default App;
