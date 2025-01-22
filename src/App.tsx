import {BrowserRouter, Route, Routes} from 'react-router';
import './App.css';
import Home from './views/Home';
import {Profile} from './views/Profile';
import {Upload} from './views/Upload';
import {Layout} from './components/Layout';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/upload" element={<Upload />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
