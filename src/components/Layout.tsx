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
          <ul className="m-0 flex list-none justify-end bg-stone-600 p-0">
            <li>
              <Link
                className="block p-4 text-center text-stone-50 hover:bg-stone-800"
                to="/"
              >
                Home
              </Link>
            </li>

            {user ? (
              <>
                <li>
                  <Link
                    className="block p-4 text-center text-stone-50 hover:bg-stone-800"
                    to="/profile"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className="block p-4 text-center text-stone-50 hover:bg-stone-800"
                    to="/upload"
                  >
                    Upload
                  </Link>
                </li>

                <li>
                  <Link
                    className="block p-4 text-center text-stone-50 hover:bg-stone-800"
                    to="/Logout"
                  >
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link
                  className="block p-4 text-center text-stone-50 hover:bg-stone-800"
                  to="/Login"
                >
                  Login
                </Link>
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
