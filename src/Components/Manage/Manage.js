import React from 'react';
import useItem from '../../hooks/useItem';

const Manage = () => {
    const [item, setItem] = useItem();
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
            <button className='text-white bg-red-700 py-1 px-3 rounded-md'>Delete</button>
            <button className='text-white bg-yellow-700 py-1 px-3 rounded-md'>Edit</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Manage;