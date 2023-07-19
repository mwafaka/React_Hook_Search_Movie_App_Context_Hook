import { useForm } from "react-hook-form";
import demoContext from "../demoContext";
import { useContext } from "react";
const Search = () => {
  const { fetchData ,setState} = useContext(demoContext);

  const { register, handleSubmit ,reset} = useForm();

  const onSubmit = (formValue) => {
    fetchData(formValue.name);
    
    // console.log(formValue.name);
    reset()
    setState()
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="search">
      <input {...register("name")} type="text" />
      <input type="submit" name="" id="" />
    </form>
  );
};

export default Search;
