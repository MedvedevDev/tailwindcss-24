export function ExpandingSearchBar() {
  return (
    <div className="relative w-[20rem]">
      <input
        type="search"
        placeholder="Search..."
        className="absolute left-0 bg-white/10 text-white w-40 leading-[2] px-2 border-2
       border-gray-700 rounded-lg focus:w-80
        focus:border-pink-600 transition-[width] duration-300 ease-in-out
        focus:outline-none"
      />{" "}
    </div>
  );
}
