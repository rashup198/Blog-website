import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';




const Blogs = () => {
  //Consume
  const{posts,loading}= useContext(AppContext);
  console.log("printing inside blog componets");
  console.log(posts);
  return (
    <div className=' w-11/12 max-w-[560px] py-3 flex flex-col gap-y-7 mb-[70px]'>
      {
        loading? (<Spinner></Spinner>) : (posts.length===0 ? (<div><p>No Blog Found</p></div>) :(posts.map((post)=>(
          <div key={post.id}>
            <p className='font-bold text-xs'>{post.title}</p>
            <p className='text-[10px]'>
              By <span className='italic'>{post.author}</span>on <span className='underline font-bold'>{post.category}</span>
            </p>
            <p className='text-[10px]'>Posted on {post.date}</p>
            <p className='text-[12px] mt-[10px]'>{post.content}</p>
            <div className='text-blue-500 flex gap-x-5 mt-1 underline font-bold text-[10px]'>
              {post.tags.map((tag,index)=>{
                return <span key={index}>{`#${tag}`}</span>
              })}
            </div>
          </div>
        ))) )
      }
    </div>
  )
}

export default Blogs
