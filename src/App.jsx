// App.js
import React from 'react';
import NavBar from './components/NavBar';  // Ensure the path to NavBar is correct
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../src/components/MainSection/component/Login/';  // Import the Login component
import Dashboard from './components/MainSection/component/Dashboard';  // Ensure the path is correct
import CreateEmployee from './components/MainSection/component/CreateEmployee';  // Ensure the path is correct

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* Define routes using the 'element' prop for react-router-dom v6 */}
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/create-employee' element={<CreateEmployee />} />
      </Routes>
    </Router>
  );
};

export default App;
