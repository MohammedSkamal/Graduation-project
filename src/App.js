
// import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import AddDepartment from './Pages/AddDepartment';
import AddDoctor from './Pages/AddDoctor';
import Departments from './Pages/Department';
import Doctors from './Pages/Doctors';
import Home from './Pages/Home';
function App() {
  return (
    <div className="">
      <Header/>
      <Sidebar/>
      <BrowserRouter>
      <Home/>
      <Doctors/>
      <Departments/>
      <AddDoctor/>
      <AddDepartment/>
      </BrowserRouter>

    </div>
  );
}

export default App;
