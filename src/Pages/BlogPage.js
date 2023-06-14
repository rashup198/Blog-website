import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigation } from 'react-router-dom';
import { baseUrl } from '../baseUrl';
import BlogDetails from '../Componets/BlogDetails';
import Header from '../Componets/Header';


import { AppContext } from '../context/AppContext';

const BlogPage = () => {

  const[blog, setBlog] = useState(null);
  const[relatedblogs, setRelatedBlogs]= useState([]);
  const location = useLocation();
  const navigation= useNavigation();
  const {setLoading, Loading}= useContext(AppContext);

  const blogId = location.pathname.split("/").at(-1);
  
  async function fetchRelatedBlogs(){
      setLoading(true);
      
      let url= `${baseUrl}?blogId=${blogId}`;
  
      try {    
        const result= await fetch(url);
        const data = await result.json();
        console.log(data);
      }
       catch (error) {
        console.log("Error found");
        setBlog(null);
        setRelatedBlogs([]);  
      }
      setLoading(false);
    }

    useEffect(()=>{
      if(blogId){
        fetchRelatedBlogs();
      }
    },[location.pathname])


  return (
    <div>
      <Header></Header>
      <div>
        <button onClick={()=>navigation(-1)}>
          back
        </button>

      </div>
      {
        Loading ?(<p>Loading</p>) : blog ? (<div><BlogDetails post={blog}></BlogDetails>
        <h2>Related Blogs</h2>
        {
          relatedblogs.map((post)=>(
            <div  key={post.id}>
              <BlogDetails post={post}></BlogDetails>
            </div>
                      ))
        }
        </div>) : <p>no Blog Found</p>

      }
    </div>
  )
}

export default BlogPage
