import {MediaItem} from 'hybrid-types/DBTypes';
import {Link} from 'react-router';

type MediaItemProps = {
  item: MediaItem;
  setSelectedItem: (item: MediaItem | undefined) => void;
};

const MediaRow = (props: MediaItemProps) => {
  const {item} = props;
  return (
    <Link to="/single" state={{item}} className="recipe-card-link">
      <div className="recipe-card">
        <img src={item.thumbnail || undefined} alt={item.title} />
        <div className="recipe-card-info">
          <div>{item.title}</div>
          <div>{item.description}</div>
          <div>{new Date(item.created_at).toLocaleString('fi-FI')}</div>
          <div>{item.filesize}</div>
          <div>{item.media_type}</div>
        </div>
      </div>
    </Link>
  );
};

export default MediaRow;
