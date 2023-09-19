import React from 'react'
import useFetchapi from '../../component/useFetchapi'

const Fakeapi = () => {
 const [data] =  useFetchapi('https://jsonplaceholder.typicode.com/todos')
 console.log(data)
  return (
    <div className='p-5'>
      {data?.map((item) => 
        <p><strong>{item.id}</strong> {item.title}</p>
      )}      
    </div>
  )
}

export default Fakeapi