const getGif = async (category) => {
    const url =
      `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=5Vd1ZdNtTdeUO4Z0rHQv4xD0Kty0UaI7`;
const response = await fetch(url);
const {data} = await response.json();

const gifs = data.map (img=>{
    return{
        id:img.id,
        title:img.title,
        url: img.images?.downsized_medium?.url
    }
})

console.log(gifs);
return gifs
};

export default getGif