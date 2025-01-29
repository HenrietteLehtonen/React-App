import {MediaItemWithOwner, UserWithNoPassword} from 'hybrid-types/DBTypes';
import {useState, useEffect} from 'react';
import {fetchData} from '../lib/functions';

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

const useUser = () => {
  // iplements auth/user server API
};

const useComments = () => {
  // TODO: iplement media/comments resource API connections
};

export {useMedia};
