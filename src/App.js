import './App.css';
import 'boxicons/css/boxicons.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Home from './pages/home';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element={<AppLayout/>}>
            <Route index element ={<Home/>}/>
            <Route path ='/overview' element ={<Home/>}/>
            <Route path ='/overview/users' element ={<Home/>}/>
            <Route path ='/overview/revenue' element ={<Home/>}/>
            <Route path ='/reports' element ={<Home/>}/>
            <Route path ='/reports/reports1' element ={<Home/>}/>
            <Route path ='/reports/reports2' element ={<Home/>}/>
            <Route path ='/reports/reports3' element ={<Home/>}/>
            
            <Route path ='/team' element ={<Home/>}/>
            <Route path ='/products' element ={<Home/>}/>
            <Route path ='/messages' element ={<Home/>}/>
            <Route path ='/support' element ={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
