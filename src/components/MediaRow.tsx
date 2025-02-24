import {MediaItemWithOwner} from 'hybrid-types/DBTypes';
import {Link} from 'react-router';
import {useUserContext} from '../hooks/contextHooks';
import CommentCount from './CommentCount';
import Ratings from './Ratings';

type MediaItemProps = {
  item: MediaItemWithOwner;
  setSelectedItem: (item: MediaItemWithOwner | undefined) => void;
};

const MediaRow = (props: MediaItemProps) => {
  const {user} = useUserContext();
  const {item} = props;

  return (
    <>
      <div>
        <Link to="/single" state={{item}} className="text-stone-800">
          <div className="h-[25rem] w-3xs overflow-hidden rounded-2xl border-1 border-stone-300 bg-stone-50 shadow-md transition-all duration-200 ease-in-out hover:-translate-y-2">
            <img
              className="h-40 w-full rounded-t-2xl object-cover"
              src={
                item.thumbnail ||
                (item.screenshots && item.screenshots[1]) ||
                undefined
              }
              alt={item.title}
            />
            <div className="flex flex-col gap-2 p-4">
              <div className="font-bold">{item.title}</div>
              {/* <div>{item.description}</div> */}
              <div>{new Date(item.created_at).toLocaleString('fi-FI')}</div>
              <div>{'Media owner: ' + item.username}</div>
              <CommentCount item={item} />
              <Ratings item={item} />
              <p>media id: {item.media_id}</p>

              {/* <Likes item={item} /> */}
            </div>
          </div>
        </Link>
        {/* onko user kirjautunu näyttää kaikki
         ja onko user id sama kun itemin user id -> näytä napit
         tai jos on admin näytä kaikki - || jompi kumpi true*/}
        {((user && user.user_id === item.user_id) ||
          user?.level_name === 'Admin') && (
          <>
            <button
              className="z-10 m-2 cursor-pointer rounded-sm bg-red-500 p-1 text-stone-50"
              onClick={() => {
                console.log('Delete klivk');
              }}
            >
              Delete
            </button>
            <button
              className="z-10 m-2 cursor-pointer rounded-sm bg-indigo-500 p-1 text-stone-50"
              onClick={() => {
                console.log('Modify klivk');
              }}
            >
              Modify
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default MediaRow;
