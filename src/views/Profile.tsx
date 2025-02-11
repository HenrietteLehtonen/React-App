import {useUserContext} from '../hooks/contextHooks';

const Profile = () => {
  const {user} = useUserContext();

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
