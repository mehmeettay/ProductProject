import './App.css';
import {Routes,Route} from 'react-router-dom'
import Product from './pages/Product';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
       <Header/>
      <Routes>
          <Route path="/" element={<Product/>}/>
          
          
        </Routes>

      
    </div>
  );
}

export default App;
