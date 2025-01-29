import {MediaItemWithOwner} from 'hybrid-types/DBTypes';

const SingleView = (props: {
  item: MediaItemWithOwner | undefined;
  setSelectedItem: (item: MediaItemWithOwner | undefined) => void;
}) => {
  const {item, setSelectedItem} = props;
  console.log(item);
  return (
    <>
      <dialog open>
        {item && (
          <>
            <button
              onClick={() => {
                setSelectedItem(undefined);
              }}
            >
              Close
            </button>
            <h1>{item.media_type}</h1>
            {item.media_type.includes('image') ? (
              <img src={item.filename} alt={item.title} />
            ) : (
              <video src={item.filename} controls />
            )}
            <h1>{item.title}</h1>
            <h2>{item.description}</h2>
          </>
        )}
      </dialog>
    </>
    //
  );
};
export default SingleView;
