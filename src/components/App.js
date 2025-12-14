
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const[data, setData] = useState(null);

  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(res=>res.json())
    .then(res=>setData(res))
    .catch(err=>console.log(err));
  })

  return (
    <div>
        {data!=null
         ?<div>
          <h1>Data fetched from API</h1>
         <pre>
        {JSON.stringify(data)}
        </pre>
         </div>
         : (<p>Loading...</p>)}
    </div>
  )
}

export default App
