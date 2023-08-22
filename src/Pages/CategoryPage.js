import React from 'react'
import { useLocation, useNavigation } from 'react-router-dom'
import Pagination from '../Componets/Pagination';
import Blogs from '../Componets/Blogs';
import Header from '../Componets/Header';


const CategoryPage = () => {
  const navigation =useNavigation();
  const location = useLocation();\
    return (
    <div>
    <Header></Header>

    <div>
      <button 
      onClick={()=> navigation(-1)}>
        Back
      </button>
      <h2>
        Blogs on <span>{category}</span>
      </h2>
    </div>
    <Blogs></Blogs>
    <Pagination></Pagination>
      
    </div>
  )
}

export default CategoryPage
