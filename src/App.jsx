import { useEffect, useState } from "react";
import UpdateItem from "./components/UpdateItem";
import axios from "axios";

// use the following link to get the data
// `/doors` will give you all the doors, to get a specific door use `/doors/1`.
const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  // Get the existing item from the server
  const [item, setItem] = useState(null);
  // pass the item to UpdateItem as a prop
  useEffect(()=>{
    const fetchItems = async () =>{
      try {
        const res = await axios.get(API_URI);
        setItem(res.data)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchItems();
  }, [])

  return (
  <>
    {item && item.map((ele, index)=>(
      <UpdateItem key={index} item={ele}/>
    ))}
  </>
);
}

export default App;
