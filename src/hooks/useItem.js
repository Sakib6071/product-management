import { useEffect, useState } from "react"

const useItem = () =>{
    const [item,setItem] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/items')
        .then(res=>res.json())
        .then(data=>setItem(data))
    },[])
    return [item,setItem]
}
export default useItem;