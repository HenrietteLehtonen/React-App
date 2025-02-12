import {MediaItemWithOwner} from 'hybrid-types/DBTypes';
import {NavigateFunction, useLocation, useNavigate} from 'react-router';
import Likes from '../components/Likes';

export const Single = () => {
  const navigate: NavigateFunction = useNavigate();
  const {state} = useLocation();
  const item: MediaItemWithOwner = state.item;
  console.log(item);
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
          <div>tähdet: 5</div>
          <div>kommentit: 5</div>
          <div>
            Media owner: <strong>{item.username}</strong>
          </div>
        </div>
        <p className="px-10 py-5">{item.description}</p>
        <p>
          Media owner: <strong>{item.username}</strong>
        </p>
      </div>
    </>
  );
};
export default Single;
