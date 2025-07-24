import { useForm } from "react-hook-form";
import { useContext } from "react";
import demoContext from "../demoContext";

const Search = () => {
  const { fetchData } = useContext(demoContext);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (formValue) => {
    const query = formValue.name?.trim();
    if (!query) return;
    fetchData(query);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-center gap-3 max-w-xl mx-auto mt-8 px-4"
    >
      <input
        {...register("name")}
        type="text"
        placeholder="Search movies"
        className="flex-1 px-5 py-3 rounded-xl border border-neutral-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition placeholder:text-gray-400 text-gray-900"
      />
      <button
        type="submit"
        className="px-6 py-3 rounded-xl bg-black text-white font-medium hover:bg-neutral-900 transition"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
