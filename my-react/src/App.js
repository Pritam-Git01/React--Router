
import './App.css';
import { store } from './App/store'
import { Provider } from 'react-redux';
import Todo from './components/Molecules/todo';

function App() {
  return (
    <>
      <Provider store={store}>
        <Todo/>
        
      </Provider>,
      </>
  )
};

export default App;
