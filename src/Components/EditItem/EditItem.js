import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const EditItem = () => {
  const { id } = useParams();
  console.log(id);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    
     const url = `http://localhost:5000/item/${id}`;
    fetch(url, {
      method: "PUT",
       headers: {
         "content-type": "application/json",
       },
       body: JSON.stringify(data),
     })
       .then((res) => res.json())
      .then((result) => {
         console.log(result);
          alert("Item updated successfully");
          reset()

      });
  };

  return (
    <div className="w-3/4 mx-auto">
      <p className="text-center text-3xl font-semibold my-10">
        Update Product {id}
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="block bg-black text-white border-2 border-white w-full p-3 rounded-lg"
          placeholder="Product Name"
          {...register("name", { required: true })}
        />

        <input
          className="block bg-black text-white border-2 border-white w-full p-3 rounded-lg"
          placeholder="Price"
          {...register("price", { required: true })}
        />

        <input
          className="block bg-black text-white border-2 border-white w-full p-3 rounded-lg"
          placeholder="Image URL"
          {...register("img")}
        />

        <input
          className="block bg-green-700 font-semibold text-white border-2 border-white w-full p-3 rounded-lg"
          type="submit"
          value={"Update"}
        />
      </form>
    </div>
  );
};

export default EditItem;
