import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Addempolyee from './pages/Addempolyee';
import Request from './pages/Request';
import About from './pages/About';
import './style.scss'
import Chat from './pages/Chat';
import EmployeesList from './components/EmployeesList';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {

  const {currentUser} = useContext(AuthContext)
  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to="/" />
    }

    return children
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/"> 
          <Route index element={<Login />} />
          <Route path="home" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="employees" element={<Employees />} />
          <Route path="chat" element={<Chat />} />
          <Route path="add" element={<Addempolyee />} />
          <Route path="request" element={<Request />} />
          <Route path="about" element={<About />} />
          </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
