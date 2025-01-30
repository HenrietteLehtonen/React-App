import {useUser} from '../hooks/apiHooks';
import {useForm} from '../hooks/formHooks';
import {RegisterCredentials} from '../types/LocalTypes';
// import {useNavigate} from 'react-router';

const RegisterForm = () => {
  const {postRegister} = useUser(); // {mitä kutsutaan useUser Hookista}
  const initValues: RegisterCredentials = {
    username: '',
    password: '',
    email: '',
  };

  const doRegister = async () => {
    // apiHooks to login
    console.log(inputs);
    try {
      const registerResult = await postRegister(inputs as RegisterCredentials);

      console.log('doRegister result', registerResult);
    } catch (error) {
      console.error((error as Error).message);
      // TODO: tee tähän virheen näyttö käyttäjälle
    }
  };

  const {handleSubmit, handleInputChange, inputs} = useForm(
    doRegister,
    initValues,
  );
  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="RegisterUsername">Username</label>
          <input
            name="username"
            type="text"
            id="RegisterUsername"
            onChange={handleInputChange}
            autoComplete="username"
            // value={inputs.username} <- antais inputille suoraan usernamen / initialState
          />
        </div>
        <div>
          <label htmlFor="registerpassword">Password</label>
          <input
            name="password"
            type="password"
            id="registerpassword"
            onChange={handleInputChange} // käytä tätä rekisteröinnissäkin ?
            autoComplete="current-password"
          />
        </div>
        <div>
          <label htmlFor="registerEmail">Email</label>
          <input
            name="email"
            type="text"
            id="registerEmail"
            onChange={handleInputChange}
            autoComplete="current-email"
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default RegisterForm;
