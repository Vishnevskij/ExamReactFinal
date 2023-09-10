import { useEffect, useState } from "react";


export const useFetchData = (url, options, isSearched) => {
   const [data,setData] = useState();
   
const getData = () => {
 return fetch(url, options)
    .then(response => response.json())
    .then(responseData => { 
        console.log(responseData)
        setData(responseData)
        return responseData;
   })
   .catch(() => {
    
    setData(null)
   })
}
   useEffect(() => {
    isSearched && getData() 
   }, [url, options])

   return isSearched ? data : getData;
}