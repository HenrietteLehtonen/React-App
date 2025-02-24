import {Tag} from 'hybrid-types/DBTypes';
import {useTag} from '../hooks/apiHooks';
import {useEffect, useState} from 'react';

const Tags = () => {
  const {getAllTags} = useTag();
  const [allTags, setAllTags] = useState<Tag[]>([]);

  const getAll = async () => {
    try {
      const tag = await getAllTags();
      setAllTags(tag);
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  // const getMediasTag = async () => {
  //   try {
  //     const mediaTag = await getTagsByMediaId(item.media_id);
  //     setTag(mediaTag.tag_name);
  //   } catch (e) {
  //     console.error((e as Error).message);
  //   }
  // };

  // useEffect(() => {
  //   getMediasTag();
  // }, [item]);

  return (
    <>
      <div className="flex">
        {allTags.map((tag) => (
          <span
            key={tag.tag_id}
            className="m-2 rounded-sm bg-emerald-600 p-1.5 text-neutral-50"
          >
            {tag.tag_name}
          </span>
        ))}
      </div>
    </>
  );
};

export default Tags;
