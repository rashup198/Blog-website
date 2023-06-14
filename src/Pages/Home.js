import React from 'react'
import Header from '../Componets/Header'
import Blogs from '../Componets/Blogs'
import Pagination from '../Componets/Pagination'

const Home = () => {
  return (
    <div>
      <Header/>
      <div>
        <Blogs></Blogs>
        <Pagination></Pagination>
      </div>
    </div>
  )
}

export default Home
