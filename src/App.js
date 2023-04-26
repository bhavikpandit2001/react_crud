import { Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth';
import Home from './components/Home';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Users from './components/users/Users'
import Posts from './components/posts/Posts';
import { useSelector } from 'react-redux';
import Products from './components/products/Products'

function App() {

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <div className="App">
      {isLoggedIn ?
        <div className='layout'>
          <Navbar />
          <div className='main-section'>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Auth />} />
              <Route path='/products' element={<Products />} />
              <Route path='/users' element={<Users />} />
              <Route path='/posts' element={<Posts />} />
            </Routes>
          </div>
        </div>
        : <Auth />
      }
    </div>
  );
}

export default App;
