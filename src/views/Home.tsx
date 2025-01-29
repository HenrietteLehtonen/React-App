import {MediaItemWithOwner} from 'hybrid-types/DBTypes';
import SingleView from '../components/SingleView';
import {useState} from 'react';
import MediaRow from '../components/MediaRow';

import {useMedia} from '../hooks/apiHooks';

const Home = () => {
  const [SelectedItem, setSelectedItem] = useState<
    MediaItemWithOwner | undefined
  >(undefined);

  const {mediaArray} = useMedia();

  return (
    <>
      {SelectedItem && (
        <SingleView item={SelectedItem} setSelectedItem={setSelectedItem} />
      )}

      <h2>Reseptit</h2>
      <h3>----- haku placeholder --------</h3>

      <div className="recipe-container">
        {mediaArray.map((mediaItem) => (
          <MediaRow
            key={mediaItem.media_id}
            item={mediaItem}
            setSelectedItem={setSelectedItem}
          />
        ))}
      </div>
    </>
  );
};
export default Home;
