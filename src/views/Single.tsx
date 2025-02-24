import {MediaItemWithOwner} from 'hybrid-types/DBTypes';
import {NavigateFunction, useLocation, useNavigate} from 'react-router';
import Likes from '../components/Likes';
import Comments from '../components/Comments';
import CommentCount from '../components/CommentCount';
import Ratings from '../components/Ratings';
// import Tags from '../components/Tags';

export const Single = () => {
  const navigate: NavigateFunction = useNavigate();
  const {state} = useLocation();
  const item: MediaItemWithOwner = state.item;

  console.log(item.media_id);

  // Kommenttien tykkäykset

  return (
    <>
      <button
        className="mt-2 mb-2 cursor-pointer rounded-sm bg-emerald-500 p-1 text-stone-50"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>

      <div className="flex flex-col items-center justify-center bg-[#fff]">
        {item.media_type.includes('image') ? (
          <img
            className="max-h-120 w-fit"
            src={item.filename}
            alt={item.title}
          />
        ) : (
          <video src={item.filename} controls className="max-h-120" />
        )}
        <h2>{item.title}</h2>
        <div className="flex flex-row items-center gap-5 text-stone-500">
          <Likes item={item} />
          <Ratings item={item} />
          <CommentCount item={item} />

          <div>
            Media owner: <strong>{item.username}</strong>
          </div>
        </div>
        <p className="px-10 py-5">{item.description}</p>
        <p>
          Media owner: <strong>{item.username}</strong>
        </p>
        {/* tähän kommentti komponentti */}
        <Comments item={item} />
      </div>
    </>
  );
};
export default Single;
