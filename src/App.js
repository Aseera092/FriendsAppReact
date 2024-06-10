import logo from './logo.svg';
import './App.css';
import Addfriend from './components/Addfriend';
import Search from './components/Search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Viewfriends from './components/Viewfriends';


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/'element={<Addfriend/>}/>
    <Route path='/Serach'element={<Search/>}/>
    <Route path='/Viewall'element={<Viewfriends/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
