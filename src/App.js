import './App.css';
import './assets/style.css';
import {
  BrowserRouter ,
  Route,
  Switch
} from 'react-router-dom';
import renderRouters from './core/routersConfig.jsx';
import routers from './routers.jsx';
function App() {
  return (
 <BrowserRouter>
    {renderRouters(routers)}
 </BrowserRouter>
  );
}

export default App;
