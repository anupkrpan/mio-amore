import React, { useEffect, useState } from 'react';

const useFetchapi = (url) => {  
  const [data, setData] = useState([]);
  useEffect( () => { 
  fetch(url)
  .then(response => response.json())
  .then(json => setData(json))
  },[url])
  //console.log(data)
  return [data]  
  } 
   

export default useFetchapi
