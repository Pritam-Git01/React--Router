
import './App.css';
import { store } from './App/store';
import { Provider } from 'react-redux'
import Movie from './components/Pages/MoviePage/movie';

function App() {
    return (
      <Provider store = {store}>
        <>
        <Movie/>
        </>
        
      </Provider>
    )
    
}

export default App;
