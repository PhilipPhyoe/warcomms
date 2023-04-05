import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { User } from './User';

function App() {
  //putting user on app

  //const user = useSelector(selectUser);

  return (
    <Provider store={store}>
      <div className='App'>
            
          <User />
      </div>
    </Provider>
     
    
  );
}

export default App;
