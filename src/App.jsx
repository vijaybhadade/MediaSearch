import React from 'react'
import { fetchPhotos ,fetchVideos,fetchGifs} from "./api/MediaApi.js";
const App = () => {

  //Handler for photo access from unplash api
  const handlePhoto = async () => {
    try {
      const data = await  fetchPhotos("cat");
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  }
    
  //handle for video access from pexels api 
   const handleVideo = async () => {
    try {
      const data = await  fetchVideos("cat");
      console.log(data.videos);
    } catch (error) {
      console.error(error.message);
    }
  }

  //handle for giphy  access from pexels api 
   const handleGigphy = async () => {
    try {
      const data = await  fetchGifs("cat");
      console.log(data.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div className="h-screen w-full *:bg-gray-900 text-2xl text-white">
      <button onClick={handlePhoto}
      className=" bg-green-300 text-2xl font-semibold text-white py-3 px-3 m-4"
      >
        getPhotes
      </button>
      <button onClick={handleVideo}
      className=" bg-green-300 text-2xl font-semibold text-white py-3 px-3 m-4"
      >
        get Vidos
      </button>
      
      <button onClick={handleGigphy}
      className=" bg-green-300 text-2xl font-semibold text-white py-3 px-3 m-4"
      >
        get Gifs
      </button>
    </div>
  )
}

export default App
