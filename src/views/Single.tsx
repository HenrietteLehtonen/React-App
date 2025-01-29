import {MediaItemWithOwner} from 'hybrid-types/DBTypes';
import {NavigateFunction, useLocation, useNavigate} from 'react-router';

export const Single = () => {
  const navigate: NavigateFunction = useNavigate();
  const {state} = useLocation();
  const item: MediaItemWithOwner = state.item;
  console.log(item);
  return (
    <>
      <h2>Single</h2>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
      {item.media_type.includes('image') ? (
        <img src={item.filename} alt={item.title} />
      ) : (
        <video src={item.filename} controls />
      )}
      <h1>{item.title}</h1>
      <h2>{item.description}</h2>
      <p>
        Media owner: <strong>{item.username}</strong>
      </p>
    </>
  );
};
export default Single;
