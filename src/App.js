import Header from "./Componets/Header";
import Blogs from "./Componets/Blogs";
import Pagination from "./Componets/Pagination";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import './App.css';
import { Routes, Route, useSearchParams } from "react-router-dom";
import BlogPage from "./Pages/BlogPage";
import TagPage from "./Pages/TagPage";
import CategoryPage from "./Pages/CategoryPage";
import { useLocation } from "react-router-dom";
import Home from "./Pages/Home";



export default function App() {
  const {fetchBlogPosts}= useContext(AppContext);

  const[searchParams ,setSearchParams]= useSearchParams();
  const location = useLocation();

useEffect(()=>{

  const page =searchParams.get("page")??1;
  if(location.pathname.includes("tags")){
    //iska matlab tags vala page show karna hai
    const tag = location.pathname.split("/").at(-1).replace("-"," ");
    fetchBlogPosts(Number(page),tag);
  }
  else if(location.pathname.includes("categories")){
    const category =location.pathname.split("/").at(-1).replace("-"," ");
    fetchBlogPosts(Number(page),null,category);
  }
  else{

    fetchBlogPosts(Number(page));
  }
},[location.pathname,location.search])

  return (
    <Routes>
      <Route path='/'element={<Home/>} />
      <Route path='/blog/:blogId'element={<BlogPage/>} />
      <Route path='/tags/:tag'element={<TagPage/>} />
      <Route path='/categories/:category'element={<CategoryPage/>} />
    </Routes>
  )
}
