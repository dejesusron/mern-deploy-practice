import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RootLayout from './pages/root-layout/RootLayout';
import Home from './pages/home/Home';
import Video from './pages/video/Video';
import Web from './pages/web/Web';
import AddItem from './pages/add-item/AddItem';
import UpdateItem from './pages/update-item/UpdateItem';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>

          <Route element={ <RootLayout /> }>
            <Route path='/' element={ <Home /> } />
            <Route path='/add' element={ <AddItem /> } />
            <Route path='/video' element={ <Video /> } />
            <Route path='/web' element={ <Web /> } />
            <Route path='/update/:id' element={ <UpdateItem /> } />
          </Route>

        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
};

export default App;