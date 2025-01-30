import {useUser} from '../hooks/apiHooks';
import {useEffect, useState} from 'react';
import {UserWithNoPassword} from 'hybrid-types/DBTypes';

const Profile = () => {
  // tarvitaat useState päivittämään
  const [user, setUser] = useState<UserWithNoPassword | null>(null);
  // mitä haetaan
  const {getUserByToken} = useUser();

  const getUser = async () => {
    //haetaan token local storageesta
    const token = localStorage.getItem('token');
    //haetaan data jos token löytyy
    if (token) {
      const userResponse = await getUserByToken(token);
      // "tallenna" käyttäjä
      setUser(userResponse.user);
    }
  };

  // käyteetään use effect
  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <h2>Profile</h2>

      {/* Ehdollinen renderöinti */}
      {user && (
        <>
          <h3>Username: {user.username}</h3>
          <h3>Email: {user.email}</h3>
          <h3>User Level: {user.level_name}</h3>
          <h3>
            Created at: {new Date(user.created_at).toLocaleString('fi-FI')}
          </h3>
        </>
      )}
    </>
  );
};
export default Profile;
