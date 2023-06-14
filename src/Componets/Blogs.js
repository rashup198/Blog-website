import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';




const Blogs = () => {
  //Consume
  const{posts,loading}= useContext(AppContext);
  console.log("printing inside blog componets");
  console.log(posts);
  return (
    <div className=' w-11/12 max-w-[560px] py-3 flex flex-col gap-y-7 mb-[70px]'>
      {
        loading? (<Spinner></Spinner>) : (posts.length===0 ? (<div className='text-center h-screen w-full flex justify-center items-center text-3xl font-bold'><p>No Blog Found</p></div>) :(posts.map((post)=>(
          <BlogDetails key={post.id} post={post}></BlogDetails>
        ))) )
      }
    </div>
  )
}

export default Blogs
