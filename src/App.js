import Header from "./Componets/Header";
import Blogs from "./Componets/Blogs";
import Pagination from "./Componets/Pagination";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import './App.css';

export default function App() {
  const {fetchBlogPosts}= useContext(AppContext);

useEffect(()=>{
  fetchBlogPosts();
},[])

  return <div className="w-full h-full flex flex-col justify-center items-center gap-y-1">
        
        <Header></Header>
        <Blogs></Blogs>
        <Pagination></Pagination>
   </div>;
}
