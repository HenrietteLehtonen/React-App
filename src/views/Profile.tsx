import {useUserContext} from '../hooks/contextHooks';

const Profile = () => {
  const {user} = useUserContext();

  return (
    <>
      <h2>Profile</h2>

      {/* Ehdollinen renderöinti */}
      {user && (
        <>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>User Level: {user.level_name}</p>
          <p>Created at: {new Date(user.created_at).toLocaleString('fi-FI')}</p>
          <p>usr id {user.user_id}</p>
        </>
      )}
    </>
  );
};
export default Profile;
