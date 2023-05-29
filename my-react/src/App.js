
import './App.css';
import { store } from './App/store'
import { Provider } from 'react-redux';
import Home from './components/Molecules/Home/home';

function App() {
  return (
    
      <Provider store={store}>
        
        <Home/>
      </Provider>
    
  )
};

export default App;
