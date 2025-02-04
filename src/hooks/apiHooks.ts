import {MediaItemWithOwner, UserWithNoPassword} from 'hybrid-types/DBTypes';
import {useState, useEffect} from 'react';
import {fetchData} from '../lib/functions';
import {Credentials, RegisterCredentials} from '../types/LocalTypes';
import {LoginResponse, UserResponse} from 'hybrid-types/MessageTypes';

const useMedia = () => {
  const [mediaArray, setMediaArray] = useState<MediaItemWithOwner[]>([]);

  useEffect(() => {
    const getMedia = async () => {
      try {
        const media = await fetchData<MediaItemWithOwner[]>(
          import.meta.env.VITE_MEDIA_API + '/media',
        );

        const mediaWithOwner: MediaItemWithOwner[] = await Promise.all(
          media.map(async (item) => {
            const owner = await fetchData<UserWithNoPassword>(
              import.meta.env.VITE_AUTH_API + '/users/' + item.user_id,
            );

            const mediaItem: MediaItemWithOwner = {
              ...item,
              username: owner.username,
            };

            return mediaItem;
          }),
        );

        console.log(mediaWithOwner);

        setMediaArray(mediaWithOwner);
      } catch (error) {
        console.error((error as Error).message);
      }
    };

    getMedia();
  }, []);

  console.log(mediaArray);

  return {mediaArray};
};

const useAuthentication = () => {
  // funktioita mitä hook palauttaa

  const postLogin = async (credentials: Credentials) => {
    // muista! muilla kuin get pyynnöillä tarvitaan options
    const options = {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: {'Content-Type': 'application/json'},
    };
    try {
      return await fetchData<LoginResponse>(
        import.meta.env.VITE_AUTH_API + '/auth/login',
        options,
      );
    } catch (error) {
      console.error(error);
    }
  };
  // kun kutsutaaan hookkia ->> palautetaan toiminnallisuus
  return {postLogin};
};

const useUser = () => {
  // hae käyttäjä ! huom! vaikka get -> tarvitaan options, koska taarvitaan headersiin bearer
  const getUserByToken = async (token: string) => {
    const options = {
      headers: {Authorization: 'Bearer ' + token},
    };
    try {
      return await fetchData<UserResponse>(
        import.meta.env.VITE_AUTH_API + '/users/token',
        options,
      );
    } catch (e) {
      console.error((e as Error).message);
    }
  };

  // rekisteröinti
  const postRegister = async (credentials: RegisterCredentials) => {
    const options = {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: {'Content-Type': 'application/json'},
    };
    console.log(credentials);
    try {
      return await fetchData<UserResponse>(
        import.meta.env.VITE_AUTH_API + '/users',
        options,
      );
    } catch (error) {
      console.error(error);
      // throw new Error((error as Error).message);
    }
  };
  return {getUserByToken, postRegister};
};

const useComments = () => {
  // TODO: iplement media/comments resource API connections
};

export {useMedia, useAuthentication, useUser, useComments};
