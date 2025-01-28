import {MediaItem} from 'hybrid-types/DBTypes';
import SingleView from '../components/SingleView';
import {useEffect, useState} from 'react';
import MediaRow from '../components/MediaRow';
import {fetchData} from '../lib/functions';

const Home = () => {
  const [mediaArray, setMediaArray] = useState<MediaItem[]>([]);
  const [SelectedItem, setSelectedItem] = useState<MediaItem | undefined>(
    undefined,
  );

  useEffect(() => {
    const getMedia = async () => {
      try {
        const json = await fetchData<MediaItem[]>('test.json');
        setMediaArray(json);
      } catch (error) {
        console.error((error as Error).message);
      }
    };
    getMedia();
  }, []);

  console.log(mediaArray);

  return (
    <>
      {SelectedItem && (
        <SingleView item={SelectedItem} setSelectedItem={setSelectedItem} />
      )}

      <h2>Reseptit</h2>
      <h3>----- haku placeholder --------</h3>

      <div className="recipe-container">
        {mediaArray.map((item) => (
          <MediaRow
            key={item.media_id}
            item={item}
            setSelectedItem={setSelectedItem}
          />
        ))}
      </div>
    </>
  );
};
export default Home;
