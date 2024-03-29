"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { useFormStatus } from "react-dom";

function SearchButton() {
    const {pending} = useFormStatus()
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-full disabled:opacity-50"
    >
        {pending && "Searching..."}
        {!pending && <MagnifyingGlassIcon className="h-5 w-5"/>}
    </button>
  );
}

export default SearchButton;
