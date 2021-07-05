import { useState, useEffect } from 'react';
import getGif from '../Helpers/getGifs';

const useFetchGif = (category) => {
  const [state, setState] = useState({
    imgs: [],
    loading: true,
  });

  useEffect(() => {
    getGif(category).then((img) => {
      setState({
        imgs: img,
        loading: false,
      });
    });
  }, [category]);
  return state;
};

export default useFetchGif;
