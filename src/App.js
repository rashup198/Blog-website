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

  return <div>
        hello
        <Header></Header>
        <Blogs></Blogs>
        <Pagination></Pagination>
   </div>;
}
