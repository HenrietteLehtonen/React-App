import {Link, Outlet} from 'react-router';

import {useEffect} from 'react';
import {useUserContext} from '../hooks/contextHooks';

export const Layout = () => {
  // jos käyttäjää ei ole kutsu handleAutoLogin
  const {user, handleAutoLogin} = useUserContext();
  useEffect(() => {
    if (!user) {
      try {
        handleAutoLogin();
      } catch (e) {
        console.error((e as Error).message);
      }
    }
  });

  return (
    <>
      <h1 className="main-title">Reseptit jee</h1>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            {user ? (
              <>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/upload">Upload</Link>
                </li>

                <li>
                  <Link to="/Logout">Logout</Link>
                </li>
              </>
            ) : (
              <li>
                <Link to="/Login">Login</Link>
              </li>
            )}
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
