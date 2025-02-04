import {useForm} from '../hooks/formHooks';
import {Credentials} from '../types/LocalTypes';

import {useUserContext} from '../hooks/contextHooks';

const LoginForm = () => {
  // const {postLogin} = useAuthentication();
  const {handleLogin} = useUserContext();

  const initValues: Credentials = {
    username: '',
    password: '',
  };

  const doLogin = async () => {
    try {
      handleLogin(inputs as Credentials);
    } catch (e) {
      console.log((e as Error).message);
    }
  };

  const {handleSubmit, handleInputChange, inputs} = useForm(
    doLogin,
    initValues,
  );

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="LoginUsername">Username</label>
          <input
            name="username"
            type="text"
            id="LoginUsername"
            onChange={handleInputChange}
            autoComplete="username"
            // value={inputs.username} <- antais inputille suoraan usernamen / initialState
          />
        </div>
        <div>
          <label htmlFor="loginpassword">Password</label>
          <input
            name="password"
            type="password"
            id="loginpassword"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginForm;
