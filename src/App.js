import React from 'react';
import { BrowserRouter as Router, Route, Routes ,Navigate} from 'react-router-dom'; // Import Router, Route, and Routes
import './App.css';
import Main from './Components/main/Main';
import FullTask from './Components/full-task/FullTask';
import LOGIN from './Components/auth/login/login';
import REGISTER from './Components/auth/register/register';
import ProtectedRoute from './ProtectedRoute';
function App() {
  return (
    <>

      <div>
        <Router>
          <Routes> {/* Wrap your Routes */}
            <Route path='/login' element={<LOGIN />}></Route>
              <Route path="/" element={
              <ProtectedRoute>
                <Main />
              </ProtectedRoute>
            } />
            <Route path='/register' element={<REGISTER />}></Route>

            <Route path="/home" element={
              <ProtectedRoute>
                <Main />
              </ProtectedRoute>
            } />
              <Route path="/full-task/:taskId" element={
              <ProtectedRoute>
                <FullTask />
              </ProtectedRoute>
            } />
            {/* <Route path="/full-task/:taskId" element={<FullTask />} />  */}
          <Route path="*" element={<Navigate to="/home" />} />

          </Routes>

        </Router>
      </div>
    </>
  );
}

export default App;
