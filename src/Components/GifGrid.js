import React from 'react';
import useFetchGif from '../Hooks/useFetchGifs';
// import getGif from '../Helpers/getGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const {loading,imgs} = useFetchGif(category)
    // console.log(loading,imgs);
    // const [Images, setImages] = useState([])

    // useEffect(()=>{
    //     getGif(category).then(setImages)
    // },[category])

  return (
      <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>
    <div className="card-grid">
      {loading && <p className="animate__animated animate__bounce">Loading...</p>}

      {
          imgs.map(img=>(
          <GifGridItem {...img} key={img.id}/>
              )
          )
      }
    </div>
    </>
  );
};

export default GifGrid;
