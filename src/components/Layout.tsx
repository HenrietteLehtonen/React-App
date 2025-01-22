import {Link, Outlet} from 'react-router';

export const Layout = () => {
  return (
    <>
      <h1>My App</h1>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/upload">Upload</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Outlet />
        </main>
        <footer>
          <p>Hello :D</p>
        </footer>
      </div>
    </>
  );
};
