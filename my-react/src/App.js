
import './App.css';
import { store } from './App/store';
import { Provider } from 'react-redux'
import Movie from './components/Pages/MoviePage/movie';
import Navbar from './components/Molecules/NavBar/navbar';

function App() {
    return (
      <Provider store = {store}>
        <>
       
        <Navbar/>
        <Movie/>
        </>
        
      </Provider>
    )
    
}

export default App;
