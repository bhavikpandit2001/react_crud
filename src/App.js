import './App.css';
import Auth from './components/Auth';
import { useSelector } from 'react-redux';
import Layout from './components/Layout';

function App() {

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <div className="App">
      {isLoggedIn ? <Layout/> : <Auth /> }
    </div>
  );
}

export default App;
