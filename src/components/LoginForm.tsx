import {useForm} from '../hooks/formHooks';
import {Credentials} from '../types/LocalTypes';
import {useAuthentication} from '../hooks/apiHooks';
import {useNavigate} from 'react-router';

const LoginForm = () => {
  const navigate = useNavigate();
  const {postLogin} = useAuthentication();

  const initValues: Credentials = {
    username: '',
    password: '',
  };

  const doLogin = async () => {
    // apiHooks to login
    try {
      const loginResult = await postLogin(inputs as Credentials);
      console.log('doLogin result', loginResult);
      // jos kirjautuu -> tallennetaan token localStrorageen
      if (loginResult) {
        localStorage.setItem('token', loginResult.token);
        // kun logalstrorageen tallennettu -> redirect to home / profile yms
        navigate('/');
      }
    } catch (error) {
      console.error((error as Error).message);
      // TODO: tee tähän virheen näyttö käyttäjälle
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
            onChange={handleInputChange} // käytä tätä rekisteröinnissäkin ?
            autoComplete="current-password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginForm;
