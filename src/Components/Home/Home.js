import React from "react";
import useItem from "../../hooks/useItem";

const Home = () => {
  const [item, setItem] = useItem();
  return (
    <>
    <p className="text-3xl font-semibold text-center mt-5">WOW Shop</p>
    <p className="text-base mb-5 italic text-center text-green-600">See with different</p>
    <div className="flex flex-wrap gap-5 mx-5">
      {item.map((i) => (
        <div key={i._id}>
          <div className="bg-gray-300 rounded-md p-2">
            <img className="w-52 mx-auto rounded-md mb-2" width={300} src={i.img} alt="sunglass" />
            <p className="font-semibold px-2">Name : {i.name}</p>

            <p className="font-semibold px-2">Price : {i.price}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Home;
