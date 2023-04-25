import React from 'react';
import useItem from '../../hooks/useItem';
import { useNavigate } from 'react-router-dom';

const Manage = () => {
    const [item, setItem] = useItem();
    const navigate = useNavigate()
    const handleEdit = id =>{
      const url = `/edit/${id}`
      navigate(url)
    }
    const handleDelete = id =>{
      const proceed = window.confirm("Confirm Delete?")
      if(proceed){
        const url = `http://localhost:5000/item/${id}`
        fetch(url,{
          method:'DELETE',

        })
        .then(res=>res.json())
        .then(data=>{
          const remaining = item.filter(i=>i._id!==id);
          setItem(remaining)
          console.log(data);
        })
      }
    }
  return (
    <>
    <p className="text-3xl font-semibold text-center mt-5">Manage Your Product</p>
    <p className="text-base mb-5 italic text-center text-green-600">See with different</p>
    <div className="flex flex-wrap gap-5 mx-5">
      {item.map((i) => (
        <div key={i._id}>
          <div className="bg-gray-300 rounded-md p-2">
            <img className="w-52 mx-auto rounded-md mb-2" width={300} src={i.img} alt="sunglass" />
            <div className='flex flex-wrap justify-between'>
            <button onClick={()=>handleDelete(i._id)} className='text-white bg-red-700 py-1 px-3 rounded-md'>Delete</button>
            <button onClick={()=>handleEdit(i._id)} className='text-white bg-yellow-700 py-1 px-3 rounded-md'>Edit</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Manage;