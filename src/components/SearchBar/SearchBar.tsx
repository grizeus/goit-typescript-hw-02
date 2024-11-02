import toast, { Toaster } from "react-hot-toast";
import { FormEvent } from "react";

import Button from "../Button/Button";

import css from "./SearchBar.module.css";

type SearchProps = {
  onSearch: (arg0: string) => void;
};

const SearchBar = ({ onSearch }: SearchProps ) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const queryInput = form.querySelector("input") as HTMLInputElement;
    const query : string = queryInput?.value.trim();

    if (!query ||query === "") {
      toast.error("Please enter a search query");
      return;
    }

    onSearch(query);
    form.reset();
  };

  return (
    <header>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 2000,
        }}
      />
      <form onSubmit={handleSubmit} className={css["search-form"]}>
        <input
          className={css["search-input"]}
          type="text"
          autoComplete="off"
          name="query"
          autoFocus
          placeholder="Search images and photos"
        />
        <Button type="submit" isSearch>
          Search
        </Button>
      </form>
    </header>
  );
};

export default SearchBar;
