import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {

  const {page,handlePageChange, totalPage}= useContext(AppContext)
  return (
    <div>
      <div>
        {page>1&&
          <button onClick={()=> handlePageChange(page-1)}>Previous</button>
        }
        {page<totalPage &&
          <button onClick={()=>handlePageChange(page+1)} >
            Next
          </button>
        }

        <p>
          page {page} of {totalPage}
        </p>
      </div>
    </div>
  )
}

export default Pagination
