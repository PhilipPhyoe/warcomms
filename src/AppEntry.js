import './AppEntry.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import { selectUser } from './userSlice';
import Login from './Login';
import { useSelector } from 'react-redux';

function AppEntry() {
  //putting user on app

  const user = useSelector(selectUser);

  return (
        <div className="AppEntry">
          <Header />
          {!user ? (<Login />) : (
            <div className='appentry-body'>
              <Sidebar />
              <Feed />
            </div>
            )}
      
    
      </div>
      
    
  );
}

export default AppEntry;
