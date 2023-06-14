import React from 'react'
import { useNavigation } from 'react-router-dom'
import Pagination from '../Componets/Pagination';
import Blogs from '../Componets/Blogs';
import Header from '../Componets/Header';
import { useLocation } from 'react-router-dom';

const TagPage = () => {
  const navigation = useNavigation();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);

  return (
    <div>
    <Header></Header>

    <div>
      <button onClick={()=>navigation(-1)}>
        back
      </button>
      <h2>Blog Tagged  <span>#{tag}</span></h2>
    </div>
    <Blogs></Blogs>
    <Pagination></Pagination>
    </div>
  )
}

export default TagPage
