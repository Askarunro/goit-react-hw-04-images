import s from "./Searchbar.module.css";
// import React, { Component } from "react";
import { useState } from "react";

function SearchBar({ submit }) {
  const [name, setName] = useState("");

  const onChangeInput = (e) => {
    setName(e.currentTarget.value);
  };

  const reset = () => {
    setName("");
    document.querySelector("input").value = "";
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") {
      alert("please write word");
    }
    submit(name);
    reset();
  };

  return (
    <>
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={onSubmit}>
          <button type="submit" className={s.button}>
            <span className={s.label}>Search</span>
          </button>

          <input
            className={s.input}
            type="text"
            //   autocomplete="off"
            //   autofocus
            placeholder="Search images and photos"
            onChange={onChangeInput}
          />
        </form>
      </header>
    </>
  );
}

export default SearchBar;
