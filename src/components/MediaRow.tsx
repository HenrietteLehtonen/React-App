import {MediaItemWithOwner} from 'hybrid-types/DBTypes';
import {Link} from 'react-router';

type MediaItemProps = {
  item: MediaItemWithOwner;
  setSelectedItem: (item: MediaItemWithOwner | undefined) => void;
};

const MediaRow = (props: MediaItemProps) => {
  const {item} = props;
  return (
    <Link to="/single" state={{item}} className="recipe-card-link">
      <div className="recipe-card">
        <img
          src={
            item.thumbnail ||
            (item.screenshots && item.screenshots[1]) ||
            undefined
          }
          alt={item.title}
        />
        <div className="recipe-card-info">
          <div className="recipe-title">{item.title}</div>
          <div>{item.description}</div>
          <div>{new Date(item.created_at).toLocaleString('fi-FI')}</div>
          <div>{item.filesize}</div>
          <div>{item.media_type}</div>
          <div>{'Media owner: ' + item.username}</div>
        </div>
      </div>
    </Link>
  );
};

export default MediaRow;
