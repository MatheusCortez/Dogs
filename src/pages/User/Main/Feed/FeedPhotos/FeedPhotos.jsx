import React from "react";
import useFetch from "../../../../../Hooks/useFetch";
import { PHOTOS_GET } from "../../../../../API/api";
import Error from "../../../../Components/Helpers/Errors/error";
import Loading from "../../../../Components/Helpers/Loading/Loading";

import styles from "./FeedPhotos.module.css";
import FeedPhotoItem from "./FeedPhotosItem/FeedPhotoItem";

function FeedPhotos({page,user, setModalPhoto,setInfinite }) {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const total = 6;
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);
      console.log('Request:', json);
      if (response && response.ok && json.length < total) setInfinite(false);
    }
    fetchPhotos();
  }, [request, user, page, setInfinite]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${styles.feed} animation-left`}>
        {data.map((photo) => (
          <FeedPhotoItem photo={photo} key={photo.id} setModalPhoto={setModalPhoto} />
        ))}
      </ul>
    );
  else return null;
}

export default FeedPhotos;
