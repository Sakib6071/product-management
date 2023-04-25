import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const AddProduct = () => {
    
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    const url = 'http://localhost:5000/item'
    fetch(url,{
        method:"POST",
        headers:{
            'content-type':'application/json'

        },
        body: JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(result=>{console.log(result)
        if(result?.acknowledged){
       alert("Item added successfully")}})
    
};

  return <div className="w-3/4 mx-auto"> 
    <p className="text-center text-3xl font-semibold my-10">Add New Product</p>
    <form onSubmit={handleSubmit(onSubmit)}>
      
      <input className="block bg-black text-white border-2 border-white w-full p-3 rounded-lg" placeholder="Product Name" {...register("name", {required:true})} />
      
      
      <input className="block bg-black text-white border-2 border-white w-full p-3 rounded-lg" placeholder="Price" {...register("price", { required: true })} />

      <input className="block bg-black text-white border-2 border-white w-full p-3 rounded-lg" placeholder="Image URL" {...register("img", { required: true })} />
      
      
      
      <input className="block bg-green-700 font-semibold text-white border-2 border-white w-full p-3 rounded-lg" type="submit" value={"Add"} />
    </form>
  </div>;
};

export default AddProduct;
