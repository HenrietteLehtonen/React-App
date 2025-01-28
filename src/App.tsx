import {BrowserRouter, Route, Routes} from 'react-router';
import './App.css';
import Home from './views/Home';
import {Profile} from './views/Profile';
import Upload from './views/Upload';
import {Layout} from './components/Layout';
import Single from './views/Single';
import Example from './views/Example';

const App = () => {
  return (
    <>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/upload" element={<Upload />}></Route>
            <Route path="/single" element={<Single />}></Route>
            <Route path="/example" element={<Example />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
