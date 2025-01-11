"use client";
import React, {useState} from 'react'
import Header from '../../components/Header';
import axios from 'axios';

const page = ()=>{
  const groom = "Sam";
  const bride = "Kat";
  const [location, setLocation]  = useState("Pune");
  const [user, setUser] = useState("Kevin");
  const [images, setImages] = useState([]);

  const getImages = async ()=>{
    const response = await axios.get("https://picsum.photos/v2/list");
    setImages(response.data);
    console.log(response.data);

  }
  return (
    <>
     <h1 className='font-bold text-xl text-red-700 justify-between'>Hello Axios!! Let's load the data via API.</h1>
    {/*<button className="bg-gray-500 px-2 py-5 rounded" onClick={()=>{setImages()}}>Update</button>
    <Header user={user}/> */}
    <button onClick={getImages} className='bg-green-400 px-2 py-5 rounded'>Load the images.</button> 
    <div className='p-10'>
      {images.map((elem, i)=>{
        return (
          <img 
          key={i}
          src={elem.download_url}
          height={100}
          width={200}
          className='m-10 rounded inline-block'
        />)

      })}
    </div>
    </>
  );
} 

export default page