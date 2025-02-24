import {Link, Outlet} from 'react-router';
import {useEffect} from 'react';
import {useUserContext} from '../hooks/contextHooks';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBookBookmark} from '@fortawesome/free-solid-svg-icons';

const testi = <FontAwesomeIcon icon={faBookBookmark} />;

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
      <h1>{testi} Resepti App</h1>
      <div>
        <nav className="w-full shadow-md">
          <ul className="m-0 flex list-none justify-end pr-10">
            <li>
              <Link
                className="block p-4 text-center text-emerald-600 hover:bg-stone-800 hover:underline"
                to="/"
              >
                Home
              </Link>
            </li>

            {user ? (
              <>
                <li>
                  <Link
                    className="block p-4 text-center text-emerald-600 hover:bg-stone-800"
                    to="/profile"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className="block p-4 text-center text-emerald-600 hover:bg-stone-800"
                    to="/upload"
                  >
                    Upload
                  </Link>
                </li>

                <li>
                  <Link
                    className="block p-4 text-center text-emerald-600 hover:bg-stone-800"
                    to="/Logout"
                  >
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link
                  className="block p-4 text-center text-emerald-600 hover:bg-stone-800"
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
