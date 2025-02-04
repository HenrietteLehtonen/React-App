import {BrowserRouter, Route, Routes} from 'react-router';
import './App.css';
import Home from './views/Home';
import Profile from './views/Profile';
import Upload from './views/Upload';
import {Layout} from './components/Layout';
import Single from './views/Single';
import Example from './views/Example';
import Login from './views/Login';
import {UserProvider} from './contexts/UserContext';
import Logout from './views/Logout';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <UserProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />}></Route>
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/upload"
                element={
                  <ProtectedRoute>
                    <Upload />
                  </ProtectedRoute>
                }
              ></Route>
              <Route path="/single" element={<Single />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/logout" element={<Logout />}></Route>

              <Route path="/example" element={<Example />}></Route>
            </Route>
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  );
};
export default App;
