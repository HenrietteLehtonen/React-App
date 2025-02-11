import {useForm} from '../hooks/formHooks';
import {Credentials} from '../types/LocalTypes';
import {useUserContext} from '../hooks/contextHooks';

const LoginForm = (props: {toggleRegister: () => void}) => {
  const {handleLogin} = useUserContext();
  const {toggleRegister} = props;

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
        <button onClick={toggleRegister}>register</button>
      </form>
    </>
  );
};

export default LoginForm;
